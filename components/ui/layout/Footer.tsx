'use client';

export default function FooterSection() {
  const footerSections = [
    {
      title: "ORDER ASSISTANCE",
      links: [
      
        "Shipping & Delivery", 
        "Returns & Refunds",
        "Gift Wrapping",
        "Follow Your Order",
        "Stores"
      ]
    },
    {
      title: "COMPANY", 
      links: [
        "About Us",
        "Awards",
        "Our Mission", 
        "Privacy Policy",
       
    
        "Affiliates And Creators"
      ]
    },
    {
      title: "SUPPORT",
      links: [
        "FAQ",
        "Shipping And Returns",
        "Tracking", 
        "Size Charts",
        "Gift Cards"
      ]
    }
  ];

  return (
    <footer
      className="relative bg-black text-white py-16 px-8"
      style={{
        backgroundImage: "url('/home-1-footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay - stays behind content */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Content Wrapper - ensures content is above overlay */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* First three sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-base lg:text-lg font-semibold uppercase tracking-widest text-gold">
                {section.title}
              </h3>
              
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm text-left w-full py-1">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-base lg:text-lg font-semibold uppercase tracking-widest text-gold">
              TALK TO US
            </h3>
            
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm mb-1">Got Questions? Call us</p>
                <p className="text-gold font-medium">(471) - 424 - 5650571</p>
              </div>
              
              <div>
                <p className="text-gray-300 text-sm mb-1">Email us at</p>
                <a 
                  href="mailto:contact@example.com"
                  className="text-gold hover:text-white transition-colors duration-300"
                >
                  contact@example.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()}{" "}
            <a href="https://humaiwebs.com" className="hover:text-gold transition">
              HumAi Webs
            </a>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
