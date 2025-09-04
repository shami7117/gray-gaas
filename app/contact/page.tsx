'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, XCircle } from 'lucide-react';

// Contact Form Component with Custom API
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        console.log('Email sent successfully:', data);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
        console.error('API error:', data);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
      
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
        >
          <CheckCircle className="text-green-500 w-5 h-5" />
          <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
        >
          <XCircle className="text-red-500 w-5 h-5" />
          <span className="text-red-700">
            {errorMessage || 'Failed to send message. Please try again.'}
          </span>
        </motion.div>
      )}

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="08023135665"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <motion.button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 ${
            isSubmitting || !formData.name || !formData.email || !formData.message
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}

// Contact Info Component
function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      info: 'info@graygaas.com',
      link: 'mailto:info@graygaas.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '08023135665',
      // link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Address',
      info: '9B Christ Avenue, Lekki Phase 1',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat - Sun: Closed',
      link: null
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We're here to help and answer any question you might have. We look forward to hearing from you!
        </p>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <detail.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{detail.title}</h3>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 whitespace-pre-line"
                  >
                    {detail.info}
                  </a>
                ) : (
                  <p className="text-gray-600 whitespace-pre-line">{detail.info}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response Promise</h3>
        <p className="text-gray-600 leading-relaxed">
          We typically respond to all inquiries within 24 hours during business days. For urgent matters, 
          please call us directly at the number above.
        </p>
      </motion.div>
    </div>
  );
}

// Main Contact Page Component
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </div>
  );
}