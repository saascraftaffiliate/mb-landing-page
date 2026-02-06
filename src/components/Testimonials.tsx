import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Hey, I'm Jules. I'm the co founder of Gracenote, and I just wanted to say thank you. Supafast, you've been amazing to work with. We're really thrilled with how great the website looks and super impressed by how quickly you were able to get it shipped. If you need a great copywriter and a great designer, look no further than Supafast. They are incredible. Thanks so much.",
    author: 'Jules Loannidis',
    role: 'Founder at Gracenote',
    rating: 5,
  },
  {
    quote: "Supafast stay very true to their company's name. They got our website done super fast and were incredibly communicative the entire time. I would 11 out of 10 recommend them to any startup looking to level up their web presence.",
    author: 'Sarah Chen',
    role: 'CEO at TechFlow',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What founders are saying
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it — hear from the SaaS leaders we've partnered with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-indigo-500 absolute top-6 right-6 opacity-50" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;