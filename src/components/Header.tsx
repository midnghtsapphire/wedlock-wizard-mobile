
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AuthModal } from './AuthModal';
import { UserMenu } from './UserMenu';
import { useAuth } from '@/contexts/AuthContext';

export const Header = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <>
      <header className="bg-church-dark/95 backdrop-blur-sm border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-church-primary p-2 rounded-lg hover:bg-church-primary/80 transition-colors">
                  <img 
                    src="/lovable-uploads/96080cad-aa84-4cbe-9cd0-b9fd0672a00c.png" 
                    alt="EverUnity Church Logo" 
                    className="h-6 w-6 object-contain"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <div className="flex flex-col items-center space-y-4 p-6">
                  <img 
                    src="/lovable-uploads/96080cad-aa84-4cbe-9cd0-b9fd0672a00c.png" 
                    alt="EverUnity Church Logo" 
                    className="w-48 h-48 object-contain"
                  />
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-church-primary">EverUnity Church</h2>
                    <p className="text-sm text-muted-foreground mt-2">
                      Non-denominational Church - Accepts all believers
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <div>
              <h1 className="text-white font-bold text-base sm:text-lg leading-tight">FastMarriageLicenseBot</h1>
              <p className="text-blue-200 text-xs">Powered by EverUnity Church</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {loading ? (
              <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
            ) : user ? (
              <UserMenu />
            ) : (
              <Button 
                onClick={() => setAuthModalOpen(true)}
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs px-2 py-1"
              >
                Sign In
              </Button>
            )}
            
            <Button variant="ghost" size="sm" className="text-white p-2">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  );
};
