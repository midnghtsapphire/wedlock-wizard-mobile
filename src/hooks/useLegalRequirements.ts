
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface LegalRequirement {
  id: string;
  state: string;
  minimum_age: number;
  waiting_period_days: number;
  license_validity_days: number;
  license_fee_min: number;
  license_fee_max: number;
  residency_required: boolean;
  witnesses_required: number;
  officiant_registration_required: boolean;
  self_solemnization_allowed: boolean;
  blood_test_required: boolean;
  same_day_ceremony_allowed: boolean;
  id_requirements: string[];
  special_notes: string;
}

export const useLegalRequirements = (state?: string) => {
  return useQuery({
    queryKey: ['legal-requirements', state],
    queryFn: async () => {
      console.log('Fetching legal requirements for state:', state);
      
      let query = supabase
        .from('legal_requirements')
        .select('*');
      
      if (state) {
        query = query.eq('state', state);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching legal requirements:', error);
        throw error;
      }
      
      console.log('Legal requirements data:', data);
      return data as LegalRequirement[];
    },
    enabled: true
  });
};
