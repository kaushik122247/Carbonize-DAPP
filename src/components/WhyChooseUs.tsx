"use client";
import React from 'react';
import CardSwap, { Card } from './CardSwap';
import ParticleBackground from './ParticleBackground';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="min-h-screen w-full bg-black py-20 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground 
        particleCount={80}
        particleColor="#3b82f6"
        connectionColor="#3b82f6"
        speed={0.4}
        connectionDistance={100}
        particleSize={1.5}
        opacity={0.4}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Carbonize
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Leading the future of carbon credit trading with blockchain technology
          </p>
        </div>
        
        {/* CardSwap Component */}
        <div className='flex justify-end mb-10'>
        <div className='relative' style={{ height: '500px', width: '500px',  }}>
          <CardSwap
            width={730}
            height={450}
            cardDistance={55}
            verticalDistance={100}
            delay={2000}
            pauseOnHover={true}
            skewAmount={1.5}
          >
            <Card>
              <div className="p-8 text-white h-full flex flex-col justify-center items-center text-center">
                <h3 className="text-8xl font-bold mb-4">Carbon Credits</h3>
                <p className="text-lg opacity-90">Trade verified environmental tokens</p>
              </div>
            </Card>
            <Card>
              <div className="p-8 text-white h-full flex flex-col justify-center items-center text-center">
                <h3 className="text-8xl font-bold mb-4">Blockchain Security</h3>
                <p className="text-lg opacity-90">Secure transparent transactions</p>
              </div>
            </Card>
            <Card>
              <div className="p-8 text-white h-full flex flex-col justify-center items-center text-center">
                <h3 className="text-8xl font-bold mb-4">Sustainability</h3>
                <p className="text-lg opacity-90">Make positive environmental impact</p>
              </div>
            </Card>
          </CardSwap>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;