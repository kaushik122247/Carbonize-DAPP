"use client";
import React from 'react';
import ParticleBackground from './ParticleBackground';
import { ArrowRight, FileText, Users, TrendingUp, CheckCircle, Shield } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Tokenization",
      description: "Carbon credits from certified projects are tokenized into digital assets",
      icon: <FileText className="w-12 h-12" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Pooling",
      subtitle: "(Optional)",
      description: "Tokenized credits are added to carbon pools for liquidity and easy exchange",
      icon: <Users className="w-12 h-12" />,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      id: 3,
      title: "Trading",
      description: "Users can buy, sell, or swap carbon credit tokens directly on the marketplace",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      title: "Redemption",
      description: "Pool tokens can be redeemed back into specific carbon credits with project details",
      icon: <CheckCircle className="w-12 h-12" />,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 5,
      title: "Retirement",
      description: "To offset emissions, credits are retired permanently on blockchain, ensuring transparency",
      icon: <Shield className="w-12 h-12" />,
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="how-it-works" className="min-h-screen w-full bg-black py-20 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground 
        particleCount={100}
        particleColor="#10b981"
        connectionColor="#10b981"
        speed={2}
        connectionDistance={100}
        particleSize={1.5}
        opacity={0.4}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How It{' '}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Simple, transparent, and sustainable carbon credit trading with blockchain
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop View - Horizontal Flow */}
          <div className="hidden lg:flex items-center justify-between space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Step Card */}
                <div className="flex-1 max-w-xs">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 group">
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-green-400/25 transition-all duration-300`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                      {step.subtitle && (
                        <span className="block text-sm text-gray-400 font-normal">
                          {step.subtitle}
                        </span>
                      )}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0">
                    <ArrowRight className="w-8 h-8 text-green-400 opacity-60" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile/Tablet View - Vertical Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Step Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-green-400/50 transition-all duration-0">
                  {/* Step Number */}
                  <div className="text-green-400 text-sm font-semibold mb-4">
                    STEP {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                    {step.subtitle && (
                      <span className="block text-lg text-gray-400 font-normal">
                        {step.subtitle}
                      </span>
                    )}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Vertical Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-green-400 to-transparent opacity-60"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;