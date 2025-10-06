'use client';

export default function CoolLookSection() {
  return (
    <section className="relative bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-[13px] text-gold mb-4">COOL LOOK</p>
          <h1 className="text-4xl lg:text-5xl font-semibold leading-snug text-white mb-8">
            We comprehend your <span className="block">style needs and create</span>
            <span className="block">wonderful clothing</span>
          </h1>
        </div>

        {/* Stats Grid with Card Borders */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: "49+", label: "TAILORS" },
            { number: "21M", label: "REVIEWS" },
            { number: "56k", label: "BOOKINGS" },
            { number: "774+", label: "CLIENTS" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-transparent border border-gray-700 hover:border-gold transition-all duration-300 p-8 text-center"
            >
              <div className="text-4xl text-gold font-light mb-2">{stat.number}</div>
              <div className="text-xs uppercase tracking-widest text-gray-300">{stat.label}</div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Description with Card Border */}
        <div className="group relative bg-transparent border border-gray-700 hover:border-gold transition-all duration-300 p-8 max-w-2xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            Nulla pellentesque dignissim enim sit amet venenatis urna. Laoreet non 
            curabitur gravida arcu ac tortor dignissim convallis aenean. Et netus et malesuada fames enim diam.
          </p>
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
}