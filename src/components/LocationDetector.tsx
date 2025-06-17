
import { useState, useEffect } from "react";
import { MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const LocationDetector = () => {
  const [location, setLocation] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const detectLocation = async () => {
    setIsLoading(true);
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // In a real app, you'd reverse geocode these coordinates
            // For demo purposes, we'll simulate detection
            const { latitude, longitude } = position.coords;
            console.log(`Location detected: ${latitude}, ${longitude}`);
            
            // Simulate API call for location name
            setTimeout(() => {
              setLocation("Colorado, USA");
              setHasPermission(true);
              setIsLoading(false);
            }, 1500);
          } catch (error) {
            console.error("Error getting location name:", error);
            setLocation("Location detection failed");
            setIsLoading(false);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setHasPermission(false);
          setLocation("Please select your state manually");
          setIsLoading(false);
        }
      );
    } else {
      setLocation("Geolocation not supported");
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-white/10 border-white/20 mb-6">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-white" />
            <div>
              <p className="text-white font-medium">Wedding Location</p>
              <p className="text-blue-200 text-sm">
                {location || "Auto-detect your location"}
              </p>
            </div>
          </div>
          
          <Button
            onClick={detectLocation}
            disabled={isLoading}
            variant="secondary"
            size="sm"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Detect"
            )}
          </Button>
        </div>
        
        {hasPermission === false && (
          <p className="text-yellow-300 text-xs mt-2">
            Location permission denied. Please select your state manually below.
          </p>
        )}
      </CardContent>
    </Card>
  );
};
