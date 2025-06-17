
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  MapPin, 
  Clock, 
  Download, 
  CheckSquare, 
  Calendar 
} from "lucide-react";

export const QuickActions = () => {
  const actions = [
    {
      icon: MapPin,
      title: "Check State Requirements",
      description: "Get location-specific legal requirements",
      color: "text-blue-500"
    },
    {
      icon: CheckSquare,
      title: "Legal Checklist",
      description: "Interactive step-by-step guide",
      color: "text-green-500"
    },
    {
      icon: FileText,
      title: "Fill Forms",
      description: "Auto-fill marriage license forms",
      color: "text-orange-500"
    },
    {
      icon: Download,
      title: "Download PDFs",
      description: "Get personalized documents",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      title: "Set Reminders",
      description: "Track deadlines and filing dates",
      color: "text-red-500"
    },
    {
      icon: Calendar,
      title: "Wedding Timeline",
      description: "Plan your ceremony schedule",
      color: "text-yellow-500"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {actions.map((action, index) => (
        <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
          <CardContent className="p-4">
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
