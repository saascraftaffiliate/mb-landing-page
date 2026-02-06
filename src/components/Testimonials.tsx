import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Hey, I'm Jules. I'm the co founder of Gracenote, and I just wanted to say thank you. Supafast, you've been amazing to work with. We're really thrilled with how great the website looks and super impressed by how quickly you were able to get it shipped. If you need a great copywriter and a great designer, look no further than Supafast. They are incredible. Thanks so much.",
    author: 'Jules Loannidis',
    role: 'Founder at Gracenote',
    image: 'https://framerusercontent.com/images/5utbFCnB3UwQ6j2ckpxBVijvcA.png',
  },
  {
    quote: "Supafast stay very true to their company's name. They got our website done super fast and were incredibly communicative the entire time. I would 11 out of 10 recommend them to anyone who needs a tasteful website built fast.",
    author: 'Andy Zhang',
    role: 'Co-Founder & CTO at Tower YC W24',
    image: 'https://framerusercontent.com/images/9kUgLPr4BCUDjTRzsKVbkC4cNb4.png',
  },
  {
    quote: "Supafast is the way to go, they took us from here to there. They understood exactly what we needed, and executed. There was zero iteration in the design. They nailed it the first time. They know their industry, and will get you where you need to go, get you the conversions, get you the landing page you need.",
    author: 'Carson Suite',
    role: 'Founder at InvolvChat',
    image: 'https://framerusercontent.com/images/8mlsc5vPbLz1Y57cVtpMTRifp60.png',
  },
  {
    quote: "I've worked with Supafast on multiple projects and they're phenomenal. The designs were fast, thoughtful, and a perfect match for the brand. The collaboration was seamless, and I've already recommended Supafast to others and will continue to do so.",
    author: 'Harsh Patel',
    role: 'Founder at Macro',
    image: 'https://framerusercontent.com/images/fenl6thhQLIKmehdZfa8jetD38.png',
  },
  {
    quote: "Supafast are my go-to team. They're incredibly fast, affordable, and consistently deliver high-quality work. What stands out most is how quickly they capture your vision and ship. I highly recommend them if you're hesitant, just go for it.",
    author: 'Drew',
    role: 'Founder at Anabolic Insights',
    image: 'https://framerusercontent.com/images/lljSJMxwq9z66nFXkCx0fg02J9k.png',
  },
  {
    quote: "Supafast did an exceptional work translating dense, technical ideas into clear and elegant design. Their speed, clarity, and collaboration stood out, especially on a complex AI product. The result was a microsite that looks great and became a strategic foundation for the brand.",
    author: 'Daniel Kaplan',
    role: 'Head of AI GTM',
    image: 'https://framerusercontent.com/images/Hy4AHYzSkjhf5ehBWyBKcbcPo.png',
  },
  {
    quote: "Working with Supafast team was incredibly smooth and efficient. They turned a complex project into something pristine and easy, feeling like a true extension of my own team. Open-minded, respectful, and great at steering projects in the right direction. I'll be working with them for all future website and copy needs.",
    author: 'Brandon Turp',
    role: 'Founder of Nextlayer Capital',
    image: 'https://framerusercontent.com/images/Sj9VXgmEq7DLReoUxqC6MVYGUdI.png',
  },
  {
    quote: "Supafast lives up to it's name and reputation. Fast-paced, flexible - feels like working with a partner rather than an external vendor. Can't recommend them enough!",
    author: 'Simon',
    role: 'Product Designer',
    image: 'https://framerusercontent.com/images/5utbFCnB3UwQ6j2ckpxBVijvcA.png',
  },
  {
    quote: "Very nice product and an absolute pleasure working with them. I have gotten a lot of compliments on the website. Stop scrolling on social media and just book a call with them.",
    author: 'Karl-Gustav Kallasmaa',
    role: 'Founder',
    image: 'https://framerusercontent.com/images/lljSJMxwq9z66nFXkCx0fg02J9k.png',
  },
  {
    quote: "Namya and her team went above and beyond to deliver a fantastic three-page Microsite for my client's major new product. Our collaboration resulted in a microsite that not only looks great, but powerfully tells the story of my client's unique AI offering.",
    author: 'Daniel Kaplan',
    role: 'Head of AI GTM',
    image: 'https://framerusercontent.com/images/Hy4AHYzSkjhf5ehBWyBKcbcPo.png',
  },
  {
    quote: "Great team if you need to go from 0 to 1 fast.",
    author: 'Charlie Shrem',
    role: '@CharlieShrem',
    image: 'https://framerusercontent.com/images/9kUgLPr4BCUDjTRzsKVbkC4cNb4.png',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-[1100px] mx-auto">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
          style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.02em' }}
        >
          What founders are saying
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-navy rounded-[24px] p-6 border border-white/10"
            >
              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div 
                    className="font-semibold text-white text-sm"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {testimonial.author}
                  </div>
                  <div 
                    className="text-white/60 text-xs"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                ))}
              </div>

              {/* Quote */}
              <p 
                className="text-white/80 leading-relaxed text-sm"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;