"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Experiences() {
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
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Dream Trips
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked travel packages designed to create unforgettable memories
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
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
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
}