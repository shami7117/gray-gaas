"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingDown, Leaf, ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  showStats?: boolean;
}

const CTABanner: React.FC<CTABannerProps> = ({
  title = "Join 200,000 Nigerian Households Going Clean by 2030!",
  subtitle = "Be part of Nigeria's largest clean cooking revolution. Start your journey to healthier, more affordable cooking today.",
  buttonText = "Get Started Now",
  onButtonClick,
  showStats = true
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      // Default action - could be redirect to signup page
      console.log('CTA Button clicked - implement your action here');
    }
  };

  const stats = [
    { 
      value: "200K+", 
      label: "Target Households",
      icon: Users
    },
    { 
      value: "55%", 
      label: "Cost Savings",
      icon: TrendingDown
    },
    { 
      value: "4 Tons", 
      label: "CO₂ Saved Per Year",
      icon: Leaf
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              {subtitle}
            </p>
          )}
          
          <motion.button
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-purple-600 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-shadow mb-8"
          >
            {buttonText}
            <ArrowRight className="w-6 h-6" />
          </motion.button>

          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold mb-2">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-lg opacity-80">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-10 -left-20 w-96 h-96 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-10 -right-20 w-80 h-80 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full"
        />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-blue-600/80 to-cyan-500/80 pointer-events-none" />
    </section>
  );
};

export default CTABanner;