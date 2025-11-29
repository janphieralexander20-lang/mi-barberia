"use client"; // IMPORTANTE: Esto convierte la página en interactiva
import { useState } from 'react';
import BookingForm from './components/BookingForm';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const servicios = [
    "Corte De Cabello", "Peinados", "Limpieza Facial",
    "Manicure y Pedicure", "Maquillajes", "Tratamiento Capilar",
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-800 font-sans overflow-x-hidden relative">
      
      {/* --- MOSTRAR EL FORMULARIO SI ESTÁ ACTIVO --- */}
      {showModal && <BookingForm onClose={() => setShowModal(false)} />}

      <header className="py-8 text-center relative z-10">
         <div className="inline-block relative">
            <h1 className="text-6xl md:text-8xl font-serif text-pink-200 opacity-50 absolute top-0 left-1/2 -translate-x-1/2 -z-10 tracking-widest">JX</h1>
            <h2 className="text-4xl md:text-5xl font-bold relative mt-4" style={{ fontFamily: 'cursive' }}>Xiomara Maricela</h2>
            <p className="text-sm tracking-[0.3em] mt-2 text-neutral-500 font-semibold uppercase">Salon & Spa</p>
         </div>
      </header>

      <section className="text-center py-16 px-4 bg-gradient-to-b from-white to-pink-50 rounded-b-[3rem] mb-12 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

         <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600">Realza tu belleza natural</h3>
            <p className="text-neutral-600 mb-10 text-lg leading-relaxed">
              Déjate consentir en un ambiente exclusivo dedicado a tu cuidado personal.
            </p>
            
            {/* --- BOTÓN QUE ABRE EL FORMULARIO --- */}
            <button 
              onClick={() => setShowModal(true)}
              className="bg-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition shadow-lg shadow-pink-200/50 transform hover:-translate-y-1"
            >
              ¡Pide tu cita aquí!
            </button>
         </div>
      </section>

      <section className="max-w-md mx-auto px-4 py-12">
         <h3 className="text-2xl font-bold text-center mb-8 text-pink-600 uppercase tracking-wider">Nuestros servicios</h3>
         <div className="flex flex-col gap-3">
           {servicios.map((item, index) => (
             <div key={index} className="bg-pink-500 text-white p-4 rounded-full text-center font-semibold text-lg shadow-sm hover:bg-pink-600 transition cursor-pointer">
               {item}
             </div>
           ))}
            <div className="bg-pink-200 text-pink-700 p-3 rounded-full text-center font-medium text-sm mt-2">Mucho Más...</div>
         </div>
      </section>

{/* --- FOOTER CON MAPA --- */}
      <footer className="mt-12 bg-neutral-50 border-t border-pink-100">
         
         {/* Sección del Mapa (Ancho completo) */}
         <div className="w-full h-64 md:h-80 grayscale hover:grayscale-0 transition duration-700">
            {/* Pega aquí abajo el código <iframe...> que copiaste de Google Maps.
               Asegúrate de agregarle className="w-full h-full border-0" dentro del iframe.
            */}
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.611620722855!2d-70.66267322458447!3d-33.43336849663702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5b0fcee4a11%3A0x89974294374748d9!2sAv.%20Manuel%20Rodriguez%20Sur%20881%2C%208320000%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1764379592478!5m2!1ses-419!2scl"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

         </div>

         {/* Sección de Contacto */}
         <div className="py-12 text-center px-4">
            <h4 className="text-xl font-bold text-pink-500 mb-4">Visítanos</h4>
            <p className="text-2xl font-bold text-neutral-800 mb-2 flex justify-center items-center gap-2">
               <span>📞</span> +51 988975065
            </p>
            <p className="text-neutral-600 max-w-xs mx-auto leading-relaxed">
               Estamos Ubicados en Calle La Mar #351, Monsefú
            </p>
         </div>
      </footer>
    </main>
  );
}