
import { Menu, Bell, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="church-gradient text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img 
          src="/lovable-uploads/6e603b04-857a-42d8-8249-27d0efc0c8a8.png" 
          alt="EverUnity Church" 
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h1 className="text-lg font-bold">FastMarriageLicenseBot</h1>
          <p className="text-xs text-blue-200">by EverUnity Church</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
          <Bell className="h-4 w-4" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <Menu className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MapPin className="mr-2 h-4 w-4" />
              Wedding Planning
            </DropdownMenuItem>
            <DropdownMenuItem>
              Ministry Tools
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
