import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <div className="text-3xl font-extrabold text-blue-900 flex items-center mb-4">
            <span className="text-red-600 mr-1">+</span>Careerview
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Careerview, helping students since 2008, specializes in MBBS, MD, and other medical course admissions in India and abroad. Count on us for hassle-free admissions to the best medical colleges.
          </p>
          <Link href="#" className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
            Contact With Us ➔
          </Link>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4">MBBS in Abroad</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><Link href="#" className="hover:text-blue-600">MBBS in Russia</Link></li>
            <li><Link href="#" className="hover:text-blue-600">MBBS in Italy</Link></li>
            <li><Link href="#" className="hover:text-blue-600">MBBS in Kazakhstan</Link></li>
            <li><Link href="#" className="hover:text-blue-600">MBBS in Georgia</Link></li>
            <li><Link href="#" className="hover:text-blue-600">MBBS in Nepal</Link></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4">MBBS in India</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><Link href="#" className="hover:text-blue-600">MBBS in Punjab</Link></li>
            <li><Link href="#" className="hover:text-blue-600">MBBS in Haryana</Link></li>
            <li><Link href="#" className="hover:text-blue-600">MBBS in Uttar Pradesh</Link></li>
            <li><Link href="#" className="hover:text-blue-600">MBBS in Karnataka</Link></li>
            <li><Link href="#" className="hover:text-blue-600">MBBS in Rajasthan</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Get Contact</h4>
          <p className="text-sm text-gray-600 mb-2">Phone: 62645-53973, 83196-94985</p>
          <p className="text-sm text-gray-600 mb-4">E-mail: info@careerview.com</p>
          
          <div className="bg-gray-100 p-4 rounded-lg inline-block cursor-pointer hover:bg-gray-200 transition">
             <p className="font-bold text-red-600 text-sm mb-1 flex items-center gap-1">Subscribe us on YouTube</p>
             <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">Subscribe</span>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t text-center md:text-left text-sm text-gray-500 flex flex-col md:flex-row justify-between">
        <p>© 2026 Careerview. All Rights Reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link href="#">Refund Policy</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}