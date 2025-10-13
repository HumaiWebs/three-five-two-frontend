'use client';

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CommonHeader from "@/components/ui/layout/CommonHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We’ll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-black text-white">
      {/* Common Header */}
      <CommonHeader
        title="Contact Us"
        subtitle="We’d Love to Hear from You"
        description="At Three Five Two, every conversation is part of the craft. Whether you’re seeking a bespoke appointment or have a general enquiry, our team is ready to assist."
        backgroundImage="/luxuary-clothes.jpg"
        breadcrumbs={["Home", "Contact"]}
      />

      {/* Contact Section */}
      <section className="relative py-24" style={backgroundStyle}>
        <div className="absolute inset-0 bg-black/90 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold uppercase tracking-wide text-gold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We welcome your enquiries — from bespoke commissions to press and partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-gold" />,
                  title: "Our Atelier",
                  detail: (
                    <>
                      Three Five Two Tailoring <br />
                      12 Savile Row, Mayfair <br />
                      London W1S 3PQ, United Kingdom
                    </>
                  ),
                },
                {
                  icon: <Mail className="w-6 h-6 text-gold" />,
                  title: "Email",
                  detail: <>info@threefivetwo.co.uk</>,
                },
                {
                  icon: <Phone className="w-6 h-6 text-gold" />,
                  title: "Phone",
                  detail: <>+44 (0)20 7946 1234</>,
                },
                {
                  icon: <Clock className="w-6 h-6 text-gold" />,
                  title: "Opening Hours",
                  detail: (
                    <>
                      Monday – Friday: 10:00 – 18:00 <br />
                      Saturday: 11:00 – 17:00 <br />
                      Sunday: Closed
                    </>
                  ),
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/5 backdrop-blur-md border border-gray-700 p-6 rounded-xl flex items-start gap-4 hover:border-gold transition-all duration-300"
                >
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-1 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-white/10 backdrop-blur-lg border border-gray-700 p-10 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-gold uppercase mb-8 tracking-wide text-center">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-md text-white focus:outline-none focus:border-gold placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-md text-white focus:outline-none focus:border-gold placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your enquiry"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-md text-white focus:outline-none focus:border-gold placeholder-gray-500 h-32 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-gold text-black font-semibold uppercase rounded-md shadow-md hover:bg-white transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
