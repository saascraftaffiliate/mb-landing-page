import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Hey, I'm Jules. I'm the co founder of Gracenote, and I just wanted to say thank you. Supafast, you've been amazing to work with. We're really thrilled with how great the website looks and super impressed by how quickly you were able to get it shipped.",
    author: 'Jules Loannidis',
    role: 'Founder at Gracenote',
  },
  {
    quote: "Supafast stay very true to their company's name. They got our website done super fast and were incredibly communicative the entire time. I would 11 out of 10 recommend them to anyone who needs a tasteful website built fast.",
    author: 'Andy Zhang',
    role: 'Co-Founder & CTO at Tower YC W24',
  },
  {
    quote: "Supafast is the way to go, they took us from here to there. They understood exactly what we needed, and executed. There was zero iteration in the design. They nailed it the first time.",
    author: 'Carson Suite',
    role: 'Founder at InvolvChat',
  },
  {
    quote: "I've worked with Supafast on multiple projects and they're phenomenal. The designs were fast, thoughtful, and a perfect match for the brand. The collaboration was seamless.",
    author: 'Harsh Patel',
    role: 'Founder at Macro',
  },
  {
    quote: "Supafast are my go-to team. They're incredibly fast, affordable, and consistently deliver high-quality work. What stands out most is how quickly they capture your vision and ship.",
    author: 'Drew',
    role: 'Founder at Anabolic Insights',
  },
  {
    quote: "Supafast did an exceptional work translating dense, technical ideas into clear and elegant design. Their speed, clarity, and collaboration stood out, especially on a complex AI product.",
    author: 'Daniel Kaplan',
    role: 'Head of AI GTM',
  },
  {
    quote: "Working with Supafast team was incredibly smooth and efficient. They turned a complex project into something pristine and easy, feeling like a true extension of my own team.",
    author: 'Brandon Turp',
    role: 'Founder of Nextlayer Capital',
  },
  {
    quote: "Supafast lives up to it's name and reputation. Fast-paced, flexible - feels like working with a partner rather than an external vendor. Can't recommend them enough!",
    author: 'Simon',
    role: 'Product Designer',
  },
  {
    quote: "Very nice product and an absolute pleasure working with them. I have gotten a lot of compliments on the website. Stop scrolling on social media and just book a call with them.",
    author: 'Karl-Gustav Kallasmaa',
    role: 'Founder',
  },
  {
    quote: "Namya and her team went above and beyond to deliver a fantastic three-page Microsite for my client's major new product. Our collaboration resulted in a microsite that not only looks great, but powerfully tells the story.",
    author: 'Daniel Kaplan',
    role: 'Head of AI GTM',
  },
  {
    quote: "Great team if you need to go from 0 to 1 fast.",
    author: 'Charlie Shrem',
    role: '@CharlieShrem',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1d1d1d]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center">
          What founders are saying
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#293052] rounded-2xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-[#fbe64d] mb-4 opacity-50" />
              
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#fbe64d] rounded-full flex items-center justify-center text-[#293052] font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
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