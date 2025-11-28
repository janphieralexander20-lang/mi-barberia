"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

interface Cita {
  id: number;
  cliente_nombre: string;
  cliente_telefono: string;
  servicio: string;
  fecha_cita: string;
}

export default function AdminPanel() {
  // --- ESTADOS DEL CANDADO ---
  const [autorizado, setAutorizado] = useState(false);
  const [inputClave, setInputClave] = useState("");
  
  // --- CAMBIA ESTO POR TU CONTRASEÑA ---
  const CLAVE_SECRETA = "xiomara25";

  // --- ESTADOS DE LOS DATOS ---
  const [citas, setCitas] = useState<Cita[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (autorizado) {
      fetchCitas();
    }
  }, [autorizado]); // Solo carga datos si está autorizado

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputClave === CLAVE_SECRETA) {
      setAutorizado(true);
    } else {
      alert("⚠️ Contraseña incorrecta");
    }
  };

  const fetchCitas = async () => {
    const { data, error } = await supabase
      .from('citas')
      .select('*')
      .order('fecha_cita', { ascending: true });

    if (error) console.error('Error:', error);
    else setCitas(data || []);
    setLoading(false);
  };

  const cancelarCita = async (id: number) => {
    if (!confirm("¿Borrar esta cita permanentemente?")) return;
    const { error } = await supabase.from('citas').delete().eq('id', id);
    
    if (error) alert("Error al borrar");
    else setCitas(citas.filter(c => c.id !== id));
  };

  // --- VISTA 1: SI NO ESTÁ AUTORIZADO (EL CANDADO) ---
  if (!autorizado) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full border border-pink-100">
          <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">🔒 Acceso Privado</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña de Administrador</label>
              <input 
                type="password" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-black"
                placeholder="Ingresa tu clave"
                value={inputClave}
                onChange={(e) => setInputClave(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700 transition">
              Entrar
            </button>
          </form>
          <a href="/" className="block text-center text-sm text-gray-500 mt-4 hover:underline">← Volver al inicio</a>
        </div>
      </div>
    );
  }

  // --- VISTA 2: SI ESTÁ AUTORIZADO (EL DASHBOARD) ---
  return (
    <div className="min-h-screen bg-neutral-50 p-8 font-sans text-neutral-800">
      <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-pink-600">Panel de Administración 💇‍♀️</h1>
        <button onClick={() => setAutorizado(false)} className="text-sm text-gray-500 hover:text-red-500 underline">Cerrar Sesión</button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Cargando...</p>
      ) : (
        <div className="max-w-4xl mx-auto grid gap-4">
          {citas.length === 0 ? (
            <p className="text-center text-gray-500 bg-white p-8 rounded-xl shadow-sm">No hay citas pendientes hoy. ✨</p>
          ) : (
            citas.map((cita) => (
              <div key={cita.id} className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="font-bold text-xl">{cita.cliente_nombre}</h3>
                  <p className="text-pink-500 font-medium">{cita.servicio}</p>
                  <div className="text-sm text-neutral-500 mt-1">
                    <p>📅 {new Date(cita.fecha_cita).toLocaleDateString()} - 🕒 {new Date(cita.fecha_cita).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p>📞 {cita.cliente_telefono}</p>
                  </div>
                </div>
                <button onClick={() => cancelarCita(cita.id)} className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition text-sm">
                  Cancelar
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}