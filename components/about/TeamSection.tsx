// components/about/TeamSection.tsx
'use client';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { animations } from '@/lib/animations';
import Image from 'next/image';

export default function TeamSection() {
  const team = [
    { 
      name: "O Onuchukwu", 
      role: "CEO & Founder", 
      image: "/O_Onuchukwu.jpg", 
      linkedin: "#" 
    },
    { 
      name: "A F Osasona", 
      role: "Operations Director", 
      image: "/Osasona.png", 
      linkedin: "#" 
    },
    { 
      name: "C Ezeigwe", 
      role: "CFO", 
      image: "/Ezeigwe.png", 
      linkedin: "#" 
    },
    { 
      name: "I Onuchukwu", 
      role: "CTO", 
      image: "/Onuchukwu.jpg", 
      linkedin: "#" 
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading>Meet Our Team</SectionHeading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate individuals dedicated to transforming clean cooking across Nigeria.
          </p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.staggerChildren}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index}
              className="group"
              variants={animations.scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    Connect
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}