
import React from 'react';
import { Satellite } from 'lucide-react';

const FloatingSatellites = () => {
  const satellites = [
    { id: 1, top: '15%', left: '10%', delay: '0s', size: 'w-6 h-6' },
    { id: 2, top: '25%', right: '15%', delay: '2s', size: 'w-5 h-5' },
    { id: 3, top: '60%', left: '5%', delay: '4s', size: 'w-7 h-7' },
    { id: 4, bottom: '20%', right: '20%', delay: '1s', size: 'w-5 h-5' },
    { id: 5, top: '40%', left: '85%', delay: '3s', size: 'w-6 h-6' },
    { id: 6, bottom: '40%', left: '15%', delay: '5s', size: 'w-4 h-4' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {satellites.map((satellite) => (
        <div
          key={satellite.id}
          className={`absolute satellite-float ${satellite.size}`}
          style={{
            top: satellite.top,
            left: satellite.left,
            right: satellite.right,
            bottom: satellite.bottom,
            animationDelay: satellite.delay,
          }}
        >
          <div className="relative">
            <Satellite className={`${satellite.size} text-primary/60`} />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse"></div>
            {/* Signal waves */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 border border-primary/20 rounded-full animate-ping"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 border border-primary/10 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingSatellites;
