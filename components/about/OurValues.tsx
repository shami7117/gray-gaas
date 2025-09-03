// components/about/OurValues.tsx
'use client';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { animations } from '@/lib/animations';
import { Sprout, Heart, UserCircle2, UsersRound } from 'lucide-react';

export default function OurValues() {
  const values = [
    { icon: Sprout, title: "Sustainability", description: "Environmental responsibility in every solution" },
    { icon: Heart, title: "Health", description: "Protecting families from harmful indoor pollution" },
    { icon: UserCircle2, title: "Empowerment", description: "Creating opportunities for women and communities" },
    { icon: UsersRound, title: "Partnership", description: "Collaborating for greater impact and reach" }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading>Our Values</SectionHeading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and every decision we make.
          </p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.staggerChildren}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              variants={animations.scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-200">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex justify-center mb-4">
                  {value.icon && <value.icon className="w-12 h-12 text-gray-700" strokeWidth={1.5} />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}