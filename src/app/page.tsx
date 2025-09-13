"use client";

import Destinations from "@/components/destinations";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

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
