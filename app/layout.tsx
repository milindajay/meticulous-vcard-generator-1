import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat } from 'next/font/google' // Import Montserrat
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Define the fonts, including Montserrat
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat', // Define a CSS variable for the font
});

export const metadata: Metadata = {
  // ... existing metadata ...
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Apply the Montserrat font class */}
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}