// components/about/OurStory.tsx
'use client';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { animations } from '@/lib/animations';

export default function OurStory() {
  const milestones = [
    { year: "2019", title: "Concept Development", description: "Initial research and feasibility studies began" },
    { year: "2021", title: "First Pilot Households", description: "Launched pilot program with 100 households" },
    { year: "2023", title: "Strategic Partnerships", description: "Partnerships with LPG distributors established" },
    { year: "2030", title: "Our Vision", description: "Goal: 200,000+ households with clean cooking access" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading>Our Journey</SectionHeading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to impact, here's how we're transforming clean cooking in Nigeria.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"></div>
          <motion.div 
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.staggerChildren}
          >
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                // variants={animations.fadeInUp}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}