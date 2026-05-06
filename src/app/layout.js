import './globals.css';
import Navbar from '@/components/Navbar';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';

// If you are using plain JS, you can ignore the Metadata import. 
// If your editor complains about TypeScript, use: import type { Metadata } from 'next';

export const metadata = {
  // Required by Google to ensure absolute URLs for its crawler
  metadataBase: new URL('https://www.careermedi.com'), 
  
  title: `${process.env.NEXT_PUBLIC_BRAND_NAME} - Medical College Admissions`,
  description: 'Find top medical colleges and get admission guidance.',
  
  // Resolves the "No touch web app title declared" warning
  appleWebApp: {
    title: 'Careermedi',
    statusBarStyle: 'default',
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }, // Added to satisfy standard favicon checkers
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" }, // Crucial for Google Search
    ],
    // Fixed: Changed from array ["/favicon.ico"] to a single string
    shortcut: "/favicon.ico", 
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}