"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Package, CreditCard, ChefHat, RotateCcw, Play, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    { 
      step: '1', 
      title: 'Sign Up Online', 
      icon: FileText, 
      desc: 'Create your account on our platform in minutes',
      color: 'from-purple-600 to-blue-600'
    },
    { 
      step: '2', 
      title: 'Receive Your Kit', 
      icon: Package, 
      desc: 'Get smart meter, cylinder, and accessories delivered',
      color: 'from-blue-600 to-cyan-600'
    },
    { 
      step: '3', 
      title: 'Top Up Anytime', 
      icon: CreditCard, 
      desc: 'Add credit via mobile app, USSD, or bank transfer',
      color: 'from-cyan-600 to-green-600'
    },
    { 
      step: '4', 
      title: 'Cook Smarter', 
      icon: ChefHat, 
      desc: 'Monitor real-time usage and cooking patterns',
      color: 'from-green-600 to-yellow-600'
    },
    { 
      step: '5', 
      title: 'Auto Refills', 
      icon: RotateCcw, 
      desc: 'Seamless delivery when you need more gas',
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Clean Cooking in 5 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From signup to smart cooking - get started with Gray GaaS in less than 24 hours
          </p>
        </motion.div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden space-y-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
              <item.icon className="w-12 h-12 text-gray-400 mx-auto" />
            </motion.div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 via-cyan-600 via-green-600 to-orange-600"></div>
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg relative z-10`}
                    >
                      {item.step}
                    </motion.div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                      className={`absolute inset-0 w-20 h-20 bg-gradient-to-r ${item.color} rounded-full mx-auto opacity-50`}
                    />
                    <div className="text-4xl mb-4">
                      <item.icon className="w-10 h-10 text-gray-600 mx-auto" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={20} />
          </motion.button>
          
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-md hover:shadow-lg"
          >
            <Play size={20} />
            <span>Watch Demo Video</span>
          </motion.button> */}
        </motion.div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">What Makes Our Process Special?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">No Credit Checks</h4>
              <p className="text-sm text-gray-600">Simple registration with no financial requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Free Installation</h4>
              <p className="text-sm text-gray-600">Professional setup included at no extra cost</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-600">Always available customer service and technical support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;   