'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import ShippingSectionWithIcons from './ShippingSection';

export default function CustomerFeedback() {
  const testimonials = [
    {
      id: 1,
      name: 'Britta Cornelia',
      image: '/customer1.png',
      rating: 5,
      feedback:
        'Ultrices eros in cursus turpis. Aliquet enim tortor at auctor urna. Non blandit massa enim nec dui nunc mattis. Est pellentesque.',
    },
    {
      id: 2,
      name: 'Floriana Inga',
      image: '/customer2.png',
      rating: 5,
      feedback:
        'Viverra justo nec ultrices dui sapien eget. Hendrerit gravida rutrum quisque non tellus orci ac. Vel fringilla est ullamcorper.',
    },
    {
      id: 3,
      name: 'Karl Leonardo',
      image: '/customer3.png',
      rating: 5,
      feedback:
        'Dignissim sodales ut eu sem integer vitae. Curabitur gravida arcu ac tortor. Est sit amet facilisis magna etiam tempor orci eu.',
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-8" style={{
      backgroundImage: "url('/product-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}>
          <div className="absolute inset-0 bg-black/80"></div>
      {/* Content Container - same width as RecentProductShowcase */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className=" gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-1">
            <p className="uppercase text-sm tracking-[3px] text-gray-400 mb-4">
              Review & Ratings
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Positive Customers <br /> Feedback
            </h2>
            <p className="text-gray-400 leading-relaxed pb-4">
              Pretium lectus quam id leo in. In massa tempor nec feugiat nisl pretium fusce.
              Libero enim sed faucibus turpis in eu mi bibendum neque. Eget duis at tellus at urna.
            </p>
          </div>

          {/* TESTIMONIAL CARDS */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#1c1c1c] border border-gray-700 hover:border-gold transition-all duration-300 p-8 text-center md:text-left"
              >
                {/* Corner accents (same gold border theme) */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>

                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                 
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <div className="flex gap-1 justify-center md:justify-start mt-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <ShippingSectionWithIcons /> */}
    </section>
  );
}
