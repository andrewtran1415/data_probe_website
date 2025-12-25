import { Download } from 'lucide-react';
import { MacDownloadButton } from './MacDownloadButton';

interface CTAProps {
  onDownloadClick: () => void;
}

export function CTA({ onDownloadClick }: CTAProps) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
          <span className="font-semibold text-sm">BETA</span>
          <span className="text-sm">Free during beta</span>
        </div>
        <h2 className="text-4xl sm:text-5xl text-gray-900 mb-8 leading-tight">
          Start validating your data today
        </h2>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Download DataProbe for free during beta and lock in lifetime access. Transform how you ensure data quality across platforms.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <MacDownloadButton variant="primary" />
          <button
            className="px-7 py-3 bg-white text-gray-900 rounded-md border border-gray-200 hover:border-gray-300 transition-colors flex items-center gap-2 min-w-[220px] justify-center relative"
            onClick={onDownloadClick}
            disabled
          >
            <Download className="w-5 h-5" />
            <span>Download for Windows</span>
            <span className="text-xs text-gray-500 ml-1">(coming soon)</span>
          </button>
        </div>
        
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-blue-600">Beta Special:</span> Completely free • No credit card required • Claim lifetime access now
        </p>
      </div>
    </section>
  );
}