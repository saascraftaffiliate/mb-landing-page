const Portfolio = () => {
  const projects = [
    { name: 'Tradeify', title: 'Revamping Tradeify for the Next Generation of Traders', tags: ['Fintech', 'Prop Trading'] },
    { name: 'Viral.app', title: 'Shaping Viral.app\'s Brand and Website With a Playful Identity', tags: ['Creator Marketing', 'Influencer Campaign'] },
    { name: 'BlueAlpha', title: 'A Product Story Told Clearly', tags: ['Marketing Analytics', 'Data Intelligence'] },
    { name: 'SPRX', title: 'We Helped SPRX Design Their Series B Pitch Suite After Their $12M Series A', tags: ['Tax', 'Cost Segregation'] },
    { name: 'BranditScan', title: 'A Complete Brand Transformation for BranditScan', tags: ['Brand Protection', 'Privacy'] },
    { name: 'You.com', title: 'Fueling You.com\'s Growth With Fast, High-Impact Designs', tags: ['AI Search Engine', 'Conversational AI'] },
    { name: 'Kintsugi', title: 'Redefining Kintsugi\'s Digital Identity Following Their $18M Funding', tags: ['Tax Automation', 'Tax Compliance'] },
    { name: 'Astra Security', title: 'New Website, New Funding: Astra\'s $2.7M Success Story', tags: ['Cybersecurity', 'Pentest'] },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-navy mb-12 text-center"
          style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.02em' }}
        >
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-8 relative z-10">
                  <div 
                    className="text-2xl font-bold text-navy mb-2"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {project.name}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 
                  className="text-base font-semibold text-navy mb-3 leading-snug"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                      style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;