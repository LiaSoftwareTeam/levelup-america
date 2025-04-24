import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Level Up America - Coaching Empresarial y Personal",
  description:
    "Impulsa tu vida y tu empresa con el coaching de Level Up America. Ofrecemos servicios personalizados para el desarrollo personal, liderazgo, y crecimiento empresarial.",
  keywords:
    "coaching empresarial, coaching personal, desarrollo profesional, coaching para empresas, crecimiento personal, liderazgo, coaching de vida, desarrollo de habilidades, transformación empresarial, coaching ejecutivo",
  author: "Level Up America",
  robots: "index, follow",
  og: {
    title: "Level Up America - Coaching Empresarial y Personal",
    description:
      "Transforma tu vida y negocio con nuestros programas de coaching diseñados para alcanzar el éxito personal y profesional.",
    url: "https://www.levelupamerica.com",
    image: "https://www.levelupamerica.com/images/og-image.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Level Up America - Coaching Empresarial y Personal",
    description:
      "Lleva tu vida y empresa al siguiente nivel con coaching personalizado.",
    image: "https://www.levelupamerica.com/images/twitter-card.jpg",
  },
};

// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta información */}
        <title>Level Up America - Coaching Empresarial y Personal</title>
        <meta
          name="description"
          content="Impulsa tu vida y tu empresa con el coaching de Level Up America."
        />
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* Ionicons Web Component */}
      
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
