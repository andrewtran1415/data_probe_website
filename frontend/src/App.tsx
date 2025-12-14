import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Connectors } from './components/Connectors';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { CTA } from './components/CTA';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AnimatedValidation } from './components/AnimatedValidation';
import { Pricing } from './components/Pricing';
import { Purchase } from './components/Purchase';
import { Auth } from './components/Auth';
import { Toaster } from './components/ui/sonner';
import type { PageType, PlanType } from '@/types';

export default function App() {
  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Handle initial hash
    handleHashChange();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle navigation events
  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      if (event.detail === 'auth') {
        setCurrentPage('auth');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('navigate', handleNavigate as EventListener);
    return () => window.removeEventListener('navigate', handleNavigate as EventListener);
  }, []);

  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('trial');

  const handlePurchaseClick = (plan: 'trial' | 'monthly' | 'yearly') => {
    setSelectedPlan(plan);
    setCurrentPage('purchase');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'purchase') {
    return <Purchase plan={selectedPlan} onBack={handleBackToHome} />;
  }

  if (currentPage === 'auth') {
    return (
      <div className="min-h-screen bg-white">
        <Toaster />
        <Auth 
          onBack={handleBackToHome}
          onSuccess={() => {
            // Handle successful authentication
            handleBackToHome();
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Header onDownloadClick={() => handlePurchaseClick('trial')} />
      <Hero onDownloadClick={() => handlePurchaseClick('trial')} />
      <AnimatedValidation />
      <Features />
      <Connectors />
      <HowItWorks />
      <Benefits />
      <Pricing onPlanSelect={handlePurchaseClick} />
      <CTA onDownloadClick={() => handlePurchaseClick('trial')} />
      <Footer />
    </div>
  );
}