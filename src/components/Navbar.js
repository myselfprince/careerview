import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp, FaYoutube, FaHeadset, FaInstagram, FaRegHandPointRight } from 'react-icons/fa';

// Centralized navigation array
const navLinks = [
  { name: 'Home', href: '/' },
  // { name: 'Medical', href: '#dropdown-menu', isDropdown: true },
  { name: 'MBBS in India', href: '#mbbs-india' },
  { name: 'MBBS in Abroad', href: '#mbbs-abroad' },
  { name: 'BSC Nursing', href: '#bsc-nursing' },
  // { name: 'Contact Us', href: '#contactus' }
];

// Dropdown Data exactly as shown in the reference image
const medicalDropdown = {
  courses: ['MBBS', 'BDS', 'BUMS', 'BAMS', 'BHMS', 'B.SC(Nursing)'],
  states: [
    'Bihar', 'Uttar Pradesh', 'Karnataka', 'West Bengal', 'Kerala', 
    'Andhra Pradesh', 'Madhya Pradesh', 'Bangalore', 'Haryana', 
    'Delhi', 'Maharashtra', 'Odisha', 'Punjab', 'Tamil Nadu'
  ],
  countries: [
    'Ukraine', 'Philippines', 'Georgia', 'China', 
    'Bangladesh', 'Nepal', 'Kyrgyzstan', 'Russia'
  ]
};

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm w-full z-50 relative">
      {/* Top Bar - Contact & Info */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center border-b gap-4">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 mb-2 md:mb-0">
          <div className="text-3xl font-extrabold text-blue-900 flex items-center">
            <span className="text-red-600 mr-1">+</span>{process.env.NEXT_PUBLIC_BRAND_NAME || 'Careermedi'}
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
              <span className="text-blue-900 font-bold">{process.env.NEXT_PUBLIC_PHONE || '+91 62645-53973'}</span>
            </div>
          </a>

          <a href="https://wa.me/918319694985" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <FaWhatsapp className="text-green-600 text-2xl group-hover:scale-110 transition-transform" />
            <div className="leading-tight">
              <span className="text-gray-500 text-xs">Whatsapp Us</span><br/>
              <span className="text-green-700 font-bold">{process.env.NEXT_PUBLIC_PHONE2 || '+91 62645-53973'}</span>
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
      <div className="max-w-7xl mx-auto px-4 relative">
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 py-3 text-gray-800 text-sm font-semibold">
          {navLinks.map((link, index) => (
            <li key={index} className={link.isDropdown ? "group relative static md:static" : ""}>
              
              {link.isDropdown ? (
                // Medical Link with Dropdown Trigger
                <div className="cursor-pointer hover:text-red-600 transition flex items-center gap-1 py-2">
                  {link.name} <span className="text-xs">▾</span>
                </div>
              ) : (
                // Standard Links
                <Link href={link.href} className="hover:text-red-600 transition py-2 block">
                  {link.name}
                </Link>
              )}

              {/* Mega Menu for Medical (Shown on hover) */}
              {link.isDropdown && (
                <div className="absolute left-0 top-full mt-0 hidden group-hover:block w-full md:w-[900px] bg-white shadow-2xl border border-gray-200 z-50 transition-all duration-300">
                  
                  {/* Table Header Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 bg-[#7b1113] text-white uppercase text-sm font-bold tracking-wide">
                    <div className="px-4 py-3 border-b md:border-b-0 md:border-r border-[#962224]">Popular Courses</div>
                    <div className="px-4 py-3 border-b md:border-b-0 md:border-r border-[#962224]">Popular State</div>
                    <div className="px-4 py-3">Admission In Top Country</div>
                  </div>

                  {/* Table Content Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    
                    {/* Courses Column */}
                    <div className="flex flex-col bg-white">
                      {medicalDropdown.courses.map((course, i) => (
                        <Link key={i} href="#" className="flex items-center gap-2 px-4 py-2 text-[#0056b3] border-b border-gray-100 hover:bg-gray-50 hover:text-red-600 transition font-medium">
                          <FaRegHandPointRight className="text-sm" /> {course}
                        </Link>
                      ))}
                    </div>

                    {/* States Column */}
                    <div className="flex flex-col bg-white">
                      {medicalDropdown.states.map((state, i) => (
                        <Link key={i} href="#" className="flex items-center gap-2 px-4 py-2 text-[#0056b3] border-b border-gray-100 hover:bg-gray-50 hover:text-red-600 transition font-medium">
                          <FaRegHandPointRight className="text-sm" /> {state}
                        </Link>
                      ))}
                    </div>

                    {/* Countries Column */}
                    <div className="flex flex-col bg-white h-full">
                      {medicalDropdown.countries.map((country, i) => (
                        <Link key={i} href="#" className="flex items-center gap-2 px-4 py-2 text-[#0056b3] border-b border-gray-100 hover:bg-gray-50 hover:text-red-600 transition font-medium">
                          <FaRegHandPointRight className="text-sm" /> {country}
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}