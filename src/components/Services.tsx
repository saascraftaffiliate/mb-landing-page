import React from 'react';
import { Globe, Palette, Layers, TrendingUp, Code, Video } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website & Landing Page',
    description: 'High-converting pages that tell your story and drive demos.',
  },
  {
    icon: Palette,
    title: 'Brand Systems',
    description: 'Cohesive visual identity that scales across all touchpoints.',
  },
  {
    icon: Layers,
    title: 'Product Design',
    description: 'Intuitive UI/UX that keeps users engaged and converting.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Assets',
    description: 'Ads, emails, and collateral that fuel your GTM engine.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Clean, fast, responsive code that ships without bugs.',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Engaging video content for product demos and marketing.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Create
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything a SaaS scale-up needs to move faster, convert clearer, and scale profitably.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 transition-colors">
                <service.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;