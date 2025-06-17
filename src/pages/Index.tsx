
import { Header } from "@/components/Header";
import { StatsCard } from "@/components/StatsCard";
import { QuickActions } from "@/components/QuickActions";
import { LocationDetector } from "@/components/LocationDetector";
import { Footer } from "@/components/Footer";
import { Users, Download, Award, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-church-primary via-church-dark to-church-primary">
      <Header />
      
      <main className="pb-6">
        {/* Hero Section */}
        <div className="px-4 py-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Ministers Worldwide</h2>
          <p className="text-blue-200 text-sm mb-6">
            Join our growing community of legal wedding officiants and spiritual leaders
          </p>
        </div>

        {/* Location Detection */}
        <div className="px-4">
          <LocationDetector />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 px-4 mb-6">
          <StatsCard
            icon={Users}
            value="50,000+"
            label="Ministers Ordained"
            iconColor="text-blue-400"
          />
          <StatsCard
            icon={Download}
            value="250K+"
            label="Certificates Downloaded"
            iconColor="text-green-400"
          />
          <StatsCard
            icon={Award}
            value="50"
            label="State Laws"
            iconColor="text-yellow-400"
          />
          <StatsCard
            icon={Star}
            value="4.9/5"
            label="Customer Rating"
            iconColor="text-yellow-400"
          />
        </div>

        {/* Quick Actions */}
        <div className="px-4 mb-6">
          <h3 className="text-white text-lg font-semibold mb-4">Quick Actions</h3>
          <QuickActions />
        </div>

        {/* Educational Tips */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <h4 className="text-white font-semibold mb-2">💡 Today's Tip</h4>
            <p className="text-blue-200 text-sm">
              Colorado allows self-solemnization, meaning couples can legally marry themselves 
              without an officiant. Perfect for intimate elopements!
            </p>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="px-4">
          <h3 className="text-white text-lg font-semibold mb-4">Recent Updates</h3>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-white text-sm font-medium">Utah Online Applications Now Available</p>
              <p className="text-blue-200 text-xs">Scan IDs, upload selfies, and pay online with 32-day validity</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-white text-sm font-medium">New Colorado Pet Signature Feature</p>
              <p className="text-blue-200 text-xs">Add your dog's paw print to make your ceremony extra special</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
