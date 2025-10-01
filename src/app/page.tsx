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
      <div className='relative min-h-screen h-screen w-screen overflow-hidden'>

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

        {/* Earth Model in Center */}
        <div className='absolute inset-0 z-10 flex items-center justify-center'>
          <div className='w-96 h-96 md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] relative'>
            {/* Green shadow/glow effect */}
            <div className="absolute inset-0 rounded-full bg-green-500/20 blur-3xl scale-110 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-green-400/10 blur-2xl scale-125"></div>
            <Earth className="w-full h-full relative z-10" />
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
