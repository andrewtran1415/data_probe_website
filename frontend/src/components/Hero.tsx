import { Download } from 'lucide-react';
import { SPACING, TYPOGRAPHY } from '@/constants/theme';
import { HERO } from '@/constants/strings';
import { MacDownloadButton } from './MacDownloadButton';

interface HeroProps {
  onDownloadClick: () => void;
}

export function Hero({ onDownloadClick }: HeroProps) {
  return (
    <section className={`pt-32 pb-20 ${SPACING.section.horizontal} bg-[#fafafa]`}>
      <div className={`${SPACING.container.maxWidth} ${SPACING.container.center}`}>
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <span className="font-semibold text-sm">BETA</span>
            <span className="text-sm">Free while in beta - Get lifetime access now</span>
          </div>
          <h1 className={`${TYPOGRAPHY.heading.h1} mb-8 leading-tight`}>
            <span className="text-gray-900">{HERO.title.prefix}</span>
            <span className="text-[#D75A4A]">{HERO.title.highlight}</span>
            <span className="text-gray-900">{HERO.title.suffix}</span>
          </h1>
          
          <p className={`${TYPOGRAPHY.body.large} text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed`}>
            {HERO.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <MacDownloadButton variant="primary" className="px-2 py-1" />
            <button
              className="px-7 py-3 bg-white text-gray-900 rounded-md border border-gray-200 hover:border-gray-300 transition-colors flex items-center gap-2 relative disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={onDownloadClick}
              disabled
            >
              <Download className="w-5 h-5" />
              <span>{HERO.download.windows}</span>
              <span className="text-xs text-gray-500 ml-1">(coming soon)</span>
            </button>
          </div>
          
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-blue-600">Beta Special:</span> Everything is completely free during beta. Download now and claim free lifetime access.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
            <div className="bg-gray-800/50 rounded-md p-6 backdrop-blur">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-gray-500">1</span>
                  <div>
                    <span className="text-purple-400">Connected platforms:</span>
                    <span className="text-gray-300"> Snowflake, BigQuery, Redshift, PostgreSQL, ClickHouse, MySQL</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-500">2</span>
                  <div>
                    <span className="text-blue-400">Running tests:</span>
                    <span className="text-gray-300"> Cross-platform validation...</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-500">3</span>
                  <div>
                    <span className="text-green-400">✓ Validated 847 records across 12 tables</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-500">4</span>
                  <div>
                    <span className="text-green-400">✓ Data consistency: 100%</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-500">5</span>
                  <div>
                    <span className="text-yellow-400">⚠ Found 3 data quality issues</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}