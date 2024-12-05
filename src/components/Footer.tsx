import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/logo.png"
              alt="Logo de la Empresa"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm">
              Tu socio de confianza en el descubrimiento de regalos y experiencias increíbles.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition">
                  Condiciones Generales
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Powered by Cesar Baca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;