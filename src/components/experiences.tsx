"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const packages = [
    {
      id: 1,
      title: "Bali Adventure Package",
      location: "Bali, Indonesia",
      duration: "7 Days",
      groupSize: "2-8 People",
      rating: 4.9,
      reviews: 124,
      price: "$1,299",
      originalPrice: "$1,599",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
      badge: "Popular",
      features: ["Temple Tours", "Beach Activities", "Cultural Experience"]
    },
    {
      id: 2,
      title: "Paris Romantic Getaway",
      location: "Paris, France",
      duration: "5 Days",
      groupSize: "2-4 People",
      rating: 4.8,
      reviews: 89,
      price: "$1,899",
      originalPrice: "$2,299",
      image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=400&h=300&fit=crop",
      badge: "Romantic",
      features: ["Eiffel Tower", "Seine Cruise", "Fine Dining"]
    },
    {
      id: 3,
      title: "Tokyo Cultural Journey",
      location: "Tokyo, Japan",
      duration: "6 Days",
      groupSize: "2-6 People",
      rating: 4.7,
      reviews: 156,
      price: "$1,699",
      originalPrice: "$1,999",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
      badge: "Cultural",
      features: ["Temple Visits", "Sushi Making", "City Tours"]
    }
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
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
            Gateway to Amazing Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover handcrafted travel packages designed to create unforgettable memories
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700">
                    {pkg.badge}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-600">{pkg.location}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {pkg.groupSize}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{pkg.rating}</span>
                      </div>
                      <span className="text-gray-600 text-sm">({pkg.reviews} reviews)</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {pkg.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                        <span className="text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                        <div className="text-sm text-gray-600">per person</div>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700">
                        Book Now
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
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
            View All Packages
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}