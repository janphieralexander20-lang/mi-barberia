"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para desplazamiento suave (smooth scroll)
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Cierra el menú móvil si está abierto
    }
  };

  return (
    <nav className="bg-black text-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-wider hover:text-pink-500 transition-colors">
              <span className="text-white">Xiomara</span>
              <span className="text-pink-500">Maricela</span>
            </Link>
          </div>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-pink-500 transition-colors font-medium">
              Inicio
            </Link>
            
            {/* ENLACE CORREGIDO: Usa #servicios */}
            <a href="#servicios" onClick={(e) => scrollToSection(e, "servicios")} className="hover:text-pink-500 transition-colors font-medium cursor-pointer">
              Servicios
            </a>
            
            {/* ENLACE CORREGIDO: Usa #galeria */}
            <a href="#galeria" onClick={(e) => scrollToSection(e, "galeria")} className="hover:text-pink-500 transition-colors font-medium cursor-pointer">
              Galería
            </a>

            <Link href="/contacto" className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full transition-colors font-bold">
              Reservar
            </Link>
          </div>

          {/* BOTÓN CELULAR */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="/" className="block px-3 py-2 text-white hover:text-pink-500 w-full text-center" onClick={() => setIsOpen(false)}>Inicio</Link>
            
            <a href="#servicios" onClick={(e) => scrollToSection(e, "servicios")} className="block px-3 py-2 text-white hover:text-pink-500 w-full text-center cursor-pointer">
              Servicios
            </a>
            
            <a href="#galeria" onClick={(e) => scrollToSection(e, "galeria")} className="block px-3 py-2 text-white hover:text-pink-500 w-full text-center cursor-pointer">
              Galería
            </a>

            <Link href="/contacto" className="block mt-4 px-6 py-2 bg-pink-600 text-white rounded-full font-bold" onClick={() => setIsOpen(false)}>Reservar Cita</Link>
          </div>
        </div>
      )}
    </nav>
  );
}