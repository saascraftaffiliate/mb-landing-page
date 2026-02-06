const Results = () => {
  const metrics = [
    { value: '40-70%', label: 'Faster delivery', sublabel: 'Ship in days, not months' },
    { value: '+30%', label: 'Conversion lift', sublabel: 'More demos, more pipeline' },
    { value: '$250K+', label: 'CAC stable at scale', sublabel: 'Performance that scales' },
    { value: '100%', label: 'In-house quality', sublabel: 'Senior designers & developers' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-navy mb-16 text-center"
          style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.02em' }}
        >
          Real SaaS Results
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-4xl sm:text-5xl font-bold text-navy mb-2"
                style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.03em' }}
              >
                {metric.value}
              </div>
              <div 
                className="text-base font-semibold text-gray-900 mb-1"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {metric.label}
              </div>
              <p 
                className="text-gray-500 text-sm"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;