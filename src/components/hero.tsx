import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users } from "lucide-react";
import Aurora from "@/components/aurora";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 bg-slate-950">
        <Aurora 
          colorStops={["#10b981", "#3b82f6", "#8b5cf6"]}
          speed={1.2}
          blend={0.6}
          amplitude={1.5}
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Where dreams
                  <span className="text-green-400"> destinations </span>
                  await your
                  <span className="text-green-400"> journey</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-lg">
                  Discover breathtaking destinations and create unforgettable memories with our expertly crafted travel experiences.
                </p>
              </div>
              
              {/* Stats */}
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-gray-400">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

          {/* Right Content - Booking Form */}
          <div className="lg:justify-self-end">
            <Card className="p-6 bg-white shadow-xl border-0 max-w-md w-full">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Plan Your Trip
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Find your perfect destination
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Destination */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Destination
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Where do you want to go?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bali">Bali, Indonesia</SelectItem>
                        <SelectItem value="paris">Paris, France</SelectItem>
                        <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                        <SelectItem value="maldives">Maldives</SelectItem>
                        <SelectItem value="santorini">Santorini, Greece</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Check-in Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Check-in Date
                    </label>
                    <Input type="date" className="w-full" />
                  </div>

                  {/* Check-out Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Check-out Date
                    </label>
                    <Input type="date" className="w-full" />
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Guests
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5+">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Search Button */}
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                    Search Trips
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}