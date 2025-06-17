
import { useState, useCallback } from 'react';

interface LocationState {
  isLoading: boolean;
  location: string | null;
  error: string | null;
  hasPermission: boolean | null;
}

export const useLocationDetection = () => {
  const [state, setState] = useState<LocationState>({
    isLoading: false,
    location: null,
    error: null,
    hasPermission: null
  });

  const detectLocation = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    if (!("geolocation" in navigator)) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: "Geolocation not supported",
        hasPermission: false
      }));
      return;
    }

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000,
          enableHighAccuracy: true
        });
      });

      const { latitude, longitude } = position.coords;
      console.log(`Detected coordinates: ${latitude}, ${longitude}`);

      // In a production app, you would reverse geocode these coordinates
      // For now, we'll simulate state detection based on rough coordinates
      let detectedState = "Unknown";
      
      // Simple state detection based on coordinates (this is very basic)
      if (latitude >= 37 && latitude <= 41 && longitude >= -109 && longitude <= -102) {
        detectedState = "Colorado";
      } else if (latitude >= 37 && latitude <= 42 && longitude >= -114 && longitude <= -109) {
        detectedState = "Utah";
      } else if (latitude >= 32 && latitude <= 42 && longitude >= -124 && longitude <= -114) {
        detectedState = "California";
      }

      setState(prev => ({
        ...prev,
        isLoading: false,
        location: detectedState,
        hasPermission: true
      }));

    } catch (error) {
      console.error("Geolocation error:", error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: "Location detection failed. Please select your state manually.",
        hasPermission: false
      }));
    }
  }, []);

  const clearLocation = useCallback(() => {
    setState({
      isLoading: false,
      location: null,
      error: null,
      hasPermission: null
    });
  }, []);

  return {
    ...state,
    detectLocation,
    clearLocation
  };
};
