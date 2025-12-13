import type { Metadata } from "next";
import React from "react"; 
import "./globals.css";

// Configuración de la Tarjeta y el Color (Todo junto, al estilo clásico)
export const metadata: Metadata = {
  title: "Xiomara Maricela | Salon & Spa",
  description: "Realza tu belleza natural. Cortes, peinados, maquillaje y spa en Monsefú.",
  // --- AQUÍ PONEMOS EL COLOR AHORA ---
  themeColor: "#ec4899",
  // -----------------------------------
  openGraph: {
    title: "Xiomara Maricela | Salon & Spa",
    description: "Realza tu belleza natural. Cortes, peinados, maquillaje y spa en Monsefú.",
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

// ¡YA NO PONEMOS "export const viewport" AQUÍ PORQUE TU VERSIÓN NO LO AGUANTA!

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}