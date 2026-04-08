import './globals.css';
import Navbar from '@/components/Navbar';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer'; // Import the new footer

export const metadata = {
  title: 'Careerview - Medical College Admissions',
  description: 'Find top medical colleges and get admission guidance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* Add Footer here */}
        <FloatingContact />
      </body>
    </html>
  );
}