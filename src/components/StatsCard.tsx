
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  iconColor: string;
}

export const StatsCard = ({ icon: Icon, value, label, iconColor }: StatsCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center text-white">
      <div className="flex justify-center mb-4">
        <Icon className={`h-8 w-8 ${iconColor}`} />
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-blue-200">{label}</div>
    </div>
  );
};
