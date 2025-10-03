'use client';

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center">
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black-600 to-black opacity-90"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Small Title */}
            {/* <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-gold"></div>
              <span className="text-gold text-sm uppercase tracking-widest">GLOBAL</span>
            </div> */}
            <div className="w-xl pt-4"><img src="/logo.jpg" alt="" /></div>

            {/* Main Heading */}
            {/* <h1 className="text-6xl font-elegant lg:text-8xl font-light ">
              Fashion &<br />
              <span className="text-gold">Design</span>
            </h1> */}

            {/* Description */}
       

            {/* CTA Buttons */}
            <div className="flex justify-center space-x-6">
              <button className="bg-gold text-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-yellow-600 transition-colors">
                Shop Now
              </button>
              <button className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div>
                <div className="text-2xl lg:text-3xl text-gold font-light">2500</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Luxurious Fabrics</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl text-gold font-light">A9+</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Tailors</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl text-gold font-light">56k</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Bookings</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="bg-gray-800 h-96 lg:h-[600px] relative overflow-hidden">
              {/* You would replace this with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <img src="./hero-image.jpg" className="h-full w-full object-cover object-center"  alt="hero image" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-black bg-opacity-50 p-4 backdrop-blur-sm">
                <div className="text-gold text-sm uppercase tracking-widest">Cutting-Edge</div>
                <div className="text-white text-lg">Technology</div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-black bg-opacity-50 p-4 backdrop-blur-sm">
                <div className="text-gold text-sm uppercase tracking-widest">Cool Look</div>
                <div className="text-white text-sm">We comprehend style needs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gray-600">
          <div className="w-px h-8 bg-gold mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}