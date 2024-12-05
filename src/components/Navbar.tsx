import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="/public/logo.png"
              alt="Logo de la Empresa"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition">Nosotros</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition">Servicios</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition">Contacto</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition">Inicio</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition">Nosotros</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition">Servicios</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;