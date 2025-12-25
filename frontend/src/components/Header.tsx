import { DataProbeLogo } from './DataProbeLogo';
import { Download } from 'lucide-react';
import { SPACING } from '@/constants/theme';
import { NAVIGATION } from '@/constants/strings';

interface HeaderProps {
  onDownloadClick?: () => void;
}

export function Header({ onDownloadClick }: HeaderProps) {
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
              className="text-gray-900 hover:text-[#D75A4A] transition-colors"
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
              className="text-gray-900 hover:text-[#D75A4A] transition-colors"
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
              className="text-gray-900 hover:text-[#D75A4A] transition-colors"
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
              className="text-gray-900 hover:text-[#D75A4A] transition-colors"
            >
              {NAVIGATION.pricing}
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
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
              className="px-5 py-2 bg-[#D75A4A] text-white rounded-md hover:bg-[#c54d3d] transition-colors text-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}