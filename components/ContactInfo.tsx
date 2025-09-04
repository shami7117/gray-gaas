'use client';

import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const contactDetails = [
  {
    icon: MapPinIcon,
    title: 'Visit Us',
    content: '9B Christ Avenue, Lekki Phase 1',
    link: 'https://maps.google.com/?q=9B+Christ+Avenue,+Lekki+Phase+1'
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    content: '08023135665',
    link: 'tel:08023135665'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    content: 'hello@yourcompany.com',
    link: 'mailto:hello@yourcompany.com'
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat - Sun: Closed',
    link: null
  }
];

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourcompany',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/yourcompany',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourcompany',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  }
];

export default function ContactInfo() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <detail.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {detail.title}
                </h3>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    target={detail.link.startsWith('http') ? '_blank' : undefined}
                    rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {detail.content.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < detail.content.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </a>
                ) : (
                  <p className="text-gray-600">
                    {detail.content.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < detail.content.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-200"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Additional CTA */}
      {/* <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-blue-100 mb-6">
          We're here to help bring your ideas to life. Let's discuss your project and see how we can work together.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          Schedule a Call
        </motion.button>
      </motion.div> */}
    </div>
  );
}