
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { MapPin, Navigation, User, Users } from "lucide-react";

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-primary py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-white md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get to your destination with just a tap
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Safe, affordable rides at your fingertips. Sign up and start riding today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/request-ride">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Request a Ride
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Become a Driver
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556122071-e404cb8e22b5?auto=format&fit=crop&q=80&w=1000"
                alt="Car ride" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="h-12 w-12 text-secondary" />,
                title: "Request a Ride",
                description: "Enter your destination and select your ride option."
              },
              {
                icon: <User className="h-12 w-12 text-primary" />,
                title: "Get Matched with a Driver",
                description: "We'll connect you with a nearby driver heading your way."
              },
              {
                icon: <Navigation className="h-12 w-12 text-secondary" />,
                title: "Track Your Journey",
                description: "Know exactly when your driver will arrive and track your trip in real-time."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose RideShare</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Affordable",
                description: "Get the best rates for your journey with multiple ride options."
              },
              {
                title: "Safe",
                description: "All drivers are background-checked and rides are tracked."
              },
              {
                title: "Fast",
                description: "Quick pickup times and optimized routes get you there quickly."
              },
              {
                title: "Reliable",
                description: "Count on us to get you to your destination on time, every time."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-primary py-16 px-4 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ride?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started now and experience the best way to get around town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-ride">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Request a Ride
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The fastest way to get around the city. I never wait more than 3 minutes for a ride!",
                author: "Sarah M."
              },
              {
                quote: "As a driver, I've been able to earn extra income on my own schedule. Fantastic experience!",
                author: "Michael T."
              },
              {
                quote: "Clean cars, professional drivers, and excellent customer service. Highly recommend!",
                author: "Jessica K."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-yellow-500 mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="mb-4 text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
