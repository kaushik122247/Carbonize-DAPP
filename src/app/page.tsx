"use client";
import Galaxy from '@/components/Galaxy';
import Header from '@/components/Header';
import HeroContent from '@/components/HeroContent';
import Earth from '@/components/Earth';
import WhyChooseUs from '@/components/WhyChooseUs';
import Team from '@/components/Team';

export default function Home() {
  return (
    <>
      <div className='relative h-screen w-screen overflow-hidden'>

        {/* Header */}
        <Header />

        {/* Galaxy background */}
        <div className='absolute inset-0 z-0'>
          <Galaxy
            mouseRepulsion={false}
            mouseInteraction={false}
            density={1}
            glowIntensity={0.2}
            saturation={1}
            hueShift={50}
            twinkleIntensity={0.3}
            starSpeed={0.3}
            focal={[0.5, 0.5]}
            rotationSpeed={0}
          />
        </div>

        {/* Main Hero Layout - Split Left/Right */}
        <div className='absolute inset-0 z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-8 lg:px-16'>
          {/* Left Side - Hero Content */}
          <div className='w-full lg:w-1/2 flex items-center justify-center lg:justify-start mb-8 lg:mb-0'>
            <HeroContent />
          </div>
          
          {/* Right Side - Earth Model */}
          <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <div className='w-64 h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]' 
                 style={{ 
                   filter: 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.5)) drop-shadow(0 0 50px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 75px rgba(59, 130, 246, 0.2))',
                 }}>
              <Earth className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Team Section */}
      <Team />
    </>
  );
}
