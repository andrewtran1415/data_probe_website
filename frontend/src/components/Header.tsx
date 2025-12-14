import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { DataProbeLogo } from './DataProbeLogo';
import { COLORS, SPACING } from '@/constants/theme';
import { NAVIGATION } from '@/constants/strings';
import { downloadFile } from '@/utils/download';
import { toast } from 'sonner';

interface HeaderProps {
  onDownloadClick?: () => void;
}

export function Header({ onDownloadClick }: HeaderProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
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
      setIsDownloading(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className={`${SPACING.container.maxWidth} ${SPACING.container.center} ${SPACING.section.horizontal}`}>
        <div className="flex justify-between items-center h-20">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '/');
            }}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Go to home page"
          >
            <DataProbeLogo width={300} height={75} />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('features');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', '#features');
                }
              }}
              className="text-base font-medium text-gray-900 hover:text-[#D75A4A] transition-colors"
            >
              {NAVIGATION.features}
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('how-it-works');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', '#how-it-works');
                }
              }}
              className="text-base font-medium text-gray-900 hover:text-[#D75A4A] transition-colors"
            >
              {NAVIGATION.howItWorks}
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('benefits');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', '#benefits');
                }
              }}
              className="text-base font-medium text-gray-900 hover:text-[#D75A4A] transition-colors"
            >
              {NAVIGATION.benefits}
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('pricing');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', '#pricing');
                }
              }}
              className="text-base font-medium text-gray-900 hover:text-[#D75A4A] transition-colors"
            >
              {NAVIGATION.pricing}
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const event = new CustomEvent('navigate', { detail: 'auth' });
                window.dispatchEvent(event);
              }}
              className="px-5 py-2 text-base font-medium text-gray-900 hover:text-[#D75A4A] transition-colors"
            >
              Login
            </button>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="px-5 py-2 bg-[#D75A4A] text-white rounded-md hover:bg-[#c54d3d] transition-colors text-base font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}