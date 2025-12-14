/**
 * Theme constants for consistent styling across the application
 */

export const COLORS = {
  primary: '#D75A4A',
  primaryHover: '#c54d3d',
  primaryLight: '#ff7a68',
  background: '#fafafa',
  backgroundDark: '#1a1a1a',
  white: '#ffffff',
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  // Connector brand colors
  connectors: {
    snowflake: '#29B5E8',
    bigquery: '#4285F4',
    redshift: '#8C4FFF',
    mongodb: '#47A248',
    sqlServer: '#CC2927',
    oracle: '#F80000',
    athena: '#FF9900',
    clickhouse: '#FFCC00',
    mariaDB: '#003545',
    sqlite: '#003B57',
  },
} as const;

export const SPACING = {
  section: {
    vertical: 'py-32',
    horizontal: 'px-4 sm:px-6 lg:px-8',
  },
  container: {
    maxWidth: 'max-w-7xl',
    center: 'mx-auto',
  },
} as const;

export const TYPOGRAPHY = {
  heading: {
    h1: 'text-5xl sm:text-6xl lg:text-7xl',
    h2: 'text-4xl sm:text-5xl',
    h3: 'text-3xl',
    h4: 'text-2xl',
  },
  body: {
    large: 'text-xl',
    base: 'text-base',
    small: 'text-sm',
    xs: 'text-xs',
  },
} as const;

