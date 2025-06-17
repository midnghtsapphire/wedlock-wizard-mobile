
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLegalRequirements } from '@/hooks/useLegalRequirements';
import { ExternalLink, Clock, DollarSign, Users, FileText } from 'lucide-react';

interface StateRequirementsProps {
  stateCode: string;
}

export const StateRequirements = ({ stateCode }: StateRequirementsProps) => {
  const { data: requirements, isLoading, error } = useLegalRequirements(stateCode);

  if (isLoading) {
    return (
      <Card className="bg-white/10 border-white/20">
        <CardContent className="p-6">
          <div className="text-white text-center">Loading requirements...</div>
        </CardContent>
      </Card>
    );
  }

  if (error || !requirements || requirements.length === 0) {
    return (
      <Card className="bg-white/10 border-white/20">
        <CardContent className="p-6">
          <div className="text-white text-center">
            Requirements data not available for this state yet.
          </div>
        </CardContent>
      </Card>
    );
  }

  const stateReq = requirements[0];

  return (
    <Card className="bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-lg">
          {stateReq.state} Marriage License Requirements
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/5 rounded-lg p-3">
            <div className="flex items-center space-x-2 text-blue-200 mb-1">
              <Clock className="h-4 w-4" />
              <span className="font-medium">Age & Timing</span>
            </div>
            <div className="text-white space-y-1">
              <p>Min Age: {stateReq.minimum_age}</p>
              <p>Waiting Period: {stateReq.waiting_period_days} days</p>
              <p>Valid for: {stateReq.license_validity_days} days</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-3">
            <div className="flex items-center space-x-2 text-green-200 mb-1">
              <DollarSign className="h-4 w-4" />
              <span className="font-medium">Fees</span>
            </div>
            <div className="text-white">
              <p>${stateReq.license_fee_min} - ${stateReq.license_fee_max}</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-3">
            <div className="flex items-center space-x-2 text-yellow-200 mb-1">
              <Users className="h-4 w-4" />
              <span className="font-medium">Witnesses</span>
            </div>
            <div className="text-white">
              <p>{stateReq.witnesses_required} required</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-3">
            <div className="flex items-center space-x-2 text-purple-200 mb-1">
              <FileText className="h-4 w-4" />
              <span className="font-medium">Special Options</span>
            </div>
            <div className="text-white text-xs">
              {stateReq.self_solemnization_allowed && <p>✓ Self-solemnization OK</p>}
              {stateReq.same_day_ceremony_allowed && <p>✓ Same-day ceremony</p>}
              {!stateReq.residency_required && <p>✓ No residency required</p>}
            </div>
          </div>
        </div>

        {stateReq.special_notes && (
          <div className="bg-white/5 rounded-lg p-3">
            <h4 className="text-white font-medium mb-2">Important Notes:</h4>
            <p className="text-blue-200 text-sm">{stateReq.special_notes}</p>
          </div>
        )}

        <div className="pt-2">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => {
              // You could add state-specific application links here
              window.open(`https://www.google.com/search?q=${stateReq.state}+marriage+license+application+online`, "_blank");
            }}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Find {stateReq.state} Application
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
