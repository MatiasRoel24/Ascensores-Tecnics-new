import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ascensores Tecnic's SRL | Mantenimiento y Reparación de Ascensores en CABA",
  description:
    "Servicio técnico profesional de ascensores y bombas de agua en CABA. Atención 24/7, técnicos matriculados. Permiso de Conservador GCBA N° 152.",
  keywords:
    "ascensores, mantenimiento ascensores, reparación ascensores, CABA, Buenos Aires, servicio técnico, bombas de agua, modernización ascensores",
  openGraph: {
    title: "Ascensores Tecnic's SRL | Servicio Técnico de Ascensores",
    description: "Atención clara, rápida y profesional. Guardia 24/7 para emergencias.",
    type: "website",
    locale: "es_AR",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
