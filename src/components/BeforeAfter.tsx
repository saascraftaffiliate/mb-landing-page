import React from 'react';
import { X, Check } from 'lucide-react';

const BeforeAfter: React.FC = () => {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <div className="bg-red-50 rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Before working with us</h3>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              Most SaaS & tech Teams we meet are stuck here:
            </p>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-green-50 rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">After working with us</h3>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              What it feels like with a single creative partner for copy, design, and dev:
            </p>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
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