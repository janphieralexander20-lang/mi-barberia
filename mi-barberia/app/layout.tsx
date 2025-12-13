import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; // <--- 1. IMPORTAMOS EL FOOTER
import "./globals.css";

// 1. Tarjeta para WhatsApp
export const metadata: Metadata = {
  title: "Xiomara Maricela | Salon & Spa",
  description: "Realza tu belleza natural. Cortes, peinados, maquillaje y spa en Santiago.",
  openGraph: {
    title: "Xiomara Maricela | Salon & Spa",
    description: "Realza tu belleza natural. Cortes, peinados, maquillaje y spa en Santiago.",
    url: "https://barberia-final-v1.vercel.app",
    siteName: "Xiomara Maricela Spa",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

// 2. Color Rosa
export const viewport: Viewport = {
  themeColor: "#ec4899",
};

// 3. Estructura Principal
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        {/* BARRA DE NAVEGACIÓN */}
        <Navbar />
        
        {/* CONTENIDO PRINCIPAL */}
        <div className="pt-16 min-h-screen">
          {children}
        </div>

        {/* PIE DE PÁGINA (AQUÍ VA LA DIRECCIÓN) */}
        <Footer />
      </body>
    </html>
  );
}