"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  image: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      text: "With Gray GaaS, I cook healthier meals for my kids and save money every day!",
      author: "Aisha, Lagos",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "I no longer worry about running out of gas — the smart meter is a game-changer.",
      author: "Uche, Abuja", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "The delivery service is amazing and the app makes everything so simple.",
      author: "Fatima, Kano",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "My family loves the convenience and I love the savings. Best decision we made!",
      author: "Ibrahim, Kaduna",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "Clean cooking has never been this affordable. Thank you Gray GaaS!",
      author: "Blessing, Port Harcourt",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from Nigerian families who have transformed their cooking experience
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center"
          >
            <div className="mb-6">
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].author}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover shadow-lg"
              />
            </div>
            
            {/* Star Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="text-lg md:text-xl font-semibold text-purple-600">
              — {testimonials[currentTestimonial].author}
            </p>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-purple-600" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-purple-600" />
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-slide functionality */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {currentTestimonial + 1} of {testimonials.length} testimonials
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;