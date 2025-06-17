
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  MapPin, 
  Clock, 
  Download, 
  CheckSquare, 
  Calendar,
  CreditCard,
  Smartphone
} from "lucide-react";

export const QuickActions = () => {
  const actions = [
    {
      icon: MapPin,
      title: "Find Online Applications",
      description: "Discover states with online marriage license systems",
      color: "text-blue-500",
      action: () => {
        window.open("https://www.utah.gov/licensing/marriagelicense/", "_blank");
      }
    },
    {
      icon: Smartphone,
      title: "Mobile-Ready States",
      description: "States offering mobile application processes",
      color: "text-green-500",
      action: () => {
        // Navigate to mobile-friendly state list
        console.log("Navigate to mobile states");
      }
    },
    {
      icon: CheckSquare,
      title: "Requirements Checklist",
      description: "State-specific document requirements",
      color: "text-orange-500",
      action: () => {
        console.log("Show requirements checklist");
      }
    },
    {
      icon: FileText,
      title: "Application Forms",
      description: "Download and fill marriage license forms",
      color: "text-purple-500",
      action: () => {
        console.log("Show application forms");
      }
    },
    {
      icon: CreditCard,
      title: "Fee Calculator",
      description: "Calculate marriage license fees by location",
      color: "text-red-500",
      action: () => {
        console.log("Show fee calculator");
      }
    },
    {
      icon: Calendar,
      title: "Processing Times",
      description: "Check application processing timeframes",
      color: "text-yellow-500",
      action: () => {
        console.log("Show processing times");
      }
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action, index) => (
        <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
          <CardContent className="p-4" onClick={action.action}>
            <div className="flex flex-col items-center text-center space-y-2">
              <action.icon className={`h-6 w-6 ${action.color}`} />
              <h3 className="text-sm font-semibold text-white">{action.title}</h3>
              <p className="text-xs text-blue-200">{action.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
