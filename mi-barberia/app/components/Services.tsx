export default function Services() {
  const servicios = [
    {
      titulo: "Corte & Styling",
      precio: "Desde $ 15.000",
      descripcion: "Asesoría de imagen y corte personalizado según tu rostro.",
      // Foto de Corte (Funcionando)
      img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60"
    },
    {
      titulo: "Color & Mechas",
      precio: "Desde $ 45.000",
      descripcion: "Balayage, Babylights y tintes completos con productos premium.",
      // Foto de Color (Funcionando)
      img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&auto=format&fit=crop&q=60"
    },
    {
      titulo: "Maquillaje Pro",
      precio: "Desde $ 35.000",
      descripcion: "Para novias, eventos sociales y sesiones de fotos.",
      // --- FOTO NUEVA DE OTRA FUENTE (PEXELS) ---
      img: "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      titulo: "Tratamientos",
      precio: "Desde $ 25.000",
      descripcion: "Botox capilar, hidratación profunda y reparación total.",
      // Foto de Tratamientos (Funcionando)
      img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Descubre la experiencia de renovar tu imagen con nuestras expertas en Santiago.
          </p>
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              
              <div className="h-48 overflow-hidden relative bg-gray-200">
                <img 
                  src={servicio.img} 
                  alt={servicio.titulo} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  // Esto ayuda a que cargue mejor
                  loading="lazy"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{servicio.titulo}</h3>
                <p className="text-gray-500 text-sm mb-4">{servicio.descripcion}</p>
                <div className="text-pink-600 font-bold text-lg">{servicio.precio}</div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}