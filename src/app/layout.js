import './globals.css';
import Navbar from '@/components/Navbar';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer'; // Import the new footer

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_BRAND_NAME} - Medical College Admissions`,
  description: 'Find top medical colleges and get admission guidance.',
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* Add Footer here */}
        <FloatingContact />
      </body>
    </html>
  );
}