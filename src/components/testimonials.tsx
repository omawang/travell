"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
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
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      comment: "Absolutely incredible experience! The team organized everything perfectly. Our trip to Bali was beyond our expectations. Every detail was taken care of.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      trip: "Bali Adventure Package"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "London, UK",
      rating: 5,
      comment: "Professional service from start to finish. The Paris romantic getaway was magical. Highly recommend for couples looking for a perfect vacation.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      trip: "Paris Romantic Getaway"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Sydney, Australia",
      rating: 5,
      comment: "The cultural journey to Tokyo was life-changing. Amazing guides, authentic experiences, and seamless organization. Will definitely book again!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      trip: "Tokyo Cultural Journey"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Toronto, Canada",
      rating: 5,
      comment: "Exceptional service and attention to detail. The Maldives trip was pure paradise. The overwater villa experience was unforgettable.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      trip: "Maldives Paradise Package"
    },
    {
      id: 5,
      name: "Lisa Wang",
      location: "Singapore",
      rating: 5,
      comment: "Best travel agency ever! They made our Swiss Alps adventure absolutely perfect. Great communication and support throughout the entire journey.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      trip: "Swiss Alps Adventure"
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Melbourne, Australia",
      rating: 5,
      comment: "Incredible Iceland experience! Saw the Northern Lights and explored amazing landscapes. The team's expertise made all the difference.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      trip: "Iceland Northern Lights Tour"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read authentic reviews from our satisfied customers who have experienced unforgettable journeys with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-8 w-8 text-green-600 opacity-50" />
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 leading-relaxed italic">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>

                  {/* Trip Info */}
                  <div className="text-sm text-green-600 font-medium">
                    {testimonial.trip}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}