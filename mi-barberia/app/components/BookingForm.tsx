"use client";
import { useState } from 'react';
import { supabase } from '../utils/supabase';

export default function BookingForm({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: 'Corte De Cabello',
    fecha: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Guardar en Base de Datos (Supabase)
    const { error } = await supabase.from('citas').insert({
      cliente_nombre: formData.nombre,
      cliente_telefono: formData.telefono,
      servicio: formData.servicio,
      fecha_cita: new Date(formData.fecha).toISOString(),
    });

    setLoading(false);

    if (error) {
      alert("Error al reservar: " + error.message);
    } else {
      // --- INTEGRACIÓN WHATSAPP ---
      
      // A. Formatear la fecha para que se lea bonito (Ej: 28 de noviembre, 15:30)
      const fechaBonita = new Date(formData.fecha).toLocaleString('es-ES', {
        day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
      });

      // B. Crear el mensaje personalizado
      const mensaje = `Hola! 👋 Soy ${formData.nombre}. Acabo de reservar en la web para un *${formData.servicio}* el día *${fechaBonita}*. ¿Me confirman?`;

      // C. Configurar tu número (Sin el signo +)
      const numeroDueño = "56983169769"; 
      
      // D. Crear el link mágico
      const linkWhatsApp = `https://wa.me/${numeroDueño}?text=${encodeURIComponent(mensaje)}`;

      // E. Abrir WhatsApp y cerrar el formulario
      window.open(linkWhatsApp, '_blank');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>

        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Reservar Cita</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tu Nombre</label>
            <input 
              required type="text" 
              className="w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none text-black"
              placeholder="Ej: María Pérez"
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
            <input 
              required type="tel" 
              className="w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none text-black"
              placeholder="Ej: 999 888 777"
              onChange={(e) => setFormData({...formData, telefono: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Servicio</label>
            <select 
              className="w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none text-black bg-white"
              onChange={(e) => setFormData({...formData, servicio: e.target.value})}
            >
              <option>Corte De Cabello</option>
              <option>Peinados</option>
              <option>Limpieza Facial</option>
              <option>Manicure y Pedicure</option>
              <option>Maquillajes</option>
              <option>Tratamiento Capilar</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha y Hora</label>
            <input 
              required type="datetime-local" 
              className="w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none text-black"
              onChange={(e) => setFormData({...formData, fecha: e.target.value})}
            />
          </div>

          <button 
            disabled={loading} type="submit" 
            className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold hover:bg-pink-700 transition disabled:opacity-50 mt-4"
          >
            {loading ? "Procesando..." : "Confirmar y Enviar a WhatsApp"}
          </button>
        </form>
      </div>
    </div>
  );
}