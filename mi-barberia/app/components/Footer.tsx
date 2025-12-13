import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* 1. INFORMACIÓN DE LA MARCA */}
          <div>
            <h3 className="text-2xl font-bold text-pink-500 mb-4">Xiomara Maricela</h3>
            <p className="text-gray-400">
              Tu destino de belleza en Santiago. Realzamos tu estilo con los mejores profesionales.
            </p>
          </div>

          {/* 2. UBICACIÓN */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ubicación</h3>
            <p className="text-gray-400 mb-2">
              📍 Av. Manuel Rodríguez Sur 881
            </p>
            <p className="text-gray-400">
              Santiago, Chile
            </p>
            <p className="text-pink-500 mt-2 font-semibold">
              Metro Santa Ana {/* <--- ¡AQUÍ ESTÁ EL CAMBIO! */}
            </p>
          </div>

          {/* 3. HORARIOS */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Horarios</h3>
            <p className="text-gray-400">Lunes a Sábado</p>
            <p className="text-white font-semibold">10:00 AM - 8:00 PM</p>
            <p className="text-gray-400 mt-2">Domingos</p>
            <p className="text-white font-semibold">Cerrado</p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Xiomara Maricela Salon & Spa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}