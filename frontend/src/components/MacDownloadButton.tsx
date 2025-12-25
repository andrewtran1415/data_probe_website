import { useState, useRef, useEffect } from 'react';
import { Apple, ChevronDown, Loader2, Cpu } from 'lucide-react';
import { downloadFile } from '@/utils/download';
import { toast } from 'sonner';

interface MacDownloadButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  showLabel?: boolean;
}

export function MacDownloadButton({
  variant = 'primary',
  className = '',
  showLabel = true
}: MacDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  const handleDownload = async (architecture: 'intel' | 'apple-silicon') => {
    setIsDownloading(true);
    setIsDropdownOpen(false);

    try {
      await downloadFile('macos', undefined, architecture);
      const archLabel = architecture === 'intel' ? 'Intel' : 'Apple Silicon';
      toast.success('Download started!', {
        description: `Your macOS installer (${archLabel}) is downloading.`,
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

  const baseClasses = "relative inline-flex items-center";
  const variantClasses = variant === 'primary'
    ? "bg-[#D75A4A] text-white hover:bg-[#c54d3d]"
    : "bg-white text-gray-900 border border-gray-200 hover:border-gray-300";

  return (
    <div className={`${baseClasses} ${className}`} ref={dropdownRef}>
      <div className="flex items-stretch rounded-md overflow-hidden">
        {/* Main download button */}
        <button
          onClick={() => handleDownload('apple-silicon')}
          disabled={isDownloading}
          className={`px-5 py-3 ${variantClasses} transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-md`}
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Downloading...</span>
            </>
          ) : (
            <>
              <Apple className="w-4 h-4" />
              {showLabel && <span>Download</span>}
            </>
          )}
        </button>

        {/* Dropdown toggle button */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          disabled={isDownloading}
          className={`px-3 ${variantClasses} transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-r-md border-l ${variant === 'primary' ? 'border-l-white/20' : 'border-l-gray-300'} flex items-center justify-center`}
          aria-label="Select macOS architecture"
        >
          <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[220px] overflow-hidden">
          <button
            onClick={() => handleDownload('apple-silicon')}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-start gap-3 border-b border-gray-100"
          >
            <Cpu className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-gray-900">Apple Silicon</div>
              <div className="text-sm text-gray-500">For M1, M2, M3, M4 Macs</div>
            </div>
          </button>
          <button
            onClick={() => handleDownload('intel')}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-start gap-3"
          >
            <Cpu className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-gray-900">Intel</div>
              <div className="text-sm text-gray-500">For Intel-based Macs</div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
