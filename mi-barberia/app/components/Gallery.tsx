export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Resultados</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            Inspírate con algunos de nuestros trabajos recientes en el salón.
          </p>
        </div>

        {/* GRILLA DE FOTOS (MOSAICO) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* FOTO 1 - Grande Vertical */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer h-96 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80" 
              alt="Corte mujer" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">Cambio de Look</span>
            </div>
          </div>

          {/* FOTO 2 */}
          <div className="relative overflow-hidden rounded-2xl group cursor-pointer h-48 md:h-64">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80" 
              alt="Peinado" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* FOTO 3 */}
          <div className="relative overflow-hidden rounded-2xl group cursor-pointer h-48 md:h-64">
            <img 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80" 
              alt="Maquillaje" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* FOTO 4 */}
          <div className="relative overflow-hidden rounded-2xl group cursor-pointer h-48 md:h-64">
            <img 
              src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80" 
              alt="Manicure" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* FOTO 5 */}
          <div className="relative overflow-hidden rounded-2xl group cursor-pointer h-48 md:h-64">
            <img 
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80" 
              alt="Productos" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

        </div>

        {/* BOTÓN VER MÁS */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Ver Galería Completa en Instagram
          </button>
        </div>

      </div>
    </section>
  );
}