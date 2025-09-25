"use client";
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      image: "/images/team/alex.jpg",
      bio: "Environmental scientist turned blockchain enthusiast. Leading the mission to make carbon credits accessible to everyone.",
      linkedin: "#",
      twitter: "#",
      email: "alex@carbonize.com"
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-Founder",
      image: "/images/team/sarah.jpg",
      bio: "Full-stack developer with 8+ years in DeFi. Expert in smart contract development and blockchain architecture.",
      linkedin: "#",
      twitter: "#",
      email: "sarah@carbonize.com"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Sustainability",
      image: "/images/team/michael.jpg",
      bio: "Carbon market specialist with 10 years experience in environmental finance and climate policy.",
      linkedin: "#",
      twitter: "#",
      email: "michael@carbonize.com"
    },
    {
      name: "Emma Thompson",
      role: "Lead Designer",
      image: "/images/team/emma.jpg",
      bio: "UX/UI designer passionate about creating intuitive interfaces for complex blockchain applications.",
      linkedin: "#",
      twitter: "#",
      email: "emma@carbonize.com"
    },
    {
      name: "David Kumar",
      role: "Blockchain Developer",
      image: "/images/team/david.jpg",
      bio: "Smart contract auditor and security expert. Ensuring the highest standards of security and reliability.",
      linkedin: "#",
      twitter: "#",
      email: "david@carbonize.com"
    },
    {
      name: "Lisa Martinez",
      role: "Marketing Director",
      image: "/images/team/lisa.jpg",
      bio: "Growth marketing specialist with expertise in Web3 community building and digital strategy.",
      linkedin: "#",
      twitter: "#",
      email: "lisa@carbonize.com"
    }
  ];

  return (
    <section id="team" className="min-h-screen w-full bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet Our{' '}
            <span className="text-green-700">
              Team
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Passionate professionals dedicated to revolutionizing carbon credit trading through blockchain technology
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div 
              key={index} 
              className="team-card group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/10 hover:scale-105 opacity-0"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                {/* Floating animation effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 via-blue-500/20 to-purple-600/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-green-400 font-semibold mb-4 text-lg">
                  {member.role}
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin} 
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  <a 
                    href={member.twitter} 
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  
                  <a 
                    href={`mailto:${member.email}`} 
                    className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/5 via-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to Join Our Mission?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              We're always looking for talented individuals who share our passion for environmental sustainability and blockchain innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="px-8 py-3 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-green-400 hover:text-green-400 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;