"use client";
import React from 'react';
import ParticleBackground from './ParticleBackground';

const Team = () => {
  const teamMembers = [
    {
      name: "Kaushik Chaurasiya",
      role: "Co-Founder & CEO",
      image: "/images/team/kaushik.jpg",
      linkedin: "https://www.linkedin.com/in/kaushik-chaurasiya-704301288/",
      github: "https://github.com/kaushik122247",
      email: "kaushikchaurasiya47@gmail.com"
    },
    {
      name: "Sushant",
      role: "CTO & Co-Founder",
      image: "/images/team/sushant.jpg",
      linkedin: "https://www.linkedin.com/in/sushant-97a7a0290/",
      github: "https://github.com/Sushant1407",
      email: "sushantkumar20102@gmail.com"
    },
    {
      name: "Taranpreet Kaur",
      role: "Lead Designer",
      image: "/images/team/taran.jpg",
      linkedin: "https://www.linkedin.com/in/taranpreet-kaur-a5544328b/",
      github: "#",
      email: "Taranpreetkaur206@gmail.com"
    },{
      name: "Pushpender Singh",
      role: "Head of Sustainability",
      image: "",
      linkedin: "https://www.linkedin.com/in/pushpender-singh-25b058288/",
      github: "https://github.com/Pushpender-18",
      email: "pushpender_singh@outlook.in"
    },
    
  ];

  return (
    <section id="team" className="min-h-screen w-full bg-black py-20 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground
        particleCount={100}
        particleColor="#10b981"
        connectionColor="#10b981"
        speed={2}
        connectionDistance={100}
        particleSize={2}
        opacity={0.4}
      />

      <div className="container mx-auto px-4 relative z-10">
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
              className="team-card group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/10 hover:scale-105 opacity-0 flex flex-col h-full"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden relative">
                    {/* Profile Image */}
                    {member.image != "" ? (<img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />) : (
                      <div
                        className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white text-2xl font-bold absolute inset-0"
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>)}
                  </div>
                </div>
                {/* Floating animation effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 via-blue-500/20 to-purple-600/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-0"></div>
              </div>

              {/* Member Info - This section will grow to push social links to bottom */}
              <div className="text-center flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-0">
                  {member.name}
                </h3>

                <p className="text-green-400 font-semibold text-lg">
                  {member.role}
                </p>
              </div>

              {/* Social Links - Fixed at bottom */}
              <div className="flex justify-center space-x-4 mt-6 pt-4 border-t border-gray-700/30">
                <a
                  href={member.linkedin}
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-0"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>

                <a
                  href={member.github}
                  className="w-10 h-10 bg-gray-700 hover:bg-black rounded-full flex items-center justify-center transition-colors duration-0"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-0"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/5 via-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;