import React from 'react';
import CodeForm from './CodeForm';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://www.myaocu.com/assets/files/k7gVMFOf/CardControls_Peace_SubHero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
                Descubre Tu
                <span className="block text-emerald-400">Regalo Especial</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-lg animate-fade-in-delay">
                Ingresa tu código y elige tu regalo especial. Experimenta la alegría de algo único, solo para ti.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl animate-slide-up">
              <CodeForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;