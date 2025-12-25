import { Check } from 'lucide-react';

interface PurchaseSuccessProps {
  email: string;
  plan: 'trial' | 'basic' | 'personal' | 'team';
  onBack: () => void;
}

export function PurchaseSuccess({ email, plan, onBack }: PurchaseSuccessProps) {
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
            {email ? (
              <>
                We've sent your activation code to <span className="text-slate-900 font-medium">{email}</span>
              </>
            ) : (
              <>Your activation code has been sent to your email</>
            )}
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
              onClick={onBack}
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
