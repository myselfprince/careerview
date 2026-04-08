'use client';
import { useState, useEffect } from 'react';
import { FaCheckCircle, FaFileAlt, FaUniversity, FaStethoscope, FaGlobeAmericas, FaClipboardList, FaPhoneAlt, FaWhatsapp} from 'react-icons/fa';

// 1. Import your new Popup component (Adjust the path if your folder structure is different)
import PopupForm from '@/components/PopupForm'; 

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup shortly after loading
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="bg-blue-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              STUDY <br/><span className="text-white">MBBS</span>
            </h2>
            <div className="bg-blue-800 p-4 rounded-lg inline-block mb-8 border border-blue-700">
              <h3 className="text-2xl font-bold text-yellow-400">NEET UG COUNSELING 2026</h3>
              <p className="text-lg">100% Guaranteed admission<br/>At NEET any qualified Score</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-yellow-400 text-2xl mt-1" />
                <p className="font-semibold">No Donation/ <br/><span className="font-normal text-sm">No Hidden charges</span></p>
              </div>
              <div className="flex items-start gap-3">
                <FaClipboardList className="text-yellow-400 text-2xl mt-1" />
                <p className="font-semibold">State wise <br/><span className="font-normal text-sm">counseling updates</span></p>
              </div>
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-yellow-400 text-2xl mt-1" />
                <p className="font-semibold">Reporting & Documentation <br/><span className="font-normal text-sm">support</span></p>
              </div>
              <div className="flex items-start gap-3">
                <FaUniversity className="text-yellow-400 text-2xl mt-1" />
                <p className="font-semibold">Negotiated/ <br/><span className="font-normal text-sm">Low fees Colleges</span></p>
              </div>
            </div>
          </div>
          {/* Right Side - Empty for now, you can add your Doctor Image here later as a background or absolute image */}
          <div className="hidden md:block">
            {/* <img src="/doctor-hero.png" alt="Doctor" className="absolute bottom-0 right-0 h-full object-contain" /> */}
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

      {/* 3. Top Collections Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Top Collections</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-4">Top MBBS Colleges in India And Abroad</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Reusable Card Component Concept */}
            {[
              "Top MBBS Colleges in India Rank Wise", "Top MBBS Private Colleges in India", "Top MBBS Government Colleges", "Top BDS Colleges in India", 
              "Top MBBS Colleges in Bangalore", "Top MBBS Colleges in Delhi NCR", "Top MBBS Colleges in Uttar Pradesh", "Top MBBS Colleges in Mumbai",
              "Top MBBS Colleges in Bangladesh", "Top MBBS Colleges in Russia", "Top MBBS Colleges in Germany", "Top MBBS Colleges in Nepal"
            ].map((title, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer h-40 bg-blue-900">
                {/* Background Overlay (Replace bg-blue-900 with an image tag later) */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Consultation Banner */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-xl text-white">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">Want to get a free consultation?</h3>
              <p className="text-blue-100">Talk to our experts and get admission in top world-ranking medical universities.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-center md:text-left">
                <p className="flex items-center gap-2 text-xl font-bold"><FaPhoneAlt/> +91-62645-53973</p>
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
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Consult Now</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-4 mb-2">MBBS in Abroad for Indian Students</h2>
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
                <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center group-hover:scale-105 transition">
                  <FaGlobeAmericas className="text-5xl text-blue-400" />
                  {/* Replace FaGlobeAmericas with actual flag images later */}
                </div>
                <h4 className="mt-4 font-bold text-gray-800 text-lg">{item.country}</h4>
                <p className="text-sm text-gray-500">{item.count} Universities</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Reliable Services */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Careerview Reliable Services</h2>
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

      {/* 2. Call the newly imported Popup Component and pass the onClose prop */}
      {showPopup && (
        <PopupForm onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}