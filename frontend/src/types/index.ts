/**
 * Shared TypeScript types and interfaces
 */

export type PlanType = 'trial' | 'monthly' | 'yearly';
export type PageType = 'home' | 'purchase' | 'auth';

export interface Connector {
  name: string;
  logo: React.ReactNode;
  color: string; // Hex color value for inline styles
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

