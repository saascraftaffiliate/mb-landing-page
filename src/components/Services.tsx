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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#293052] mb-4">
            What We Create
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything a SaaS scale-up needs to move faster, convert clearer, and scale profitably.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4).fill(null).map((_, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={`${colIndex}-${index}`}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-[#293052]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#293052]">
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