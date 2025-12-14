import { Database, Network, Zap, Shield, CheckCircle, Workflow } from 'lucide-react';
import { SPACING, TYPOGRAPHY } from '@/constants/theme';
import { FEATURES } from '@/constants/strings';
import type { Feature } from '@/types';

const features: Feature[] = [
  {
    icon: Database,
    title: 'Multi-Platform Connectivity',
    description: 'Connect to Snowflake, BigQuery, Redshift, PostgreSQL, ClickHouse, MySQL, and more. All from one interface.',
  },
  {
    icon: Network,
    title: 'Cross-Platform Validation',
    description: 'Compare and validate data across different platforms. Ensure consistency throughout your data ecosystem.',
  },
  {
    icon: Zap,
    title: 'One-Click Testing',
    description: 'Trigger all predefined tests instantly. No manual queries or complex configurations needed.',
  },
  {
    icon: Shield,
    title: 'Runs Locally',
    description: 'Everything executes on your machine. Your data never leaves your infrastructure.',
  },
  {
    icon: CheckCircle,
    title: 'Generic Test Library',
    description: 'Comprehensive built-in tests for data quality, completeness, accuracy, and consistency.',
  },
  {
    icon: Workflow,
    title: 'Multi-Table Support',
    description: 'Validate multiple tables across multiple platforms simultaneously. Scale effortlessly.',
  }
];

export function Features() {
  return (
    <section id="features" className={`${SPACING.section.vertical} ${SPACING.section.horizontal} bg-white`}>
      <div className={`${SPACING.container.maxWidth} ${SPACING.container.center}`}>
        <div className="max-w-3xl mb-20">
          <h2 className={`${TYPOGRAPHY.heading.h2} mb-6 text-gray-900 leading-tight`}>
            {FEATURES.title}
          </h2>
          <p className={`${TYPOGRAPHY.body.large} text-gray-600 leading-relaxed`}>
            {FEATURES.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-all"
              >
                <Icon className="w-10 h-10 text-[#D75A4A] mb-4" />
                <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}