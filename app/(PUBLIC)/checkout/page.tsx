"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import CommonHeader from "@/components/ui/layout/CommonHeader";
import { CreditCard, Truck, MapPin } from "lucide-react";

// 🧩 Validation Schema
const checkoutSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(4, "Postal code must be at least 4 characters"),
  sameAsBilling: z.boolean(),
  shippingAddress: z.string().optional(),
  paymentMethod: z.enum(["card", "paypal"]),
  cardNumber: z.string().optional(),
  expiry: z.string().optional(),
  cvv: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const [showShipping, setShowShipping] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      sameAsBilling: true,
      paymentMethod: "card",
    },
  });

  const paymentMethod = watch("paymentMethod");
  const sameAsBilling = watch("sameAsBilling");

  const onSubmit = async (data: CheckoutFormData) => {
    console.log("✅ Checkout Data:", data);
    alert("🎉 Order placed successfully!");
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <CommonHeader
        title="Checkout"
        subtitle="Complete Your Purchase"
        description="Please provide your billing, shipping, and payment details to complete your order."
        backgroundImage="/luxuary-clothes.jpg"
        breadcrumbs={["Home", "Checkout"]}
      />

      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT SIDE — FORM */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white/10 backdrop-blur-lg border border-gray-700 p-10 shadow-2xl space-y-10"
          >
            {/* Billing Section */}
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-gold uppercase mb-6">
                <MapPin className="w-6 h-6 text-gold" /> Billing Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Full Name
                  </label>
                  <input
                    {...register("fullName")}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700  text-white focus:outline-none focus:border-gold"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700  text-white focus:outline-none focus:border-gold"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+44 1234 567890"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700  text-white focus:outline-none focus:border-gold"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    City
                  </label>
                  <input
                    {...register("city")}
                    placeholder="London"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700  text-white focus:outline-none focus:border-gold"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Address
                  </label>
                  <input
                    {...register("address")}
                    placeholder="123 Savile Row"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700  text-white focus:outline-none focus:border-gold"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Postal Code
                  </label>
                  <input
                    {...register("postalCode")}
                    placeholder="W1S 3PQ"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700  text-white focus:outline-none focus:border-gold"
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.postalCode.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Shipping Section */}
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-gold uppercase mb-6">
                <Truck className="w-6 h-6 text-gold" /> Shipping
              </h2>

              <div className="flex items-center gap-2 mb-4">
                <Controller
                  control={control}
                  name="sameAsBilling"
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked);
                        setShowShipping(!e.target.checked);
                      }}
                      className="accent-gold w-4 h-4"
                    />
                  )}
                />
                <label className="text-gray-300 text-sm">
                  Shipping address same as billing
                </label>
              </div>

              {showShipping && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-gold mb-2">
                    Shipping Address
                  </label>
                  <input
                    {...register("shippingAddress")}
                    placeholder="Apartment, suite, unit, etc."
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700  text-white focus:outline-none focus:border-gold"
                  />
                </motion.div>
              )}
            </div>

            {/* Payment Section */}
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-gold uppercase mb-6">
                <CreditCard className="w-6 h-6 text-gold" /> Payment
              </h2>

              <div className="flex gap-4 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="card"
                    {...register("paymentMethod")}
                    className="accent-gold"
                  />
                  <span>Credit / Debit Card</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="paypal"
                    {...register("paymentMethod")}
                    className="accent-gold"
                  />
                  <span>PayPal</span>
                </label>
              </div>

              {paymentMethod === "card" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="md:col-span-3">
                    <label className="block text-sm font-semibold text-gold mb-2">
                      Card Number
                    </label>
                    <input
                      {...register("cardNumber")}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 bg-black/60 border border-gray-700  text-white focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gold mb-2">
                      Expiry Date
                    </label>
                    <input
                      {...register("expiry")}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 bg-black/60 border border-gray-700  text-white focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gold mb-2">
                      CVV
                    </label>
                    <input
                      {...register("cvv")}
                      placeholder="123"
                      className="w-full px-4 py-3 bg-black/60 border border-gray-700  text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-10 py-3 bg-gold text-black font-semibold uppercase  shadow-md hover:bg-white transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </motion.button>
          </motion.form>

          {/* RIGHT SIDE — ORDER SUMMARY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg border border-gray-700  p-8 shadow-2xl h-fit sticky top-20"
          >
            <h3 className="text-2xl font-semibold text-gold uppercase mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex justify-between">
                <span>Luxury Suit</span>
                <span>£950.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tailored Shirt</span>
                <span>£120.00</span>
              </div>
              <div className="flex justify-between">
                <span>Leather Belt</span>
                <span>£80.00</span>
              </div>

              <hr className="border-gray-700 my-4" />

              <div className="flex justify-between text-gold font-semibold text-lg">
                <span>Total</span>
                <span>£1,150.00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
