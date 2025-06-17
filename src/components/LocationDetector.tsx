
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Loader2 } from 'lucide-react';
import { useLocationDetection } from '@/hooks/useLocationDetection';

interface LocationDetectorProps {
  onStateDetected?: (state: string) => void;
}

export const LocationDetector = ({ onStateDetected }: LocationDetectorProps) => {
  const { isLoading, location, error, detectLocation, clearLocation } = useLocationDetection();

  const handleDetectLocation = async () => {
    await detectLocation();
    if (location && onStateDetected) {
      // Convert state name to state code if needed
      const stateCodeMap: { [key: string]: string } = {
        'Colorado': 'CO',
        'Utah': 'UT',
        'California': 'CA',
        'Nevada': 'NV',
        'Texas': 'TX',
        'Florida': 'FL',
        'New York': 'NY',
        // Add more as needed
      };
      const stateCode = stateCodeMap[location] || location;
      onStateDetected(stateCode);
    }
  };

  return (
    <Card className="bg-white/10 border-white/20">
      <CardContent className="p-4">
        <h3 className="text-white font-semibold mb-3 flex items-center">
          <MapPin className="mr-2 h-4 w-4" />
          Auto-Detect Your Location
        </h3>
        
        {!location && !error && (
          <div className="space-y-3">
            <p className="text-blue-200 text-sm">
              Let us detect your location to show relevant marriage license information
            </p>
            <Button 
              onClick={handleDetectLocation}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Detecting...
                </>
              ) : (
                <>
                  <MapPin className="mr-2 h-4 w-4" />
                  Detect My Location
                </>
              )}
            </Button>
          </div>
        )}

        {location && (
          <div className="space-y-3">
            <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3">
              <p className="text-green-200 text-sm font-medium">
                📍 Detected: {location}
              </p>
            </div>
            <Button 
              onClick={clearLocation}
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white/10"
            >
              Detect Different Location
            </Button>
          </div>
        )}

        {error && (
          <div className="space-y-3">
            <div className="bg-orange-600/20 border border-orange-500/30 rounded-lg p-3">
              <p className="text-orange-200 text-sm">{error}</p>
            </div>
            <Button 
              onClick={handleDetectLocation}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
