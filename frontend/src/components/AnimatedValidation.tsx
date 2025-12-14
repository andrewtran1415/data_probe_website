import { useEffect, useState } from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import snowflakeLogo from '@/assets/Snowflake_Logo.svg';
import bigqueryLogo from '@/assets/google_bigquery-ar21~bgwhite.svg';
import redshiftLogo from '@/assets/Amazon-Redshift-Logo.svg';
import clickhouseLogo from '@/assets/clickhouse-yellow-badge.svg';

export function AnimatedValidation() {
  const [activeConnection, setActiveConnection] = useState(0);
  const [validationStates, setValidationStates] = useState<{ [key: number]: 'idle' | 'validating' | 'validated' }>({
    0: 'idle',
    1: 'idle',
    2: 'idle',
    3: 'idle',
  });

  const platforms = [
    { name: 'Snowflake', color: '#29B5E8', position: 'top-left', logo: snowflakeLogo },
    { name: 'BigQuery', color: '#4285F4', position: 'top-right', logo: bigqueryLogo },
    { name: 'Redshift', color: '#FF9900', position: 'bottom-left', logo: redshiftLogo },
    { name: 'ClickHouse', color: '#FFCC00', position: 'bottom-right', logo: clickhouseLogo },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection((prev) => {
        const next = (prev + 1) % 4;
        
        // Update validation state
        setValidationStates((states) => ({
          ...states,
          [prev]: 'validating',
        }));

        // Mark as validated after delay
        setTimeout(() => {
          setValidationStates((states) => ({
            ...states,
            [prev]: 'validated',
          }));
        }, 800);

        // Reset after completing all
        if (next === 0) {
          setTimeout(() => {
            setValidationStates({
              0: 'idle',
              1: 'idle',
              2: 'idle',
              3: 'idle',
            });
          }, 2000);
        }

        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'absolute top-0 left-0';
      case 'top-right':
        return 'absolute top-0 right-0';
      case 'bottom-left':
        return 'absolute bottom-0 left-0';
      case 'bottom-right':
        return 'absolute bottom-0 right-0';
      default:
        return '';
    }
  };

  const getLineClass = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'absolute top-1/2 left-1/2 w-32 h-32 origin-bottom-right -rotate-45';
      case 'top-right':
        return 'absolute top-1/2 right-1/2 w-32 h-32 origin-bottom-left rotate-45';
      case 'bottom-left':
        return 'absolute bottom-1/2 left-1/2 w-32 h-32 origin-top-right rotate-45';
      case 'bottom-right':
        return 'absolute bottom-1/2 right-1/2 w-32 h-32 origin-top-left -rotate-45';
      default:
        return '';
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            Cross-Platform Data Validation
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            DataProbe connects and validates data across multiple platforms simultaneously, 
            helping you quickly identify errors and maintain consistent data quality
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto" style={{ height: '500px' }}>
          {/* Central DataProbe Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-[#D75A4A] to-[#ff7a68] rounded-2xl flex items-center justify-center shadow-2xl">
                <Zap className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="bg-slate-900 text-white px-3 py-1 rounded text-sm">
                  DataProbe
                </div>
              </div>
            </div>
          </div>

          {/* Platform Nodes */}
          {platforms.map((platform, index) => {
            const state = validationStates[index];
            const isActive = activeConnection === index;

            return (
              <div key={index}>
                {/* Animated Connection Line */}
                <div className={getLineClass(platform.position)}>
                  <svg className="w-full h-full" style={{ overflow: 'visible' }}>
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={platform.color} stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#D75A4A" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="100%"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="3"
                      strokeDasharray={state === 'validating' ? '10 5' : '0'}
                      className={`transition-all duration-500 ${
                        state === 'validating' ? 'opacity-100' : 'opacity-20'
                      }`}
                      style={{
                        strokeDashoffset: state === 'validating' ? -20 : 0,
                        animation: state === 'validating' ? 'dash 1s linear infinite' : 'none',
                      }}
                    />
                    {/* Data packet moving along line */}
                    {state === 'validating' && (
                      <circle
                        cx="50%"
                        cy="50%"
                        r="4"
                        fill="#D75A4A"
                        className="animate-pulse"
                      >
                        <animateMotion
                          dur="0.8s"
                          repeatCount="1"
                          path="M0,0 L100,100"
                        />
                      </circle>
                    )}
                  </svg>
                </div>

                {/* Platform Node */}
                <div className={getPositionClass(platform.position)}>
                  <div
                    className={`relative transition-all duration-300 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <div
                      className="w-24 h-24 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 bg-white"
                      style={{
                        borderWidth: '3px',
                        borderColor: state === 'validated' ? platform.color : '#e2e8f0',
                        boxShadow: state === 'validated' ? `0 4px 12px ${platform.color}40` : '0 4px 6px rgba(0,0,0,0.1)',
                      }}
                    >
                      <img
                        src={platform.logo}
                        alt={platform.name}
                        className={`${platform.name === 'PostgreSQL' ? 'w-10 h-10' : 'w-14 h-14'} object-contain transition-all duration-300`}
                        style={{
                          opacity: state === 'validated' ? 1 : 0.6,
                        }}
                      />
                    </div>
                    
                    {/* Validation Check Mark */}
                    {state === 'validated' && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                    )}

                    {/* Validating Pulse */}
                    {state === 'validating' && (
                      <div
                        className="absolute inset-0 rounded-xl animate-ping"
                        style={{
                          backgroundColor: platform.color,
                          opacity: 0.3,
                        }}
                      />
                    )}

                    {/* Platform Name */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="text-sm text-slate-700">{platform.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl text-[#D75A4A] mb-2">4+</div>
            <div className="text-slate-600">Data Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-[#D75A4A] mb-2">&lt;2s</div>
            <div className="text-slate-600">Validation Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-[#D75A4A] mb-2">100%</div>
            <div className="text-slate-600">Accuracy</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
    </section>
  );
}