
import { Header } from "@/components/Header";
import { StatsCard } from "@/components/StatsCard";
import { QuickActions } from "@/components/QuickActions";
import { LocationDetector } from "@/components/LocationDetector";
import { Footer } from "@/components/Footer";
import { StateSelector } from "@/components/StateSelector";
import { StateRequirements } from "@/components/StateRequirements";
import { useState } from "react";
import { Users, Download, Award, Star, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedState, setSelectedState] = useState<string>("");

  const handleStateDetected = (stateCode: string) => {
    setSelectedState(stateCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-church-primary via-church-dark to-church-primary">
      <Header />
      
      <main className="pb-6">
        {/* Hero Section */}
        <div className="px-4 py-6 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Marriage License Fast Track</h2>
          <p className="text-blue-200 text-sm mb-6">
            Find online applications, mobile processing, and instant approval options across all 50 states
          </p>
        </div>

        {/* State Selector */}
        <div className="px-4 mb-6">
          <h3 className="text-white text-lg font-semibold mb-4">Select Any State</h3>
          <StateSelector 
            selectedState={selectedState} 
            onStateChange={setSelectedState} 
          />
        </div>

        {/* State Requirements Display */}
        {selectedState && (
          <div className="px-4 mb-6">
            <StateRequirements stateCode={selectedState} />
          </div>
        )}

        {/* Location Detection */}
        <div className="px-4 mb-6">
          <LocationDetector onStateDetected={handleStateDetected} />
        </div>

        {/* Quick Online Options */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <h4 className="text-white font-semibold mb-3">🚀 Instant Online Applications</h4>
            <div className="space-y-2">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm py-3 px-2"
                onClick={() => window.open("https://www.utah.gov/licensing/marriagelicense/", "_blank")}
              >
                <CreditCard className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Utah - Online with Credit Card (32 days validity)</span>
              </Button>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm py-3 px-2"
                onClick={() => window.open("https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Clerk-Recorder/Marriage-Licenses", "_blank")}
              >
                <Clock className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Colorado - Same Day Processing Available</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 px-4 mb-6">
          <StatsCard
            icon={Users}
            value="12 States"
            label="Online Applications"
            iconColor="text-blue-400"
          />
          <StatsCard
            icon={Download}
            value="38 States"
            label="Downloadable Forms"
            iconColor="text-green-400"
          />
          <StatsCard
            icon={Award}
            value="50 States"
            label="Requirements Covered"
            iconColor="text-yellow-400"
          />
          <StatsCard
            icon={Star}
            value="24/7"
            label="Processing Available"
            iconColor="text-purple-400"
          />
        </div>

        {/* Quick Actions */}
        <div className="px-4 mb-6">
          <h3 className="text-white text-lg font-semibold mb-4">Marriage License Tools</h3>
          <QuickActions />
        </div>

        {/* Featured States */}
        <div className="px-4 mb-6">
          <h3 className="text-white text-lg font-semibold mb-4">Featured Processing Options</h3>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-white text-sm font-medium">Utah - Full Mobile Processing</p>
              <p className="text-blue-200 text-xs">Scan IDs, upload selfies, pay online with credit card. 32-day validity period.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-white text-sm font-medium">Colorado - Self-Solemnization Option</p>
              <p className="text-blue-200 text-xs">Marry yourselves without an officiant. Same-day processing in most counties.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-white text-sm font-medium">Nevada - 24/7 Processing Available</p>
              <p className="text-blue-200 text-xs">Las Vegas offers round-the-clock marriage license processing for immediate ceremonies.</p>
            </div>
          </div>
        </div>

        {/* Educational Tips */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <h4 className="text-white font-semibold mb-2">💡 Pro Tip</h4>
            <p className="text-blue-200 text-sm">
              Many states now offer online pre-applications that can save hours at the clerk's office. 
              Always check expiration dates - some licenses are valid for only 30-60 days!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
