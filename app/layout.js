import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Benchy Dutreuil - Portfolio',
  description: 'Full-stack developer portfolio showcasing projects and skills',
  keywords: ['developer', 'portfolio', 'full-stack', 'React', 'Next.js'],
  authors: [{ name: 'Benchy Dutreuil' }],
  creator: 'Benchy Dutreuil',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  openGraph: {
    title: 'Benchy Dutreuil - Portfolio',
    description: 'Full-stack developer portfolio showcasing projects and skills',
    url: 'https://yoursite.com',
    siteName: 'Benchy Dutreuil Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benchy Dutreuil - Portfolio',
    description: 'Full-stack developer portfolio showcasing projects and skills',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
