
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

interface DownloadableFormsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DOWNLOADABLE_STATES = [
  'Alabama', 'Alaska', 'Arkansas', 'Connecticut', 'Delaware', 'Georgia', 'Hawaii', 'Idaho', 
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Michigan', 
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'New Hampshire', 'New Jersey', 
  'New Mexico', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Pennsylvania', 
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Vermont', 'Virginia', 
  'West Virginia', 'Wisconsin', 'Wyoming'
];

export const DownloadableFormsModal = ({ isOpen, onClose }: DownloadableFormsModalProps) => {
  const handleDownloadForm = (state: string) => {
    // This would typically link to actual state forms
    const searchQuery = `${state} marriage license application form filetype:pdf`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">38 States with Downloadable Marriage License Forms</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 mb-6 p-4 bg-yellow-50 rounded-lg">
          <div className="flex items-center mb-2">
            <FileText className="mr-2 h-5 w-5 text-yellow-600" />
            <h4 className="font-semibold text-yellow-900">How it Works</h4>
          </div>
          <p className="text-yellow-800 text-sm">
            These states provide downloadable PDF forms that you can fill out in advance. 
            You'll still need to submit them in person or by mail, but having them pre-filled saves time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {DOWNLOADABLE_STATES.map((state) => (
            <div key={state} className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{state}</h3>
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => handleDownloadForm(state)}
                  className="ml-2"
                >
                  <Download className="mr-1 h-3 w-3" />
                  Form
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Download className="mr-2 h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-green-900">Download Tips</h4>
          </div>
          <ul className="text-green-800 text-sm space-y-1">
            <li>• Forms are usually available as PDF files on state government websites</li>
            <li>• Print forms clearly and use black ink when filling them out</li>
            <li>• Check for any updated versions before your visit</li>
            <li>• Some states require notarization or witnesses</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};
