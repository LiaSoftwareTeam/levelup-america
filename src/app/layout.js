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
  title: "Vivelup America - Business and Personal Coaching",
  description:
    "Boost your life and your business with coaching from Vivelup America. We offer personalized services for personal development, leadership, and business growth.",
  keywords:
    "business coaching, personal coaching, professional development, business coaching, personal growth, leadership, life coaching, skills development, business transformation, executive coaching",
  author: "Vivelup America",
  robots: "index, follow",
  og: {
    title: "Vivelup America - Business and Personal Coaching",
    description:
      "Transform your life and business with our coaching programs designed to achieve personal and professional success.",
    url: "https://www.levelupamerica.com",
    image: "https://www.levelupamerica.com/images/og-image.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivelup America - Business and Personal Coaching",
    description:
      "Take your life and business to the next level with personalized coaching.",
    image: "https://www.levelupamerica.com/images/twitter-card.jpg",
  },
};

// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta información */}
        <title>Vivelup America - Business and Personal Coaching</title>
        <meta
          name="description"
          content="Boost your life and business with coaching from Vivelup America."
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
