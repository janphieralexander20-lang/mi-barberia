import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery"; // <--- 1. IMPORTAMOS LA GALERÍA

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      
      {/* 1. Portada */}
      <Hero />

      {/* 2. Servicios */}
      <Services />

      {/* 3. Galería de Fotos (NUEVO) */}
      <Gallery />

    </main>
  );
}