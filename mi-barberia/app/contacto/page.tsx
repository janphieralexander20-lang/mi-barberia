"use client";

import { useState } from "react";

export default function ContactPage() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("");

  const generarEnlaceWhatsapp = () => {
    let mensaje = "";
    
    // VERSIÓN ELEGANTE (SIN EMOJIS ROTOS)
    // El texto limpio siempre funciona en todos los celulares y computadores.
    if (nombre && servicio) {
      mensaje = `Hola, soy ${nombre}. Me gustaría reservar una hora para el servicio de ${servicio}. ¿Tienen disponibilidad?`;
    } else {
      mensaje = "Hola, me gustaría reservar una hora para atenderme con ustedes. ¿Tienen disponibilidad?";
    }

    // Empaquetamos el mensaje limpio
    return `https://wa.me/56983169769?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reserva tu Cita</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Completa tus datos para enviarnos un mensaje directo a WhatsApp con tu solicitud.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Lado Izquierdo: Información */}
          <div className="bg-black p-10 text-white md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-pink-500">Información</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold">Dirección</p>
                  <p className="text-gray-300">Av. Manuel Rodríguez Sur 881</p>
                  <p className="text-gray-400 text-sm">Santiago, Chile (Metro Santa Ana)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="font-bold">Horario</p>
                  <p className="text-gray-300">Lunes a Sábado</p>
                  <p className="text-gray-300">10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Formulario */}
          <div className="p-8 md:w-1/2 bg-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tus Datos</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tu Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  placeholder="Ej: María Pérez"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">¿Qué servicio buscas?</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all bg-white"
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                >
                  <option value="">Selecciona una opción...</option>
                  <option value="Corte de Cabello">Corte de Cabello</option>
                  <option value="Color o Mechas">Color o Mechas</option>
                  <option value="Maquillaje">Maquillaje</option>
                  <option value="Tratamiento Capilar">Tratamiento Capilar</option>
                  <option value="Manicure/Pedicure">Manicure / Pedicure</option>
                  <option value="Otro Servicio">Otro Servicio</option>
                </select>
              </div>

              <a 
                href={generarEnlaceWhatsapp()}
                target="_blank" 
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white transition-all duration-200 rounded-full focus:outline-none ${
                  nombre && servicio 
                    ? "bg-green-500 hover:bg-green-600 hover:scale-105 shadow-lg cursor-pointer" 
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (!nombre || !servicio) {
                    e.preventDefault();
                    alert("Por favor escribe tu nombre y selecciona un servicio primero.");
                  }
                }}
              >
                <span className="mr-2 text-2xl">💬</span>
                {nombre && servicio ? "Enviar Mensaje" : "Completa los datos"}
              </a>
            </div>
            
            <p className="mt-6 text-xs text-gray-400 text-center">
              Al hacer clic se abrirá tu WhatsApp con el mensaje listo.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}