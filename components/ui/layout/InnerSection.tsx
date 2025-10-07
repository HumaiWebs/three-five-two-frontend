"use client";

import Image from "next/image";

export default function InnerSection() {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden">
      {/* Left Image */}
      <div className="relative w-full lg:w-1/3 h-[400px] lg:h-screen">
        <Image
          src="/left-man.jpg"
          alt="Businessman at cafe"
          fill
          className="object-cover"
        />
      </div>

      {/* Center Content */}
      <div
        className="relative flex flex-col justify-center items-start w-full lg:w-1/3 px-8 py-12 lg:px-20 bg-cover bg-center text-left"
        style={{ backgroundImage: "url('/blog-bg.jpg')" }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Optional texture overlay */}
        {/* <div
          className="absolute inset-0 opacity-20 mix-blend-overlay z-0"
          style={{ backgroundImage: "url('/texture-overlay.png')", backgroundSize: "cover" }}
        ></div> */}

        {/* Content Wrapper */}
        <div className="relative z-10">
          <p className="uppercase tracking-[0.4em] text-[13px] font-bold text-gold mb-4">
            Cool Look
          </p>
          <h1 className="text-4xl lg:text-5xl font-semibold leading-snug text-white mb-8">
            We comprehend your style needs and create wonderful clothing
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div className="bg-black/40 p-6 text-center rounded">
              <div className="text-4xl text-gold font-light">49+</div>
              <div className="text-xs uppercase tracking-widest text-gray-300 mt-2">
                Tailors
              </div>
            </div>
            <div className="bg-black/40 p-6 text-center rounded">
              <div className="text-4xl text-gold font-light">21M</div>
              <div className="text-xs uppercase tracking-widest text-gray-300 mt-2">
                Reviews
              </div>
            </div>
            <div className="bg-black/40 p-6 text-center rounded">
              <div className="text-4xl text-gold font-light">56k</div>
              <div className="text-xs uppercase tracking-widest text-gray-300 mt-2">
                Bookings
              </div>
            </div>
            <div className="bg-black/40 p-6 text-center rounded">
              <div className="text-4xl text-gold font-light">774+</div>
              <div className="text-xs uppercase tracking-widest text-gray-300 mt-2">
                Clients
              </div>
            </div>
          </div>

          {/* CTA + Avatars */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                Each piece is tailored with intent — using the finest fabrics,
                impeccable cuts, and an attention to detail that cannot be
                rushed. Our garments are not merely worn; they are experienced.
                Every suit tells a story of heritage, precision, and quiet
                confidence.
              </p>
              <button className="bg-[#bfa16a] text-black px-6 py-3 mt-6 uppercase text-sm tracking-widest hover:bg-[#caa94d] transition-colors">
                Shop the Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full lg:w-1/3 h-[400px] lg:h-screen">
        <Image
          src="/right-woman.png"
          alt="Professional woman with laptop"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
