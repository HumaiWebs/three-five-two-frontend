'use client';

import { useMemo } from "react";
import CommonHeader from "@/components/ui/layout/CommonHeader";

export default function AnnouncementsPage() {
  const backgroundStyle = useMemo(
    () => ({
      backgroundImage: "url('/product-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }),
    []
  );

  const announcements = [
    {
      id: 1,
      title: "Introducing the Heritage Collection",
      date: "September 15, 2025",
      description:
        "We’re proud to unveil our new Heritage Collection — inspired by classic British tailoring, refined with modern craftsmanship. Each piece tells a story of precision and timeless elegance.",
      image: "/hero-image2.jpg",
    },
    {
      id: 2,
      title: "Exclusive Tailoring Experience Launch",
      date: "August 22, 2025",
      description:
        "Our Bespoke Tailoring Experience is now open for private appointments. Discover garments made exclusively to your fit, style, and character at our Mayfair atelier.",
      image: "/hero-image3.jpg",
    },
    {
      id: 3,
      title: "Sustainable Fabric Partnership",
      date: "July 10, 2025",
      description:
        "Three Five Two partners with leading eco-friendly textile producers to ensure sustainability is woven into every stitch. Luxury and responsibility, hand in hand.",
      image: "/retro-style-blazar.png",
    },
  ];

  return (
    <main className="bg-black">
      {/* 🏷️ Header */}
      <CommonHeader
        title="Announcements"
        subtitle="Crafted Updates, Tailored Stories"
        description="Stay informed with the latest from Three Five Two — from new collections to exclusive tailoring events, discover what’s shaping our world of contemporary British luxury."
        backgroundImage="/luxuary-clothes.jpg"
        breadcrumbs={["Home", "Announcements"]}
      />

      {/* 📰 Announcements Section */}
      <section
        className="relative text-white py-24"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 bg-black/95 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6"></div>
            <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-4 text-gold">
              Latest Announcements
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our latest stories and updates — shaping the next chapter of refined craftsmanship.
            </p>
          </div>

          {/* 🧾 Announcement Cards */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((item) => (
              <div
                key={item.id}
                className="bg-black/80 border border-gray-700 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-xl"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {item.date}
                  </p>
                  <h3 className="text-xl font-semibold text-gold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <button className="mt-4 inline-block px-4 py-2 bg-gold text-black text-sm font-semibold uppercase rounded-md hover:bg-white transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
