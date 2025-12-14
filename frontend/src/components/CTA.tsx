import { useState } from 'react';
import { Download, Apple, Loader2 } from 'lucide-react';
import { downloadFile } from '@/utils/download';
import { toast } from 'sonner';

interface CTAProps {
  onDownloadClick: () => void;
}

export function CTA({ onDownloadClick }: CTAProps) {
  const [isDownloadingMacOS, setIsDownloadingMacOS] = useState(false);

  const handleMacOSDownload = async () => {
    setIsDownloadingMacOS(true);
    try {
      await downloadFile('macos');
      toast.success('Download started!', {
        description: 'Your macOS installer is downloading.',
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to download file';
      toast.error('Download failed', {
        description: errorMessage,
      });
    } finally {
      setIsDownloadingMacOS(false);
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl text-gray-900 mb-8 leading-tight">
          Start validating your data today
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Download DataProbe and transform how you ensure data quality across platforms.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={handleMacOSDownload}
            disabled={isDownloadingMacOS}
            className="px-7 py-3 bg-[#D75A4A] text-white rounded-md hover:bg-[#c54d3d] transition-colors flex items-center gap-2 min-w-[220px] justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloadingMacOS ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Apple className="w-5 h-5" />
                Download for macOS
              </>
            )}
          </button>
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
        
        <p className="text-sm text-gray-500">
          Free download • No credit card required • Runs entirely on your machine
        </p>
      </div>
    </section>
  );
}