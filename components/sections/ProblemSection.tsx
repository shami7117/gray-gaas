"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Flame, Heart, Target, ArrowRight } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

const ProblemSection = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            The Cooking Crisis in Nigeria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 40 million Nigerian households struggle with unsafe, expensive, and environmentally harmful cooking methods. Here's the reality:
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Users className="w-12 h-12 text-red-500 mb-4" />
              <div className="text-5xl font-bold text-red-500 mb-2">
                <AnimatedCounter end={40} suffix="M+" />
              </div>
              <p className="text-gray-600">Nigerian households cannot afford LPG upfront costs</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Flame className="w-12 h-12 text-orange-500 mb-4" />
              <div className="text-5xl font-bold text-orange-500 mb-2">
                <AnimatedCounter end={80} suffix="%" />
              </div>
              <p className="text-gray-600">Still rely on charcoal, kerosene, and firewood for cooking</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Heart className="w-12 h-12 text-red-600 mb-4" />
              <div className="text-5xl font-bold text-red-600 mb-2">
                <AnimatedCounter end={64600} />
              </div>
              <p className="text-gray-600">Annual deaths from indoor air pollution and smoke-related diseases</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Traditional cooking methods in Nigeria causing indoor air pollution"
                className="rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent rounded-2xl flex items-end">
                <div className="p-8 text-white">
                  <Target className="w-8 h-8 mb-2" />
                  <p className="text-2xl font-semibold mb-2">Environmental Impact</p>
                  <div className="text-3xl font-bold">
                    <AnimatedCounter end={97800} /> hectares
                  </div>
                  <p>of Nigerian forest lost annually due to traditional cooking methods</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow flex items-center space-x-2 mx-auto">
            <span>See How We're Changing This</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;