
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, CreditCard } from 'lucide-react';

interface OnlineStatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ONLINE_STATES = [
  { 
    name: 'Utah', 
    code: 'UT',
    url: 'https://www.utah.gov/licensing/marriagelicense/',
    description: 'Full online application with credit card payment',
    features: ['ID scanning', 'Selfie upload', '32-day validity']
  },
  { 
    name: 'Colorado', 
    code: 'CO',
    url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Clerk-Recorder/Marriage-Licenses',
    description: 'Online pre-application available',
    features: ['Self-solemnization option', 'Same-day processing']
  },
  { 
    name: 'Nevada', 
    code: 'NV',
    url: 'https://www.clarkcountynv.gov/government/departments/clerk/services/marriage_licenses.php',
    description: 'Las Vegas online application',
    features: ['24/7 processing', 'Instant ceremonies']
  },
  { 
    name: 'California', 
    code: 'CA',
    url: 'https://www.sccgov.org/sites/rrc/pages/marriage-license.aspx',
    description: 'County-specific online applications',
    features: ['Multiple counties', 'Online payment']
  },
  { 
    name: 'Texas', 
    code: 'TX',
    url: 'https://www.traviscountytx.gov/county-clerk/records/marriage-licenses',
    description: 'Select counties offer online services',
    features: ['Travis County online', 'Digital processing']
  },
  { 
    name: 'Florida', 
    code: 'FL',
    url: 'https://www.miamidade.gov/clerk/marriage-license.asp',
    description: 'Miami-Dade and other counties',
    features: ['Online application', 'E-signatures']
  },
  { 
    name: 'New York', 
    code: 'NY',
    url: 'https://www.nyc.gov/site/cityclerk/marriage/marriage-license-application.page',
    description: 'NYC online marriage license',
    features: ['Online application', 'Appointment booking']
  },
  { 
    name: 'Arizona', 
    code: 'AZ',
    url: 'https://www.maricopa.gov/1396/Marriage-License',
    description: 'Maricopa County online',
    features: ['Digital application', 'Online payment']
  },
  { 
    name: 'Washington', 
    code: 'WA',
    url: 'https://kingcounty.gov/en/dept/records-licensing/licensing/marriage-domestic-partnership',
    description: 'King County and others',
    features: ['Online services', 'Digital records']
  },
  { 
    name: 'Oregon', 
    code: 'OR',
    url: 'https://www.multco.us/recording/marriage-licenses',
    description: 'Multnomah County online',
    features: ['Web application', 'Electronic filing']
  },
  { 
    name: 'Illinois', 
    code: 'IL',
    url: 'https://www.cookcountyil.gov/service/marriage-licenses',
    description: 'Cook County online services',
    features: ['Online application', 'Digital processing']
  },
  { 
    name: 'Massachusetts', 
    code: 'MA',
    url: 'https://www.boston.gov/departments/registry/how-get-married-boston',
    description: 'Boston and select cities',
    features: ['Online forms', 'Digital submission']
  }
];

export const OnlineStatesModal = ({ isOpen, onClose }: OnlineStatesModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">12 States with Online Marriage License Applications</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 mt-4">
          {ONLINE_STATES.map((state) => (
            <div key={state.code} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{state.name}</h3>
                <Button 
                  size="sm"
                  onClick={() => window.open(state.url, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Apply Online
                </Button>
              </div>
              
              <p className="text-gray-600 mb-3">{state.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {state.features.map((feature, index) => (
                  <span 
                    key={index}
                    className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center mb-2">
            <CreditCard className="mr-2 h-5 w-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">Pro Tip</h4>
          </div>
          <p className="text-blue-800 text-sm">
            States with full online applications typically allow credit card payments and digital document uploads. 
            Always verify current availability as online services are constantly expanding.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
