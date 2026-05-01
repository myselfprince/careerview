'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaFileAlt, FaUniversity, FaStethoscope, FaGlobeAmericas, FaClipboardList, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import PopupForm from '@/components/PopupForm'; 

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const scrollContainerRef = useRef(null);

  // 1. Popup Timer
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Hero Background Auto-Scroll (Every 1 Second)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // If reached the end, scroll back to start, else scroll one image width
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // Scrolls every 1 second
    return () => clearInterval(interval);
  }, []);

  // Categorized Links with Image Paths added
  const indiaLinks = [
    { title: "Top MBBS Colleges in India Rank Wise", href: "/collections/india/top-mbbs-india-rank-wise", image: "/top-colleges/india/india.jpeg" },
    { title: "Top MBBS Private Colleges in India", href: "/collections/india/top-private-mbbs-india", image: "/top-colleges/india/private.jpeg" },
    { title: "Top MBBS Government Colleges", href: "/collections/india/top-mbbs-government-colleges", image: "/top-colleges/india/govt.jpeg" },
    { title: "Top BDS Colleges in India", href: "/collections/india/top-bds-colleges-in-india", image: "/top-colleges/india/india.jpeg" },
    { title: "Top MBBS Colleges in Uttar Pradesh", href: "/collections/india/top-mbbs-colleges-in-uttar-pradesh", image: "/top-colleges/india/up.jpeg" },
    { title: "Top MBBS Colleges in Mumbai", href: "/collections/india/top-mbbs-colleges-in-mumbai", image: "/top-colleges/india/mumbai.jpeg" },
  ];

  const abroadLinks = [
    { title: "Top MBBS Colleges in Russia", href: "/collections/abroad/top-mbbs-colleges-in-russia", image: "/top-colleges/abroad/russia.jpeg" },
    { title: "Top MBBS Colleges in Germany", href: "/collections/abroad/top-mbbs-colleges-in-germany", image: "/top-colleges/abroad/germany.jpeg" },
    { title: "Top MBBS Colleges in Nepal", href: "/collections/abroad/top-mbbs-colleges-in-nepal", image: "/top-colleges/abroad/nepal.jpeg" },
    { title: "Top MBBS Colleges in Uzbekistan", href: "/collections/abroad/top-mbbs-colleges-in-uzbekistan", image: "/top-colleges/abroad/uzbekistan.jpeg" }
  ];

  const nursingLinks = [
    { title: "Nursing Colleges in Uttar Pradesh", href: "/collections/bsc-nursing/up", image: "/top-colleges/bds-nursing/up.jpeg" },
    { title: "Nursing Colleges in Madhya Pradesh", href: "/collections/bsc-nursing/mp", image: "/top-colleges/bds-nursing/mp.jpeg" },
    { title: "BSC Nursing Colleges in Bihar", href: "/collections/bsc-nursing/bihar", image: "/top-colleges/bds-nursing/nursing.jpeg" },
  ];

  // Images for the scrolling background
  const bgImages = ['/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg', '/5.jpeg', '/6.jpeg', '/7.jpeg', '/8.jpeg'];

  return (
    <div className="w-full">
      {/* 1. Hero Section with Scrolling Background */}
      <section 
        id="home"
        className="relative text-white overflow-hidden min-h-[500px] flex items-center"
      >
        {/* Scrollable Image Container (Positioned absolutely behind everything) */}
        <div 
          ref={scrollContainerRef}
          className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory no-scrollbar z-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bgImages.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt={`Background ${i + 1}`} 
              className="w-full h-full object-cover flex-shrink-0 snap-center"
            />
          ))}
        </div>

        {/* Dark overlay (pointer-events-none so user can scroll images underneath) */}
        <div className="absolute inset-0 bg-black/30 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/60 sm:to-black/30 z-0 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10 w-full pointer-events-auto">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              STUDY <br/><span className="text-white">MBBS</span>
            </h2>
            <div className="bg-blue-800/90 backdrop-blur-sm p-4 rounded-lg inline-block mb-8 border border-blue-700 shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400">NEET UG COUNSELING {process.env.NEXT_PUBLIC_YEAR}</h3>
              <p className="text-lg">100% Guaranteed admission<br/>At NEET any qualified Score</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-yellow-400 text-2xl mt-1 drop-shadow-md" />
                <p className="font-semibold drop-shadow-md">No Donation/ <br/><span className="font-normal text-sm">No Hidden charges</span></p>
              </div>
              <div className="flex items-start gap-3">
                <FaClipboardList className="text-yellow-400 text-2xl mt-1 drop-shadow-md" />
                <p className="font-semibold drop-shadow-md">State wise <br/><span className="font-normal text-sm">counseling updates</span></p>
              </div>
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-yellow-400 text-2xl mt-1 drop-shadow-md" />
                <p className="font-semibold drop-shadow-md">Reporting & Documentation <br/><span className="font-normal text-sm">support</span></p>
              </div>
              <div className="flex items-start gap-3">
                <FaUniversity className="text-yellow-400 text-2xl mt-1 drop-shadow-md" />
                <p className="font-semibold drop-shadow-md">Negotiated/ <br/><span className="font-normal text-sm">Low fees Colleges</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-6 text-center divide-x divide-gray-200">
          <div><h4 className="text-3xl font-bold text-gray-800">5+</h4><p className="text-xs text-gray-500 font-bold uppercase mt-1">Offices</p></div>
          <div><h4 className="text-3xl font-bold text-gray-800">100+</h4><p className="text-xs text-gray-500 font-bold uppercase mt-1">Universities</p></div>
          <div><h4 className="text-3xl font-bold text-gray-800">300+</h4><p className="text-xs text-gray-500 font-bold uppercase mt-1">Scholarships</p></div>
          <div><h4 className="text-3xl font-bold text-gray-800">600+</h4><p className="text-xs text-gray-500 font-bold uppercase mt-1">Colleges Tie Up</p></div>
          <div><h4 className="text-3xl font-bold text-gray-800">1,500+</h4><p className="text-xs text-gray-500 font-bold uppercase mt-1">YouTube Videos</p></div>
          <div><h4 className="text-3xl font-bold text-gray-800">150,000+</h4><p className="text-xs text-gray-500 font-bold uppercase mt-1">Students Counselled</p></div>
        </div>
      </section>

      {/* 3. Categorized Collections */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-16">

          {/* MBBS IN INDIA */}
          <section id="mbbs-india" className="scroll-mt-20">
            <div className="mb-6 border-b pb-2">
              <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">India</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">Top MBBS Colleges in India</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {indiaLinks.map((item, i) => (
                <Link key={i} href={item.href} className="block">
                  <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer h-32 bg-gray-700 hover:-translate-y-1 transition transform duration-300">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover z-0" />
                    <div className="absolute inset-0 bg-black/80 bg-opacity-20 group-hover:bg-opacity-40 transition duration-300 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-20">
                      <h3 className="text-white font-bold text-sm leading-tight drop-shadow-md">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* MBBS IN ABROAD */}
          <section id="mbbs-abroad" className="scroll-mt-20">
            <div className="mb-6 border-b pb-2">
              <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Abroad</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">Top MBBS Colleges in Abroad</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {abroadLinks.map((item, i) => (
                <Link key={i} href={item.href} className="block">
                  <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer h-32 bg-gray-800 hover:-translate-y-1 transition transform duration-300">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover z-0" />
                    <div className="absolute inset-0 bg-black/80 bg-opacity-50 group-hover:bg-opacity-40 transition duration-300 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-20">
                      <h3 className="text-white font-bold text-sm leading-tight drop-shadow-md">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* BSC NURSING */}
          <section id="bsc-nursing" className="scroll-mt-20">
            <div className="mb-6 border-b pb-2">
              <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Nursing</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">Top BSc Nursing Colleges</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nursingLinks.map((item, i) => (
                <Link key={i} href={item.href} className="block">
                  <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer h-32 bg-gray-800 hover:-translate-y-1 transition transform duration-300">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover z-0" />
                    <div className="absolute inset-0 bg-black/80 bg-opacity-50 group-hover:bg-opacity-40 transition duration-300 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-20">
                      <h3 className="text-white font-bold text-sm leading-tight drop-shadow-md">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* 4. Consultation Banner */}
      <section className="py-8 bg-white" id="contactus">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-xl text-white">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">Want to get a free consultation?</h3>
              <p className="text-blue-100">Talk to our experts and get admission in top world-ranking medical universities.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-center md:text-left">
                <p className="flex items-center gap-2 text-xl font-bold"><FaPhoneAlt/> {process.env.NEXT_PUBLIC_PHONE}</p>
                <p className="flex items-center gap-2 text-xl font-bold"><FaWhatsapp/> +91-83196-94985</p>
              </div>
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                Talk to our Counsellor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MBBS Abroad Destinations */}
      <section className="py-16 bg-gray-50 text-center border-t">
        <div className="max-w-7xl mx-auto px-4">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Consult Now</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-4 mb-2">MBBS in Abroad Destinations</h2>
          <p className="text-gray-600 mb-12">Get admission in world-ranking top medical universities approved by NMC, WHO at lowest fees.</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { country: "Russia", count: "35+" },
              { country: "Kazakhstan", count: "8+" },
              { country: "Georgia", count: "20+" },
              { country: "Uzbekistan", count: "6+" },
              { country: "Nepal", count: "18+" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-200 shadow-md overflow-hidden flex items-center justify-center group-hover:border-blue-400 group-hover:scale-105 transition">
                  <FaGlobeAmericas className="text-5xl text-blue-400" />
                </div>
                <h4 className="mt-4 font-bold text-gray-800 text-lg">{item.country}</h4>
                <p className="text-sm text-gray-500">{item.count} Universities</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Reliable Services */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">{process.env.NEXT_PUBLIC_BRAND_NAME} Reliable Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <FaGlobeAmericas className="text-5xl text-blue-600 mb-4" />
              <p className="font-semibold text-gray-700">Best Country Selection</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUniversity className="text-5xl text-blue-600 mb-4" />
              <p className="font-semibold text-gray-700">Top College Selection</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-5xl text-blue-600 mb-4" />
              <p className="font-semibold text-gray-700">100% Admission Support</p>
            </div>
            <div className="flex flex-col items-center">
              <FaStethoscope className="text-5xl text-blue-600 mb-4" />
              <p className="font-semibold text-gray-700">Personal Mentorship</p>
            </div>
            <div className="flex flex-col items-center">
              <FaClipboardList className="text-5xl text-blue-600 mb-4" />
              <p className="font-semibold text-gray-700">NEET Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Form Modal */}
      {showPopup && (
        <PopupForm onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}