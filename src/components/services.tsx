"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Plane, Shield, Clock, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Book flights to any destination worldwide with the best prices and flexible options."
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance to protect your journey and give you peace of mind."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you throughout your travel experience."
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Tailored travel experiences designed specifically for your preferences and needs."
    }
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive travel services to make your journey seamless and memorable
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="mb-4"
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="h-8 w-8 text-green-600" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}