import { Check, Download, Key } from 'lucide-react';

interface PricingProps {
  onPlanSelect: (plan: 'trial' | 'lifetime') => void;
}

export function Pricing({ onPlanSelect }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <span className="font-semibold text-sm">BETA</span>
            <span className="text-sm">Everything is FREE during beta</span>
          </div>
          <h2 className="text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We're currently in beta. Download and use all features completely free while we perfect the product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Beta Access */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 hover:border-slate-300 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <Download className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-slate-900">Beta Access</h3>
                <p className="text-sm text-slate-500">Free during beta</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl text-slate-900">$0</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">Free forever (beta)</p>
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

            <button
              className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg opacity-50 cursor-not-allowed transition-colors duration-200"
              disabled
            >
              Get Free Beta Access
            </button>
          </div>

          {/* Early Supporter */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#D75A4A] relative hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#D75A4A] to-[#ff7a68] text-white px-4 py-1 rounded-full text-sm shadow-lg">
                Early Supporter
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D75A4A] to-[#ff7a68] rounded-xl flex items-center justify-center">
                <Key className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-slate-900">Lifetime License</h3>
                <p className="text-sm text-slate-500">Support development</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl text-slate-900">$0</span>
                <span className="text-lg text-slate-400 line-through">$9</span>
              </div>
              <p className="text-sm text-blue-600 mt-2">Free during beta, lock in lifetime access</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Everything in Free Trial</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D75A4A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Lifetime access</span>
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
                <span className="text-slate-600">Free updates forever</span>
              </li>
            </ul>

            <button
              className="w-full bg-gradient-to-r from-[#D75A4A] to-[#ff7a68] text-white py-3 px-6 rounded-lg opacity-50 cursor-not-allowed transition-all duration-200"
              disabled
            >
              Claim Free Lifetime Access
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
              <h4 className="text-slate-900 mb-2">What is beta access?</h4>
              <p className="text-slate-600">
                During beta, DataProbe is completely free to use. You get full access to all features while we
                gather feedback and improve the product. Early supporters who claim lifetime access now will keep
                it forever, even after we launch.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-slate-900 mb-2">Will pricing change after beta?</h4>
              <p className="text-slate-600">
                Yes, once we exit beta, we'll introduce paid plans. However, if you claim lifetime access during
                beta, you'll keep it forever at no cost. This is our way of thanking early supporters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}