const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[900px] mx-auto text-center">
        <h1 
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-navy leading-[1.1] mb-6 tracking-[-0.02em]"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          Creative partner for SaaS & Tech companies
        </h1>
        <p 
          className="text-base sm:text-lg text-gray-600 max-w-[640px] mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          We design and build landing pages, websites, product UI, and GTM assets 
          so you can launch faster, convert more demos, and raise more capital 
          without hiring a full in‑house team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            className="bg-navy text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-dark transition-all flex items-center justify-center gap-2"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Start a project
          </button>
          <button 
            className="bg-white text-navy px-6 py-3 rounded-full font-semibold text-sm border border-gray-200 hover:border-gray-300 transition-all"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            See our work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;