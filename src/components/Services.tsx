import { Globe, Palette, Layers, TrendingUp, Code, Video } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Website & Landing Page' },
  { icon: Palette, title: 'Brand Systems' },
  { icon: Layers, title: 'Product Design' },
  { icon: TrendingUp, title: 'Growth Assets' },
  { icon: Code, title: 'Development' },
  { icon: Video, title: 'Video Editing' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-navy mb-4"
            style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.02em' }}
          >
            What We Create
          </h2>
          <p 
            className="text-gray-600 max-w-[500px] mx-auto text-base"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Everything a SaaS scale-up needs to move faster, convert clearer, and scale profitably.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array(4).fill(null).map((_, colIndex) => (
            <div key={colIndex} className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={`${colIndex}-${index}`}
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-navy" strokeWidth={1.5} />
                  </div>
                  <h3 
                    className="text-sm font-semibold text-navy"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;