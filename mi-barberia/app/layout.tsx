import type { Metadata } from "next";
import "./globals.css";

// --- CONFIGURACIÓN DE LA TARJETA DE PRESENTACIÓN ---
export const metadata: Metadata = {
  title: "Xiomara Maricela | Salon & Spa",
  description: "Realza tu belleza natural. Cortes, peinados, maquillaje y spa en Monsefú. ¡Reserva tu cita online!",
  
  // Esto es lo que lee WhatsApp y Facebook
  openGraph: {
    title: "Xiomara Maricela | Salon & Spa",
    description: "Realza tu belleza natural. Cortes, peinados, maquillaje y spa en Monsefú.",
    url: "https://barberia-final-v1.vercel.app", // Tu link real
    siteName: "Xiomara Maricela Spa",
    images: [
      {
        url: "/opengraph-image.jpeg", // Asegúrate de que tu foto en 'public' se llame así
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Color de la barra del navegador en celulares (Rosa) */}
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}