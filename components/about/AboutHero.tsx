
// ===== ABOUT SECTION COMPONENTS =====
// components/about/AboutHero.tsx
'use client';

import Container from '@/components/ui/Container';
import WaveBackground from './WaveBackground';
import { motion } from 'framer-motion';
import { animations } from '@/lib/animations';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <WaveBackground />
      <Container>
        <motion.div 
          className="text-center z-10 relative"
          initial="hidden"
          animate="visible"
        //   variants={animations.fadeInUp}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            // variants={animations.fadeInUp}
          >
            Everyone deserves{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              clean cooking
            </span>{' '}
            options
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            // variants={animations.fadeInUp}
          >
            Gray GaaS is on a mission to revolutionize cooking in Nigeria through 
            accessible, affordable, and sustainable solutions.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}