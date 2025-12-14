import { Check, Download, Key } from 'lucide-react';

interface PricingProps {
  onPlanSelect: (plan: 'trial' | 'monthly' | 'yearly') => void;
}

export function Pricing({ onPlanSelect }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Start with a free trial, then choose the plan that works best for you. 
            No subscriptions, no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Trial */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 hover:border-slate-300 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <Download className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-slate-900">Free Trial</h3>
                <p className="text-sm text-slate-500">Try before you buy</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl text-slate-900">$0</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">for 7 days</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Full access to all features</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Connect unlimited data platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Run unlimited validations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">No credit card required</span>
              </li>
            </ul>

            <button className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors duration-200" onClick={() => onPlanSelect('trial')}>
              Start Free Trial
            </button>
          </div>

          {/* Monthly License */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 hover:border-slate-300 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <Key className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-slate-900">Monthly License</h3>
                <p className="text-sm text-slate-500">Pay as you go</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl text-slate-900">$9</span>
                <span className="text-slate-500">/month</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">$108/year total</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Everything in Free Trial</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Valid for one month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Activation code via email</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Email support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Cancel anytime</span>
              </li>
            </ul>

            <button className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors duration-200" onClick={() => onPlanSelect('monthly')}>
              Purchase Monthly
            </button>
          </div>

          {/* Yearly License */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#D75A4A] relative hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#D75A4A] to-[#ff7a68] text-white px-4 py-1 rounded-full text-sm shadow-lg">
                Save $19 (18% off)
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D75A4A] to-[#ff7a68] rounded-xl flex items-center justify-center">
                <Key className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-slate-900">Yearly License</h3>
                <p className="text-sm text-slate-500">Best Value</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl text-slate-900">$89</span>
                <span className="text-slate-500">/year</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-slate-400 line-through">$108</span>
                <span className="text-sm text-[#D75A4A]">Save $19</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Everything in Free Trial</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Valid for one full year</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Activation code via email</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Priority email support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Free updates all year</span>
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-[#D75A4A] to-[#ff7a68] text-white py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200" onClick={() => onPlanSelect('yearly')}>
              Purchase Yearly
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-center text-slate-900 mb-8">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-slate-900 mb-2">How does the activation code work?</h4>
              <p className="text-slate-600">
                After purchase, you'll receive an activation code via email. Simply enter it in the DataProbe 
                application to activate your license on your machine.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-slate-900 mb-2">Can I use it on multiple machines?</h4>
              <p className="text-slate-600">
                Each license is valid for a single machine. If you need to use DataProbe on multiple machines, 
                you'll need to purchase additional licenses.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-slate-900 mb-2">What happens after the trial ends?</h4>
              <p className="text-slate-600">
                After your 7-day free trial, you'll need to purchase and activate a license to continue 
                using DataProbe. Your configurations and settings will be preserved.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-slate-900 mb-2">Do you offer refunds?</h4>
              <p className="text-slate-600">
                Yes! We offer a 30-day money-back guarantee. If you're not satisfied with DataProbe, 
                contact us within 30 days of purchase for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}