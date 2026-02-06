import { ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.02em' }}
        >
          Ready to move faster and convert more?
        </h2>
        <p 
          className="text-white/60 mb-10 text-lg"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          Let's fix the bottlenecks holding back your growth.
        </p>
        
        {/* Big Yellow Button */}
        <a 
          href="#"
          className="inline-flex items-center gap-3 bg-yellow text-dark px-8 py-5 rounded-[68px] font-bold text-xl hover:bg-[#f5df40] transition-all group border border-yellow-24"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-yellow" />
          </div>
          <span>Book an intro call</span>
        </a>

        {/* Urgency Text */}
        <div className="mt-12">
          <p 
            className="text-white font-semibold text-lg"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Be quick! Spots are almost gone for February.
          </p>
        </div>
      </div>

      {/* Logo Banner */}
      <div className="mt-16 max-w-[1200px] mx-auto">
        <div className="w-full h-32 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden">
          <div 
            className="text-4xl font-bold text-white/20 tracking-widest uppercase"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Supafast
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;