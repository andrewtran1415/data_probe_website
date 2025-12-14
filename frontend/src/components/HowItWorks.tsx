import { Cable, Settings, Play, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Cable,
    number: '01',
    title: 'Connect Your Platforms',
    description: 'Add credentials for your data warehouses and databases. Supports all major platforms.'
  },
  {
    icon: Settings,
    number: '02',
    title: 'Define Tests',
    description: 'Choose from generic test templates or create custom validation rules. Configure once, use everywhere.'
  },
  {
    icon: Play,
    number: '03',
    title: 'Run Validation',
    description: 'Execute all tests with one click. Validate across multiple tables and platforms simultaneously.'
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Review Results',
    description: 'Get detailed reports on data quality and consistency. Identify issues instantly.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 leading-tight">
            How it works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get started in minutes. No complex setup, no cloud dependencies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#D75A4A] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#D75A4A] mb-2">{step.number}</div>
                  <h3 className="text-2xl mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}