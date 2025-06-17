
-- Create enum for US states
CREATE TYPE us_state AS ENUM (
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
);

-- Create legal requirements table
CREATE TABLE legal_requirements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  state us_state NOT NULL,
  minimum_age INTEGER NOT NULL DEFAULT 18,
  waiting_period_days INTEGER NOT NULL DEFAULT 0,
  license_validity_days INTEGER NOT NULL DEFAULT 30,
  license_fee_min DECIMAL(10,2),
  license_fee_max DECIMAL(10,2),
  residency_required BOOLEAN NOT NULL DEFAULT false,
  witnesses_required INTEGER NOT NULL DEFAULT 2,
  officiant_registration_required BOOLEAN NOT NULL DEFAULT true,
  self_solemnization_allowed BOOLEAN NOT NULL DEFAULT false,
  blood_test_required BOOLEAN NOT NULL DEFAULT false,
  same_day_ceremony_allowed BOOLEAN NOT NULL DEFAULT true,
  id_requirements TEXT[] NOT NULL DEFAULT '{"Driver License", "Passport"}',
  special_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create legal checklists table
CREATE TABLE legal_checklists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  state us_state NOT NULL,
  item_order INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  is_required BOOLEAN NOT NULL DEFAULT true,
  category TEXT NOT NULL,
  form_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user wedding plans table
CREATE TABLE wedding_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  partner1_name TEXT NOT NULL,
  partner2_name TEXT NOT NULL,
  wedding_date DATE NOT NULL,
  wedding_state us_state NOT NULL,
  ceremony_type TEXT NOT NULL DEFAULT 'civil',
  officiant_name TEXT,
  venue_address TEXT,
  checklist_progress JSONB DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'planning',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reminders table
CREATE TABLE wedding_reminders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  wedding_plan_id UUID REFERENCES wedding_plans(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  reminder_date TIMESTAMP WITH TIME ZONE NOT NULL,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  reminder_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data for Colorado (since it was mentioned in the requirements)
INSERT INTO legal_requirements (
  state, minimum_age, waiting_period_days, license_validity_days,
  license_fee_min, license_fee_max, residency_required, witnesses_required,
  officiant_registration_required, self_solemnization_allowed,
  id_requirements, special_notes
) VALUES (
  'CO', 18, 0, 35, 30.00, 35.00, false, 2, true, true,
  '{"Driver License", "Passport", "State ID"}',
  'Colorado allows self-solemnization. Couples can marry themselves without an officiant. Dog paw prints are allowed as witness signatures in some counties.'
);

-- Insert sample data for Utah
INSERT INTO legal_requirements (
  state, minimum_age, waiting_period_days, license_validity_days,
  license_fee_min, license_fee_max, residency_required, witnesses_required,
  officiant_registration_required, self_solemnization_allowed,
  id_requirements, special_notes
) VALUES (
  'UT', 18, 0, 32, 40.00, 50.00, false, 2, true, false,
  '{"Driver License", "Passport", "State ID"}',
  'Utah offers online application with ID scanning and selfie verification. Fully mobile-capable process available.'
);

-- Insert Colorado checklist items
INSERT INTO legal_checklists (state, item_order, title, description, category, is_required) VALUES
('CO', 1, 'Verify Minimum Age', 'Both parties must be at least 18 years old', 'eligibility', true),
('CO', 2, 'Gather Required IDs', 'Valid driver license, passport, or state ID for both parties', 'documentation', true),
('CO', 3, 'Choose Officiant or Self-Solemnize', 'Decide if you want an officiant or will self-solemnize', 'ceremony', true),
('CO', 4, 'Apply for Marriage License', 'Apply at any county clerk office in Colorado', 'licensing', true),
('CO', 5, 'Pay License Fee', 'Fee ranges from $30-35 depending on county', 'licensing', true),
('CO', 6, 'Plan Ceremony Within 35 Days', 'License expires 35 days from issue date', 'timing', true),
('CO', 7, 'Arrange for Witnesses', 'Two witnesses required unless self-solemnizing', 'ceremony', false),
('CO', 8, 'Return Signed License', 'Must be returned within 63 days of ceremony', 'post-ceremony', true);

-- Insert Utah checklist items  
INSERT INTO legal_checklists (state, item_order, title, description, category, is_required) VALUES
('UT', 1, 'Verify Minimum Age', 'Both parties must be at least 18 years old', 'eligibility', true),
('UT', 2, 'Complete Online Application', 'Use Utah County online system with ID scan and selfie', 'documentation', true),
('UT', 3, 'Upload Required Documents', 'Scan driver license or passport for both parties', 'documentation', true),
('UT', 4, 'Pay Online Fee', 'Submit credit card payment through secure portal', 'licensing', true),
('UT', 5, 'Find Qualified Officiant', 'Ensure officiant is registered in Utah', 'ceremony', true),
('UT', 6, 'Plan Ceremony Within 32 Days', 'License expires 32 days from issue date', 'timing', true),
('UT', 7, 'Arrange for Witnesses', 'Two witnesses required for ceremony', 'ceremony', true),
('UT', 8, 'File Completed License', 'Submit signed license to county clerk', 'post-ceremony', true);

-- Enable RLS
ALTER TABLE legal_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE legal_checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE wedding_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE wedding_reminders ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to legal requirements and checklists
CREATE POLICY "Legal requirements are public" ON legal_requirements
  FOR SELECT USING (true);

CREATE POLICY "Legal checklists are public" ON legal_checklists
  FOR SELECT USING (true);

-- Create policies for user wedding plans
CREATE POLICY "Users can view their own wedding plans" ON wedding_plans
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own wedding plans" ON wedding_plans
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own wedding plans" ON wedding_plans
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policies for reminders
CREATE POLICY "Users can view their wedding reminders" ON wedding_reminders
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM wedding_plans 
      WHERE id = wedding_reminders.wedding_plan_id 
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create reminders for their weddings" ON wedding_reminders
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM wedding_plans 
      WHERE id = wedding_reminders.wedding_plan_id 
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their wedding reminders" ON wedding_reminders
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM wedding_plans 
      WHERE id = wedding_reminders.wedding_plan_id 
      AND user_id = auth.uid()
    )
  );
