
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  iconColor?: string;
  onClick?: () => void;
}

export const StatsCard = ({ icon: Icon, value, label, iconColor = "text-gray-600", onClick }: StatsCardProps) => {
  return (
    <Card 
      className={`bg-white/10 border-white/20 ${onClick ? 'cursor-pointer hover:bg-white/20 transition-colors' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <Icon className={`h-8 w-8 ${iconColor}`} />
          <div>
            <p className="text-2xl font-bold text-white">{value}</p>
            <p className="text-blue-200 text-sm">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
