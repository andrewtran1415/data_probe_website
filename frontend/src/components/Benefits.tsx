import { ArrowUpRight } from 'lucide-react';

const benefits = [
  {
    title: 'From hours to minutes',
    description: 'What used to take hours of manual SQL queries now happens in minutes. Automate your entire validation workflow.',
    metric: '10x faster'
  },
  {
    title: 'Catch issues early',
    description: 'Identify data quality problems before they impact your business. Validate across platforms automatically.',
    metric: '95% issue detection'
  },
  {
    title: 'No coding required',
    description: 'Anyone on your team can run comprehensive validations. Technical expertise not required.',
    metric: 'One-click operation'
  },
  {
    title: 'Total data privacy',
    description: 'All validations run on your local machine. Your data never leaves your infrastructure.',
    metric: '100% local'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 leading-tight">
            Why data teams choose DataProbe
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The first tool purpose-built for cross-platform data validation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl text-gray-900">{benefit.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#D75A4A] transition-colors" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
              <div className="text-[#D75A4A]">{benefit.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}