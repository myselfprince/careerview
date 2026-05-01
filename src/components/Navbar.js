import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp, FaYoutube, FaHeadset, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm w-full z-40 relative">
      {/* Top Bar - Contact & Info */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center border-b gap-4">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 mb-2 md:mb-0">
          <div className="text-3xl font-extrabold text-blue-900 flex items-center">
            <span className="text-red-600 mr-1">+</span>{process.env.NEXT_PUBLIC_BRAND_NAME}
          </div>
          <span className="text-xs text-gray-500 font-semibold uppercase tracking-widest mt-1">Education Pvt. Ltd.</span>
        </Link>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 lg:gap-6 items-center text-sm">
          <div className="flex items-center gap-2 text-gray-700 bg-red-50 p-2 rounded-full px-4">
            <FaHeadset className="text-red-500 text-xl" />
            <div className="font-semibold leading-tight">
              NEET UG <br/> <span className="text-xs font-normal">Personalised Counseling</span>
            </div>
          </div>
          
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="flex items-center gap-2 group">
            <FaPhoneAlt className="text-blue-600 text-xl group-hover:animate-pulse" />
            <div className="leading-tight">
              <span className="text-gray-500 text-xs">Call us Now</span><br/>
              <span className="text-blue-900 font-bold">{process.env.NEXT_PUBLIC_PHONE}</span>
            </div>
          </a>

          <a href="https://wa.me/918319694985" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <FaWhatsapp className="text-green-600 text-2xl group-hover:scale-110 transition-transform" />
            <div className="leading-tight">
              <span className="text-gray-500 text-xs">Whatsapp Us</span><br/>
              <span className="text-green-700 font-bold">{process.env.NEXT_PUBLIC_PHONE2}</span>
            </div>
          </a>

          {/* Social Media Buttons Group */}
          <div className="flex items-center gap-3">
            <a href={process.env.NEXT_PUBLIC_YT} className="flex items-center gap-2 bg-red-50 text-red-600 font-bold py-2 px-4 rounded-full border border-red-200 hover:bg-red-100 transition" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-xl" /> <span className="hidden sm:inline">YouTube</span>
            </a>

            <a href={process.env.NEXT_PUBLIC_IG} className="flex items-center gap-2 bg-pink-50 text-pink-600 font-bold py-2 px-4 rounded-full border border-pink-200 hover:bg-pink-100 transition" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl" /> <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
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