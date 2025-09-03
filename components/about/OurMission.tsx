
// components/about/OurMission.tsx
'use client';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { animations } from '@/lib/animations';
import { Home } from 'lucide-react';

export default function OurMission() {
  const benefits = [
    "Reducing indoor air pollution",
    "Empowering women and families",
    "Creating sustainable livelihoods"
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.slideInLeft}
          >
            <SectionHeading>Our Mission</SectionHeading>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              To make clean cooking accessible, affordable, and sustainable for every 
              household in Nigeria. We believe that access to clean energy is not a 
              luxury, but a fundamental right that drives health, economic growth, 
              and environmental sustainability.
            </p>
            <motion.div 
              className="space-y-4"
              variants={animations.staggerChildren}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                //   variants={animations.fadeInUp}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.slideInRight}
          >
            <div className="w-full h-96 bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
              <Home className="w-24 h-24 text-gray-700" strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
