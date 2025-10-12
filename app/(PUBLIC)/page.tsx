import CustomerFeedback from "@/components/ui/layout/CustomerFeedback";

import HeroSection from "@/components/ui/layout/Hero";
import InnerSection from "@/components/ui/layout/InnerSection";
import RecentProductShowcase from "@/components/ui/layout/RecentProductShowcase";
import VideoSection from "@/components/ui/layout/VideoSection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Three Five Two - Home",
    description:
      "Discover Three Five Two - Your ultimate destination for premium products. Explore our curated collections and enjoy seamless shopping experiences.",
  };
}

export default function Home() {
  return (
    <div className="  bg-background text-foreground min-h-screen">
      <HeroSection />
      <InnerSection />
      <RecentProductShowcase />
      <VideoSection />
      <CustomerFeedback />
    </div>
  );
}
