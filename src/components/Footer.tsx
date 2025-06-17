
export const Footer = () => {
  return (
    <footer className="bg-church-dark text-white p-6 mt-8">
      <div className="text-center space-y-3">
        <p className="text-sm">
          © 2024 FastMarriageLicenseBot. All rights reserved.
        </p>
        <p className="text-sm text-blue-200">
          Ordination services provided through EverUnity Church (Non-Profit).
        </p>
        <p className="text-xs text-blue-300">
          Powered by Glowstar Labs
        </p>
        
        <div className="flex justify-center space-x-6 mt-4 text-xs">
          <button className="text-blue-200 hover:text-white transition-colors">
            Privacy Policy
          </button>
          <button className="text-blue-200 hover:text-white transition-colors">
            Terms of Service
          </button>
          <button className="text-blue-200 hover:text-white transition-colors">
            Legal Notices
          </button>
        </div>
      </div>
    </footer>
  );
};
