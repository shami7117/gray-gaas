"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Globe, ArrowRight } from 'lucide-react';

interface Partner {
  name: string;
  category: string;
  description?: string;
  logo?: string;
}

const PartnersSection: React.FC = () => {
  const partners: Partner[] = [
    { 
      name: "Techno Oil", 
      category: "LPG Supplier",
      description: "Leading petroleum products distributor",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop"
    },
    { 
      name: "Banner Gas", 
      category: "Gas Infrastructure",
      description: "Gas distribution and infrastructure",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=80&h=80&fit=crop"
    },
    { 
      name: "NIPCO", 
      category: "Energy Solutions",
      description: "Integrated energy solutions provider",
      logo: "https://images.unsplash.com/photo-1497436072909-f5e4be1707e1?w=80&h=80&fit=crop"
    },
    { 
      name: "Rainoil", 
      category: "Petroleum Products",
      description: "Downstream petroleum operations",
      logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop"
    },
    { 
      name: "Gold Standard", 
      category: "Carbon Credits",
      description: "Global standard for climate projects",
      logo: "https://images.unsplash.com/photo-1569163139394-de4e5f43e4e3?w=80&h=80&fit=crop"
    },
    { 
      name: "Wuxi Zhongyi", 
      category: "Technology",
      description: "IoT and smart metering solutions",
      logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=80&h=80&fit=crop"
    },
    { 
      name: "FinTech Partners", 
      category: "Financial Services",
      description: "Digital payment solutions",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop"
    },
    { 
      name: "NGO Coalition", 
      category: "Social Impact",
      description: "Community development partners",
      logo: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=80&h=80&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with established organizations across energy, technology, and financial services 
            to deliver comprehensive clean cooking solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                {/* Partner Logo */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300 overflow-hidden">
                  {partner.logo ? (
                    <img 
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-purple-600">
                      {partner.name.charAt(0)}
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-sm text-purple-600 font-medium mb-2">
                  {partner.category}
                </p>
                
                {partner.description && (
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Partners Choose Gray GaaS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Collaboration</h4>
                <p className="text-sm text-gray-600">
                  Joint initiatives that benefit all stakeholders in the clean energy ecosystem
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Market Expansion</h4>
                <p className="text-sm text-gray-600">
                  Access to new customer segments and innovative distribution channels
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Social Impact</h4>
                <p className="text-sm text-gray-600">
                  Contributing to sustainable development and environmental conservation
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Interested in partnering with us?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Become a Partner
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;