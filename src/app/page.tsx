"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Experiences from "@/components/experiences";
import Destinations from "@/components/destinations";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Experiences />
      <Destinations />
      <Testimonials />
      <Footer />
    </div>
  );
}
