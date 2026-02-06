const FooterCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1d1d1d]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to move faster and convert more?
        </h2>
        <p className="text-white/64 mb-10 text-lg">
          Let's fix the bottlenecks holding back your growth.
        </p>
        <button className="bg-[#fbe64d] text-[#293052] px-8 py-4 rounded-full font-bold hover:bg-[#f5df40] transition-all inline-flex items-center gap-2">
          Book an intro call
        </button>
      </div>
    </section>
  );
};

export default FooterCTA;