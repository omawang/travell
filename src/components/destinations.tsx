"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function Destinations() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const destinations = [
    {
      id: 1,
      name: "Santorini",
      country: "Greece",
      description: "Experience the stunning sunsets and white-washed buildings of this iconic Greek island.",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&h=400&fit=crop&auto=format",
      packages: "12 Packages"
    },
    {
      id: 2,
      name: "Maldives",
      country: "Indian Ocean",
      description: "Relax in overwater bungalows surrounded by crystal-clear turquoise waters.",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&h=400&fit=crop&auto=format",
      packages: "8 Packages"
    },
    {
      id: 3,
      name: "Kyoto",
      country: "Japan",
      description: "Discover ancient temples, traditional gardens, and rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&h=400&fit=crop&auto=format",
      packages: "15 Packages"
    },
    {
      id: 4,
      name: "Swiss Alps",
      country: "Switzerland",
      description: "Adventure through breathtaking mountain landscapes and pristine alpine villages.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&auto=format",
      packages: "10 Packages"
    },
    {
      id: 5,
      name: "Bora Bora",
      country: "French Polynesia",
      description: "Paradise found in this tropical haven with lagoons and coral reefs.",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=500&h=400&fit=crop&auto=format",
      packages: "6 Packages"
    },
    {
      id: 6,
      name: "Iceland",
      country: "Nordic Region",
      description: "Witness the Northern Lights, geysers, and dramatic volcanic landscapes.",
      image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=500&h=400&fit=crop&auto=format",
      packages: "9 Packages"
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
            Best Destinations For Trip Seekers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the world&apos;s most beautiful destinations handpicked by our travel experts
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 text-white">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">{destination.country}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {destination.packages}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {destination.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 h-auto font-medium">
                        Explore Packages
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            View All Destinations
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}