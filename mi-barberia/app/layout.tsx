import type { Metadata } from "next";
import "./globals.css"; // <--- ESTA LÍNEA ES EL ENCHUFE CLAVE

export const metadata: Metadata = {
  title: "Xiomara Maricela Salon & Spa",
  description: "Salon de belleza y spa profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}