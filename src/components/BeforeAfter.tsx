import { X, Check } from 'lucide-react';

const BeforeAfter = () => {
  const beforeItems = [
    'Waiting weeks for landing pages, site updates, or product UI tweaks',
    'Burning budget on traffic that doesn\'t turn into demos or trials',
    'Juggling freelancers and agencies that all own a small slice of the funnel',
    'Knowing they should "fix the site and story" but having zero bandwidth in‑house',
  ];

  const afterItems = [
    'Launch pages, website changes, and GTM assets shipped in days, not weeks',
    'Clear storytelling and site that actually convert visitors into pipeline',
    'One senior pod that handles brand, web, and product surfaces end‑to‑end',
    'No hiring headache, simple Sprint or Growth Partner plan you can turn up or down',
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Before */}
          <div className="bg-[#fef2f2] rounded-[32px] p-8 border border-[#fee2e2]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <X className="w-5 h-5 text-red-500" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-navy" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                Before working with us
              </h3>
            </div>
            <p className="text-gray-600 mb-6 text-sm" style={{ fontFamily: '"DM Sans", sans-serif' }}>
              Most SaaS & tech Teams we meet are stuck here:
            </p>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-[#f0fdf4] rounded-[32px] p-8 border border-[#dcfce7]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Check className="w-5 h-5 text-green-600" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-navy" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                After working with us
              </h3>
            </div>
            <p className="text-gray-600 mb-6 text-sm" style={{ fontFamily: '"DM Sans", sans-serif' }}>
              What it feels like with a single creative partner for copy, design, and dev:
            </p>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;