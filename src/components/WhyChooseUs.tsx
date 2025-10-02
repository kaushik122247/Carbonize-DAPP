"use client";
import React, { useState } from 'react';
import CardSwap, { Card } from './CardSwap';
import ParticleBackground from './ParticleBackground';

const WhyChooseUs = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cardTexts = [
    "Tokenized Action. Turning Carbon Credits into Accessible, Tradable Assets for Climate Impact",
    "Trust Unlocked. Secure, Transparent and Decentralized Solutions for a New Era",
    "Our Shared Responsibility for a Sustainable Future"
  ];
  return (
    <section id="why-choose-us" className="min-h-screen w-full bg-black  pb-30 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground
        particleCount={100}
        particleColor="#3b82f6"
        connectionColor="#3b82f6"
        speed={2}
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

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 min-h-[500px]">
          {/* Left Side Text */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-700 ease-in-out transform">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {cardTexts[currentCardIndex]}
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto lg:mx-0 mt-4"></div>
          </div>

          {/* Right Side Cards */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className='relative' style={{ height: '500px', width: '700px' }}>
              <CardSwap
                width={730}
                height={450}
                cardDistance={55}
                verticalDistance={100}
                delay={2500}
                pauseOnHover={false}
                skewAmount={1.5}
                onCardChange={setCurrentCardIndex}
              >
                <Card>
                  <div className="p-4 text-white h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
                    {/* Carbon Background Image - Properly fitted inside card */}
                    <div
                      className="absolute inset-4 bg-cover bg-center bg-no-repeat rounded-2xl border-2 border-green-400/60 shadow-lg shadow-green-400/20"
                      style={{
                        backgroundImage: "url('/images/carbon.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
                      {/* Green overlay for carbon theme */}
                      <div className="absolute inset-0 bg-green-900/50 rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-4">
                      <h3 className="text-8xl font-bold mb-4 drop-shadow-1md text-shadow-lg">Carbon Credits</h3>
                      <p className="text-lg opacity-90 drop-shadow-lg">Trade verified environmental tokens</p>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="p-4 text-white h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
                    {/* Blockchain Background Image - Properly fitted inside card */}
                    <div
                      className="absolute inset-4 bg-cover bg-center bg-no-repeat rounded-2xl border-2 border-cyan-400/60 shadow-lg shadow-cyan-400/20"
                      style={{
                        backgroundImage: "url('/images/blockchain.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
                      {/* Blue overlay for blockchain theme */}
                      <div className="absolute inset-0 bg-blue-900/50 rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-4">
                      <h3 className="text-8xl font-bold mb-4 drop-shadow-1md text-shadow-lg">Blockchain Security</h3>
                      <p className="text-lg opacity-90 drop-shadow-lg">Secure transparent transactions</p>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="p-4 text-white h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
                    {/* Sustainability Background Image - Properly fitted inside card */}
                    <div
                      className="absolute inset-4 bg-cover bg-center bg-no-repeat rounded-2xl border-2 border-emerald-400/60 shadow-lg shadow-emerald-400/20"
                      style={{
                        backgroundImage: "url('/images/sustainibility.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {/* Blueish green and pink gradient backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/60 via-cyan-700/50 to-pink-600/50 rounded-2xl"></div>
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-4">
                      <h3 className="text-8xl font-bold mb-4 drop-shadow-1md text-shadow-lg">Sustainability</h3>
                      <p className="text-lg opacity-90 drop-shadow-lg">Make positive environmental impact</p>
                    </div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;