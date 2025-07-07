
import React from 'react';

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Starfield */}
      <div className="stars absolute inset-0"></div>
      
      {/* Nebula effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Shooting stars */}
      <div className="absolute top-1/4 left-0 w-1 h-1 bg-white rounded-full opacity-0 animate-ping" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-0 animate-ping" style={{animationDelay: '7s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 animate-ping" style={{animationDelay: '10s'}}></div>
    </div>
  );
};

export default SpaceBackground;
