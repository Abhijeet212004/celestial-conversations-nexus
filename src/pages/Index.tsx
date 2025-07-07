
import React from 'react';
import ChatBot from '@/components/ChatBot';
import SolarSystem from '@/components/SolarSystem';
import FloatingSatellites from '@/components/FloatingSatellites';
import SpaceBackground from '@/components/SpaceBackground';
import { Satellite, Earth } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />
      
      {/* Solar System Animation */}
      <SolarSystem />
      
      {/* Floating Satellites */}
      <FloatingSatellites />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="relative">
              <Satellite className="w-12 h-12 text-primary satellite-float" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full pulse-glow"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              ISRO
            </h1>
            <Earth className="w-12 h-12 text-blue-400 orbital-animation" style={{animationDuration: '10s'}} />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Indian Space Research Organisation
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto">
            Explore the cosmos with India's premier space agency. Chat with our AI assistant to learn about missions, satellites, and space exploration.
          </p>
        </div>
        
        {/* Chat Bot */}
        <ChatBot />
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Mission Data</span>
            </div>
            <div className="flex items-center gap-2">
              <Satellite className="w-4 h-4" />
              <span>100+ Satellites Launched</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Deep Space Network Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
