"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, DollarSign, Heart, Users, ArrowRight, Award, Globe, TrendingUp } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

const ImpactSection = () => {
  const impacts = [
    { 
      icon: Leaf, 
      value: 4, 
      suffix: ' Tons', 
      label: 'CO₂ Saved per household annually', 
      color: 'text-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    { 
      icon: DollarSign, 
      value: 55, 
      suffix: '%', 
      label: 'Lower cooking costs vs charcoal', 
      color: 'text-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    { 
      icon: Heart, 
      value: 100, 
      suffix: '%', 
      label: 'Healthier families with clean cooking', 
      color: 'text-red-500',
      bgColor: 'from-red-50 to-red-100'
    },
    { 
      icon: Users, 
      value: 1000, 
      suffix: '+', 
      label: 'Women empowered through our network', 
      color: 'text-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  const additionalMetrics = [
    {
      icon: Globe,
      title: "Environmental Impact",
      stats: [
        { label: "Trees saved annually", value: 15000, suffix: "+" },
        { label: "Households switching monthly", value: 500, suffix: "+" }
      ]
    },
    {
      icon: TrendingUp,
      title: "Economic Benefits",
      stats: [
        { label: "Average monthly savings", value: 2500, suffix: " NGN" },
        { label: "Jobs created", value: 150, suffix: "+" }
      ]
    },
    {
      icon: Award,
      title: "Health Improvements",
      stats: [
        { label: "Reduced respiratory issues", value: 80, suffix: "%" },
        { label: "Time saved daily", value: 45, suffix: " min" }
      ]
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Making a Difference,{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              One Meal at a Time
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our impact extends beyond clean cooking to transforming communities, protecting the environment, and empowering families across Nigeria.
          </p>
        </motion.div>

        {/* Main Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impacts.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${stat.bgColor} rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300`}
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-700 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {additionalMetrics.map((metric, index) => (
            <div key={metric.title} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <metric.icon className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{metric.title}</h3>
              </div>
              <div className="space-y-4">
                {metric.stats.map((statItem, statIndex) => (
                  <div key={statItem.label} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{statItem.label}</span>
                    <span className="text-lg font-bold text-purple-600">
                      <AnimatedCounter 
                        end={statItem.value} 
                        suffix={statItem.suffix}
                        duration={2 + (index * 0.5)} 
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Impact Stories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Real Impact, Real Stories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind every statistic is a family breathing cleaner air, saving money, and building a better future for their children.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">👩‍👧‍👦</div>
              <h4 className="font-semibold text-gray-900 mb-2">Family Health</h4>
              <p className="text-sm text-gray-600">
                "My children stopped coughing at night after we switched to Gray GaaS"
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-semibold text-gray-900 mb-2">Financial Freedom</h4>
              <p className="text-sm text-gray-600">
                "I save over ₦3,000 monthly on cooking expenses now"
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="font-semibold text-gray-900 mb-2">Environmental Impact</h4>
              <p className="text-sm text-gray-600">
                "Proud to contribute to a cleaner environment for future generations"
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              Read More Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;