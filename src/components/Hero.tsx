const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#293052] leading-tight mb-6 tracking-tight">
          Creative partner for SaaS & Tech companies
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          We design and build landing pages, websites, product UI, and GTM assets 
          so you can launch faster, convert more demos, and raise more capital 
          without hiring a full in‑house team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#293052] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1d1d1d] transition-all flex items-center justify-center gap-2">
            Start a project
          </button>
          <button className="bg-white text-[#293052] px-8 py-4 rounded-full font-semibold border border-gray-200 hover:border-gray-300 transition-all">
            See our work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;