import type { Metadata } from "next";
import { ReactNode } from "react"; // Importamos solo lo necesario
import "./globals.css";

// 1. Tarjeta para WhatsApp
export const metadata: Metadata = {
  title: "Xiomara Maricela | Salon & Spa",
  description: "Realza tu belleza natural. Cortes, peinados, maquillaje y spa en Monsefú.",
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

// 2. Color Rosa
export const viewport = {
  themeColor: "#ec4899",
};

// 3. Estructura Principal
export default function RootLayout({
  children,
}: {
  children: ReactNode; // <--- OJO: Aquí NO lleva "React.", solo "ReactNode"
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}