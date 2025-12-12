import type { Metadata, Viewport } from "next";
import "./globals.css";

// 1. Configuración de la Tarjeta para WhatsApp
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

// 2. Configuración del color rosa (ESTA ES LA FORMA CORRECTA)
export const viewport: Viewport = {
  themeColor: "#ec4899",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* ¡Fíjate que aquí ya NO hay <head>! */}
      <body>
        {children}
      </body>
    </html>
  );
}