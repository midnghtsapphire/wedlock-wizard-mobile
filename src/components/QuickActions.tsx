
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  MapPin, 
  CheckSquare, 
  Calendar,
  CreditCard,
  Smartphone
} from "lucide-react";
import { openWorkRequestResearch } from "@/lib/workRequestResearch";

export const QuickActions = () => {
  const actions = [
    {
      icon: MapPin,
      title: "Find Online Applications",
      description: "Discover states with online marriage license systems",
      color: "text-blue-500",
      action: () => {
        openWorkRequestResearch({
          title: "Find online marriage license applications",
          description: "discover official state and county application portals",
          labels: ["online application", "official source", "marriage license"],
        });
      }
    },
    {
      icon: Smartphone,
      title: "Mobile-Ready States",
      description: "States offering mobile application processes",
      color: "text-green-500",
      action: () => {
        openWorkRequestResearch({
          title: "Mobile-Ready States",
          labels: ["mobile application", "smartphone", "digital process"],
        });
      }
    },
    {
      icon: CheckSquare,
      title: "Requirements Checklist",
      description: "State-specific document requirements",
      color: "text-orange-500",
      action: () => {
        openWorkRequestResearch({
          title: "State marriage license requirements checklist",
          labels: ["checklist", "documents", "state requirements"],
        });
      }
    },
    {
      icon: FileText,
      title: "Application Forms",
      description: "Download and fill marriage license forms",
      color: "text-purple-500",
      action: () => {
        openWorkRequestResearch({
          title: "Marriage license application forms",
          labels: ["downloadable forms", "pdf"],
        });
      }
    },
    {
      icon: CreditCard,
      title: "Fee Calculator",
      description: "Calculate marriage license fees by location",
      color: "text-red-500",
      action: () => {
        openWorkRequestResearch({
          title: "Marriage license fee by state and county",
          labels: ["fees", "cost calculator"],
        });
      }
    },
    {
      icon: Calendar,
      title: "Processing Times",
      description: "Check application processing timeframes",
      color: "text-yellow-500",
      action: () => {
        openWorkRequestResearch({
          title: "Marriage license processing times",
          labels: ["wait time", "same day processing"],
        });
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
