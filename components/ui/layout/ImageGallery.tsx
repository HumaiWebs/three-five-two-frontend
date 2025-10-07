'use client';

import Image from "next/image";
import Link from "next/link";

export default function ImageGallery() {
  const galleryImages = [
    {
      src: "/retro-style-blazar.png",
      alt: "Retro Style Blazer",
      title: "The Classic Edit",
      description: "Tailored precision for the modern gentleman.",
      link: "/collections/classic-edit",
    },
    {
      src: "/product-bg.jpg",
      alt: "Luxury Fabric Texture",
      title: "Signature Fabrics",
      description: "Crafted from the world’s finest mills.",
      link: "/collections/fabrics",
    },
    {
      src: "/hero-image3.jpg",
      alt: "Tailored Suit Fitting",
      title: "Bespoke Tailoring",
      description: "Where every detail is made for you.",
      link: "/collections/bespoke",
    },
    {
      src: "/hero-image2.jpg",
      alt: "Evening Wear Collection",
      title: "Evening Elegance",
      description: "Sophisticated silhouettes for timeless evenings.",
      link: "/collections/evening",
    },
    {
      src: "/hero-image.jpg",
      alt: "Modern Suit Display",
      title: "Contemporary Line",
      description: "The balance of innovation and tradition.",
      link: "/collections/contemporary",
    },
  ];

  return (
    <section
      className="relative bg-black py-16"
      style={{
        backgroundImage: "url('/product-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark background overlay behind content */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gold mb-12 uppercase tracking-wide">
          The Art of Tailoring
        </h2>

        {/* One full-width row with 5 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-[450px] overflow-hidden group  shadow-lg"
            >
              {/* Image */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 2}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-2xl font-semibold text-gold mb-3 uppercase tracking-wide">
                  {img.title}
                </h3>
                <p className="text-gray-200 text-sm mb-5 max-w-xs">{img.description}</p>
                <Link
                  href={img.link}
                  className="inline-block text-sm px-6 py-2 bg-gold text-black font-semibold uppercase rounded-md hover:bg-white transition-colors duration-300"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
