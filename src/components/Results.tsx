const Results = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#293052] mb-16 text-center">
          Real SaaS Results
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#293052] mb-2">10x</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Faster delivery</div>
            <p className="text-gray-500 text-sm">Ship in days, not months</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#293052] mb-2">3x</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">More conversions</div>
            <p className="text-gray-500 text-sm">Optimized for demo bookings</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#293052] mb-2">50+</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">SaaS companies</div>
            <p className="text-gray-500 text-sm">Trusted by scaling teams</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#293052] mb-2">100%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">In-house quality</div>
            <p className="text-gray-500 text-sm">Senior designers & developers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;