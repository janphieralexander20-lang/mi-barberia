"use client"; // <--- ¡ESTA LÍNEA ES LA CLAVE!

import Link from "next/link";

export default function Hero() {
  
  const scrollToServices = (e: any) => {
    e.preventDefault();
    const element = document.getElementById("servicios");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }}
      ></div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        
        <span className="block text-pink-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
          Bienvenida a tu nuevo estilo
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Xiomara <span className="text-pink-500">Maricela</span>
          <span className="block text-3xl md:text-5xl mt-2 font-light text-gray-300">Salon & Spa</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-10 font-light max-w-2xl mx-auto">
          Cortes exclusivos, maquillaje profesional y tratamientos que realzan tu belleza natural.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          {/* Botón Principal */}
          <Link 
            href="/contacto" 
            className="px-8 py-4 bg-pink-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-pink-700 hover:scale-105 transition-all transform duration-300 w-full md:w-auto"
          >
            ¡Reservar Cita Ahora!
          </Link>

          {/* Botón Secundario (Ver Servicios) */}
          <a 
            href="#servicios"
            onClick={scrollToServices}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto cursor-pointer"
          >
            Ver Servicios
          </a>
        </div>
      </div>

      {/* 3. FLECHITA ANIMADA */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white opacity-70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}