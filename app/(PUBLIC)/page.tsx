import { Button } from "@/components/ui/button"
import CustomerFeedback from "@/components/ui/layout/CustomerFeedback"

import HeroSection from "@/components/ui/layout/Hero"
import InnerSection from "@/components/ui/layout/InnerSection"
import RecentProductShowcase from "@/components/ui/layout/RecentProductShowcase"
import ShippingSection from "@/components/ui/layout/ShippingSection"
import VideoSection from "@/components/ui/layout/VideoSection"
import Image from "next/image"

export default function Home() {
  return (
    <div className="  bg-background text-foreground min-h-screen">
      <HeroSection />
      <InnerSection />
      <RecentProductShowcase />
      <VideoSection/>
      <CustomerFeedback />
   
    
      
    </div>
  )
}