import type React from "react"
import "./globals.css"
import { Inter, Cairo } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" })

export const metadata = {
  title: "Case Studies App",
  description: "A collection of organizational improvement case studies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'