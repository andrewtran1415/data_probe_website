import { useState, useEffect } from 'react';
import { ArrowLeft, Check, Mail, CreditCard } from 'lucide-react';
import { DataProbeLogo } from './DataProbeLogo';

interface PurchaseProps {
  plan: 'trial' | 'monthly' | 'yearly';
  onBack: () => void;
}

export function Purchase({ plan, onBack }: PurchaseProps) {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const planDetails = {
    trial: {
      title: 'Start Free Trial',
      price: '$0',
      duration: '7 days',
      description: 'Full access to all features for 7 days',
    },
    monthly: {
      title: 'Monthly License',
      price: '$9',
      duration: 'per month',
      description: 'Valid for one month, cancel anytime',
    },
    yearly: {
      title: 'Yearly License',
      price: '$89',
      duration: 'per year',
      description: 'Best value - Save $19 compared to monthly',
    },
  };

  const currentPlan = planDetails[plan];

  // Initialize Paddle on component mount
  useEffect(() => {
    // Load Paddle.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.paddle.com/paddle/paddle.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Paddle with your vendor ID
      // Replace 'YOUR_VENDOR_ID' with your actual Paddle vendor ID
      if (window.Paddle) {
        window.Paddle.Setup({ 
          vendor: 12345, // Replace with your Paddle vendor ID
          eventCallback: function(data: any) {
            if (data.event === 'Checkout.Complete') {
              handlePurchaseSuccess();
            }
          }
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePurchaseSuccess = () => {
    setPurchaseComplete(true);
    // In production, your backend would handle sending the activation code
    // via Paddle webhook after successful payment
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    setIsProcessing(true);

    if (plan === 'trial') {
      // For free trial, just register the email and generate trial code
      // In production, this would call your backend API
      setTimeout(() => {
        handlePurchaseSuccess();
        setIsProcessing(false);
      }, 1500);
    } else {
      // Open Paddle checkout for paid plans
      if (window.Paddle) {
        // Replace these product IDs with your actual Paddle product IDs
        const productId = plan === 'monthly' ? 'MONTHLY_PRODUCT_ID' : 'YEARLY_PRODUCT_ID';
        
        window.Paddle.Checkout.open({
          product: productId,
          email: email,
          passthrough: JSON.stringify({ 
            email: email,
            plan: plan 
          }),
          successCallback: function(data: any) {
            handlePurchaseSuccess();
            setIsProcessing(false);
          },
          closeCallback: function() {
            setIsProcessing(false);
          }
        });
      } else {
        console.error('Paddle not loaded');
        setIsProcessing(false);
      }
    }
  };

  if (purchaseComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#D75A4A] to-[#ff7a68] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-slate-900 mb-4">
              {plan === 'trial' ? 'Trial Activated!' : 'Purchase Successful!'}
            </h2>
            
            <p className="text-slate-600 mb-8">
              We've sent your activation code to <span className="text-slate-900">{email}</span>
            </p>

            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <h3 className="text-slate-900 mb-4">Next Steps:</h3>
              <ol className="text-left space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#D75A4A] text-white rounded-full flex items-center justify-center text-sm">1</span>
                  <span className="text-slate-600">Check your email inbox for the activation code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#D75A4A] text-white rounded-full flex items-center justify-center text-sm">2</span>
                  <span className="text-slate-600">Download DataProbe if you haven't already</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#D75A4A] text-white rounded-full flex items-center justify-center text-sm">3</span>
                  <span className="text-slate-600">Enter the activation code in the application</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#D75A4A] text-white rounded-full flex items-center justify-center text-sm">4</span>
                  <span className="text-slate-600">Start validating your data!</span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBack}
                className="px-6 py-3 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Back to Home
              </button>
              <a 
                href="#download" 
                className="px-6 py-3 bg-gradient-to-r from-[#D75A4A] to-[#ff7a68] text-white rounded-lg hover:shadow-lg transition-all"
              >
                Download DataProbe
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Pricing
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Summary */}
          <div className="bg-white rounded-2xl p-8 shadow-lg h-fit sticky top-8">
            <div className="mb-6">
              <DataProbeLogo width={180} height={45} />
            </div>

            <div className="border-b border-slate-200 pb-6 mb-6">
              <h3 className="text-slate-900 mb-2">{currentPlan.title}</h3>
              <p className="text-slate-600">{currentPlan.description}</p>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl text-slate-900">{currentPlan.price}</span>
              <span className="text-slate-500">{currentPlan.duration}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#D75A4A]" />
                <span className="text-slate-600">Activation code via email</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#D75A4A]" />
                <span className="text-slate-600">Valid for single machine</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#D75A4A]" />
                <span className="text-slate-600">Unlimited validations</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#D75A4A]" />
                <span className="text-slate-600">All data platform connectors</span>
              </div>
            </div>

            {plan === 'yearly' && (
              <div className="mt-6 bg-gradient-to-r from-[#D75A4A]/10 to-[#ff7a68]/10 rounded-lg p-4">
                <p className="text-sm text-[#D75A4A]">
                  💰 You're saving $19 with the yearly plan!
                </p>
              </div>
            )}
          </div>

          {/* Purchase Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-slate-900 mb-6">
              {plan === 'trial' ? 'Start Your Free Trial' : 'Complete Your Purchase'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D75A4A] focus:border-transparent"
                  />
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  Your activation code will be sent to this email
                </p>
              </div>

              {plan !== 'trial' && (
                <div className="bg-slate-50 rounded-lg p-4 flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-slate-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-700">
                      You'll be redirected to our secure payment processor (Paddle) to complete your purchase.
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-[#D75A4A] to-[#ff7a68] text-white py-3 px-6 rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isProcessing 
                  ? 'Processing...' 
                  : plan === 'trial' 
                    ? 'Start Free Trial' 
                    : `Continue to Payment - ${currentPlan.price}`
                }
              </button>

              {plan !== 'trial' && (
                <p className="text-xs text-center text-slate-500">
                  Secure payment powered by Paddle. 30-day money-back guarantee.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// TypeScript declaration for Paddle
declare global {
  interface Window {
    Paddle: any;
  }
}
