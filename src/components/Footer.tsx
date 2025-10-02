"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Footer = () => {
  const footerLinks = {
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Whitepaper', href: '#' },
      { name: 'Support', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground 
        particleCount={80}
        particleColor="#10b981"
        connectionColor="#10b981"
        speed={1.5}
        connectionDistance={120}
        particleSize={1.5}
        opacity={0.4}
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Floating particles/stars */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000 opacity-60"></div>
          <div className="absolute top-16 right-20 w-1 h-1 bg-green-300 rounded-full animate-pulse delay-500 opacity-60"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-700 opacity-60"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-green-500 rounded-full animate-pulse delay-300 opacity-60"></div>
        </div>

        <div className="relative z-10 py-24 px-4 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 p-2">
              <Image
                src="/images/logo.png"
                alt="Carbonize Logo"
                fill
                className="object-contain filter drop-shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Main Text */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Act. Create Impact.
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Transform the Future.
            </span>
          </h2>

          {/* CTA Button */}
          <Link href="/dashboard">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105">
              🌱 Start Trading Carbon Credits
            </button>
          </Link>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Social Links */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="relative w-10 h-10 mr-3">
                  <Image
                    src="/images/logo.png"
                    alt="Carbonize Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-xl font-bold">Carbonize</span>
              </div>
              
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Carbonize. All rights reserved. Built with 💚 for a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;