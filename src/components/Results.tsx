import React from 'react';

const results = [
  { metric: '10x', label: 'Faster delivery', description: 'Ship in days, not months' },
  { metric: '3x', label: 'More conversions', description: 'Optimized for demo bookings' },
  { metric: '50+', label: 'SaaS companies', description: 'Trusted by scaling teams' },
  { metric: '100%', label: 'In-house quality', description: 'Senior designers & developers' },
];

const Results: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real SaaS Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for themselves. We measure success by your growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">
                {result.metric}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {result.label}
              </div>
              <p className="text-gray-500 text-sm">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;