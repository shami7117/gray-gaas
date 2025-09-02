"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Smartphone, Truck, Leaf, ArrowRight, Zap } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    { 
      icon: CheckCircle, 
      title: 'Pay-As-You-Use Model', 
      desc: 'No upfront costs - only pay for the gas you consume with flexible top-ups',
      color: 'text-green-600'
    },
    { 
      icon: Smartphone, 
      title: 'Smart LPG Meters', 
      desc: 'IoT-enabled real-time monitoring with mobile app integration',
      color: 'text-blue-600'
    },
    { 
      icon: Truck, 
      title: 'Seamless Delivery Network', 
      desc: 'Automatic refills delivered to your doorstep when you need them',
      color: 'text-purple-600'
    },
    { 
      icon: Leaf, 
      title: 'Carbon Credit Financing', 
      desc: 'Earn rewards and credits for choosing clean cooking solutions',
      color: 'text-cyan-600'
    }
  ];

  return (
    <section id="our-solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Introducing{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Gas-as-a-Service (GaaS)
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary pay-as-you-use LPG system powered by smart IoT technology and sustainable financing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
                className="text-center z-10"
              >
                <Smartphone className="w-20 h-20 text-purple-600 mx-auto mb-4" />
                <p className="text-2xl font-semibold text-gray-800 mb-2">Smart LPG System</p>
                <p className="text-gray-600">IoT-powered monitoring & control</p>
              </motion.div>
              
              {/* Animated background elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-12 h-12 bg-blue-200 rounded-full opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-4 left-4 w-8 h-8 bg-purple-200 rounded-full opacity-50"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className={`w-8 h-8 ${feature.color} flex-shrink-0`} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Additional Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Gray GaaS?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Setup</h4>
              <p className="text-sm text-gray-600">Get cooking in 24 hours with our rapid deployment system</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Control</h4>
              <p className="text-sm text-gray-600">Monitor usage, set budgets, and control access via mobile app</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <Leaf className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Earn Credits</h4>
              <p className="text-sm text-gray-600">Generate carbon credits and earn rewards for clean cooking</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;