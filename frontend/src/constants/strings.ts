/**
 * String constants for consistent messaging across the application
 */

export const APP_NAME = 'DataProbe';

export const NAVIGATION = {
  features: 'Features',
  howItWorks: 'How it Works',
  benefits: 'Benefits',
  pricing: 'Pricing',
} as const;

export const HERO = {
  title: {
    prefix: 'Cross-platform ',
    highlight: 'data validation',
    suffix: '. Running locally on your machine.',
  },
  description:
    'Connect to multiple data platforms. Validate across databases. Run comprehensive tests with one click. All from your local environment.',
  download: {
    macos: 'Download for macOS',
    windows: 'Download for Windows',
    free: 'Free • Runs locally • No cloud dependency',
  },
} as const;

export const FEATURES = {
  title: 'Beyond traditional data quality tools',
  description:
    'While existing tools validate data within a single warehouse, DataProbe enables validation across your entire data infrastructure.',
} as const;

export const CONNECTORS = {
  title: 'Connect to your entire data stack',
  description:
    'Native support for all major data warehouses, databases, and platforms. One tool for your entire infrastructure.',
  requestConnector: "Don't see your platform? Request a connector",
} as const;

