"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Flame, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Our Solution', href: '#our-solution' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Impact', href: '#impact' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              <Flame className="inline-block w-8 h-8 mr-2" />
              Gray GaaS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8" role="navigation">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex px-6 py-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
              aria-label="Get started with Gray GaaS"
            >
              Get Started
            </motion.button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-full font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;