'use client';

export default function ShippingSectionWithIcons() {
  const features = [
    {
      title: "SHIPPING",
      description: "Free Shipping World wide",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "HASSLE FREE",
      description: "24.7 Customer Support",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "3 DAYS",
      description: "Free & Easy Returns",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
        </svg>
      )
    },
    {
      title: "SECURED",
      description: "Quick Check Out Process",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative  text-white py-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
           How it Works?
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-transparent border border-gray-700 hover:border-gold transition-all duration-300 p-8 text-center"
            >
              {/* Icon */}
              <div className="text-gold mb-6 flex justify-center">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-semibold uppercase tracking-wide mb-3 text-gold">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-16">
          <div className="w-24 h-px bg-gold mx-auto"></div>
        </div>
      </div>
    </section>
  );
}