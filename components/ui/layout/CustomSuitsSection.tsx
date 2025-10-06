'use client';

import Image from 'next/image';

export default function CustomSuitsSection() {
  const customMadeSuits = [
    { id: 1, name: 'Double Breasted Blazer', price: '£80.00 – £380.00', image: '/double-breasted-blazer.png' },
    { id: 2, name: 'Retro Style Blazer', price: '£85.00 – £335.00', image: '/retro-style-blazer.png' },
    { id: 3, name: 'Fashion Plaid Business Blazer', price: '£94.00 – £440.00', image: '/fashion-plaid-business-blazer.png' },
  ];

  const newCollections = [
    { id: 4, name: 'Mens Formal Blazer Jacket', price: '£50.00 – £540.00', image: '/mens-formal-blazer.png' },
    { id: 5, name: 'Stylish Suit Jacket', price: '£160.00 – £470.00', image: '/stylish-suit-jacket.png' },
    { id: 6, name: 'Premium Comfort Suit', price: '£130.00 – £490.00', image: '/premium-comfort-suit.png' },
  ];

  return (
    <section
      className="relative bg-black text-white py-24"
      style={{
        backgroundImage: "url('/product-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 space-y-32">
        {/* CUSTOM MADE MEN’S SUITS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-6 lg:px-12 xl:px-24">
          <div className="lg:-ml-24">
            <Image
              src="/custom.jpg"
              alt="Custom suits rack"
              width={1000}
              height={700}
              className="object-cover w-full h-auto rounded-none lg:rounded-r-2xl"
            />
          </div>

          <div className="max-w-4xl">
            <p className="text-gold text-lg italic mb-3">Supreme Quality</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">Custom Made Men’s Suits</h2>
         
            <div className="grid sm:grid-cols-3 gap-8">
              {customMadeSuits.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-transparent border border-gray-700 hover:border-gold transition-all duration-300 p-8 text-center w-full"
                >
                  <div className="relative h-80 mb-6 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>

                  <h3 className="text-lg font-light tracking-wide border-b border-gray-700 pb-3 mb-3 group-hover:border-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gold text-lg font-light">{item.price}</p>

                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-gold border border-gold px-6 py-3 text-sm tracking-widest hover:bg-gold hover:text-black">
                    SELECT OPTIONS
                  </button>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-700 group-hover:border-gold"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-700 group-hover:border-gold"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-700 group-hover:border-gold"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-700 group-hover:border-gold"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NEW COLLECTIONS */}
        <div className="w-full text-center px-6 lg:px-12 xl:px-24">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gold text-lg italic mb-3">Comprehensive Design</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">New Collections of Stylish Suits</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore exceptional materials and clean masculine lines. Experience
              the difference of precision tailoring and comfort.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {newCollections.map((item) => (
              <div
                key={item.id}
                className="group relative bg-transparent border border-gray-700 hover:border-gold transition-all duration-300 p-8 text-center w-full"
              >
                <div className="relative h-96 mb-6 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>

                <h3 className="text-lg font-light tracking-wide border-b border-gray-700 pb-3 mb-3 group-hover:border-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gold text-lg font-light">{item.price}</p>

                <button className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-gold border border-gold px-6 py-3 text-sm tracking-widest hover:bg-gold hover:text-black">
                  SELECT OPTIONS
                </button>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-700 group-hover:border-gold"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-700 group-hover:border-gold"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-700 group-hover:border-gold"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-700 group-hover:border-gold"></div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <button className="border border-gold text-gold px-10 py-3 uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300">
              View Collection
            </button>
          </div>
        </div>

        {/* NEWSLETTER SECTION */}
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          <div className="bg-black/60 flex flex-col justify-center px-6 lg:px-20 py-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-snug">
              Get 50% OFF on first class suits
            </h2>
            <p className="text-gray-400 mb-10 italic">
              *Use code <span className="text-gold font-semibold">CLASSIC</span> at checkout through 4/10. Exclusions apply.*
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-transparent text-white border border-gray-600 focus:outline-none focus:border-gold placeholder-gray-500"
              />
              <button className="bg-gold text-black px-8 py-4 font-semibold uppercase tracking-wide hover:bg-[#caa94d] transition">
                Subscribe
              </button>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-auto">
            <Image
              src="/newsletter-woman.png"
              alt="Woman in suit"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
