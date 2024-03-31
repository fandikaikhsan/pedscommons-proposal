"use client"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "regenerator-runtime/runtime"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Pedscommon Component Proposal",
//   description:
//     "This page puposes to show several component for Google Open Source Program",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
