"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Globe, DollarSign, Leaf } from 'lucide-react';
import FlameEffect from '../common/FlameEffect';
import AnimatedCounter from '../common/AnimatedCounter';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-cyan-50 pt-12 overflow-hidden">
      <FlameEffect />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Modern kitchen with clean cooking solutions"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Affordable, Clean Cooking
          </span>
          <br />
          <span className="text-gray-900">
            for Every Nigerian Household
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Switch to LPG with Gray GaaS — Nigeria's first pay-as-you-use gas service. Safer, healthier, and smarter cooking solutions with IoT-enabled smart meters and automatic refills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow flex items-center space-x-2"
          >
            <span>Get Started Now</span>
            <ArrowRight size={20} />
          </motion.button>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors flex items-center space-x-2"
          >
            <Play size={20} />
            <span>Watch Demo</span>
          </motion.button> */}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <Globe className="w-10 h-10 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">
              <AnimatedCounter end={200000} suffix="+" />
            </div>
            <div className="text-sm text-gray-600">Households Target by 2030</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <DollarSign className="w-10 h-10 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">
              <AnimatedCounter end={55} suffix="%" />
            </div>
            <div className="text-sm text-gray-600">Cheaper Per Meal vs Charcoal</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <Leaf className="w-10 h-10 text-cyan-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-cyan-600">
              <AnimatedCounter end={4} /> Tons
            </div>
            <div className="text-sm text-gray-600">CO₂ Saved Per Household/Year</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;