
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu } from 'lucide-react';
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
            <div className="bg-church-primary p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">FastMarriageLicenseBot</h1>
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
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                Sign In
              </Button>
            )}
            
            <Button variant="ghost" size="sm" className="text-white">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  );
};
