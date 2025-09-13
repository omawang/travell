"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Destinations() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const destinations = [
    {
      id: 1,
      name: "Santorini",
      country: "Greece",
      description: "Experience the stunning sunsets and white-washed buildings of this iconic Greek island.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=400&fit=crop",
      packages: "12 Packages"
    },
    {
      id: 2,
      name: "Maldives",
      country: "Indian Ocean",
      description: "Relax in overwater bungalows surrounded by crystal-clear turquoise waters.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      packages: "8 Packages"
    },
    {
      id: 3,
      name: "Kyoto",
      country: "Japan",
      description: "Discover ancient temples, traditional gardens, and rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&h=400&fit=crop",
      packages: "15 Packages"
    },
    {
      id: 4,
      name: "Swiss Alps",
      country: "Switzerland",
      description: "Adventure through breathtaking mountain landscapes and pristine alpine villages.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      packages: "10 Packages"
    },
    {
      id: 5,
      name: "Bora Bora",
      country: "French Polynesia",
      description: "Paradise found in this tropical haven with lagoons and coral reefs.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=400&fit=crop",
      packages: "6 Packages"
    },
    {
      id: 6,
      name: "Iceland",
      country: "Nordic Region",
      description: "Witness the Northern Lights, geysers, and dramatic volcanic landscapes.",
      image: "https://images.unsplash.com/photo-1539066834862-2e0c2e2c9b8c?w=500&h=400&fit=crop",
      packages: "9 Packages"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best Destinations For Trip Seekers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the world's most beautiful destinations handpicked by our travel experts
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-700 cursor-pointer hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
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
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}