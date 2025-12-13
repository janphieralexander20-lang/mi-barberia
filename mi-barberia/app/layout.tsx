import type { Metadata } from "next";
import { ReactNode } from "react"; // <--- ¡ESTA LÍNEA ES LA CLAVE!
import "./globals.css";

// 1. Configuración de la Tarjeta para WhatsApp
export const metadata: Metadata = {
  title: "Xiomara Maricela | Salon & Spa",
  description: "Realza tu belleza natural. Cortes, peinados, maquillaje y spa en Santiagp.",
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

// 2. Configuración del color rosa
export const viewport = {
  themeColor: "#ec4899",
};

// 3. Estructura de la página
export default function RootLayout({
  children,
}: {
  children: ReactNode; // <--- Usamos esto directamente
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}