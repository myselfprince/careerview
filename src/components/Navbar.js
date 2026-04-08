import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp, FaYoutube, FaHeadset } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm w-full z-40 relative">
      {/* Top Bar - Contact & Info */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center border-b">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="text-3xl font-extrabold text-blue-900 flex items-center">
            <span className="text-red-600 mr-1">+</span>Careerview
          </div>
          <span className="text-xs text-gray-500 font-semibold uppercase tracking-widest mt-1">Education Pvt. Ltd.</span>
        </Link>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 items-center text-sm">
          <div className="flex items-center gap-2 text-gray-700 bg-red-50 p-2 rounded-full px-4">
            <FaHeadset className="text-red-500 text-xl" />
            <div className="font-semibold leading-tight">
              NEET UG <br/> <span className="text-xs font-normal">Personalised Counseling</span>
            </div>
          </div>
          
          <a href="tel:6264553973" className="flex items-center gap-2 group">
            <FaPhoneAlt className="text-blue-600 text-xl group-hover:animate-pulse" />
            <div className="leading-tight">
              <span className="text-gray-500 text-xs">Call us Now</span><br/>
              <span className="text-blue-900 font-bold">+91 62645-53973</span>
            </div>
          </a>

          <a href="https://wa.me/918319694985" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <FaWhatsapp className="text-green-600 text-2xl group-hover:scale-110 transition-transform" />
            <div className="leading-tight">
              <span className="text-gray-500 text-xs">Whatsapp Us</span><br/>
              <span className="text-green-700 font-bold">+91 83196-94985</span>
            </div>
          </a>

          <a href="#" className="flex items-center gap-2 bg-red-50 text-red-600 font-bold py-2 px-4 rounded-full border border-red-200 hover:bg-red-100 transition">
            <FaYoutube className="text-xl" /> Watch YouTube
          </a>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 py-3 text-gray-800 text-sm font-semibold">
          <li><Link href="/" className="hover:text-red-600 transition">Home</Link></li>
          <li><Link href="#" className="hover:text-red-600 transition">Fees Structure</Link></li>
          <li><Link href="#" className="hover:text-red-600 transition">NEET UG</Link></li>
          <li><Link href="#" className="hover:text-red-600 transition">MBBS India ▾</Link></li>
          <li><Link href="#" className="hover:text-red-600 transition">MBBS Abroad ▾</Link></li>
          <li><Link href="#" className="hover:text-red-600 transition">NRI Quota</Link></li>
          <li><Link href="#" className="hover:text-red-600 transition">Others ▾</Link></li>
          <li><Link href="#" className="hover:text-red-600 transition">Contact Us</Link></li>
          <li><Link href="#" className="hover:text-red-600 transition">About Us</Link></li>
        </ul>
      </div>
    </header>
  );
}