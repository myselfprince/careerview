'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function TopPrivateMBBS() {
  const [openFaq, setOpenFaq] = useState(null);

  const privateColleges = [
    { rank: 3, name: "Christian Medical College", city: "Vellore", state: "Tamil Nadu", est: 1942, seats: 100 },
    { rank: 8, name: "Amrita Vishwa Vidyapeetham", city: "Coimbatore", state: "Tamil Nadu", est: 1994, seats: 150 },
    { rank: 9, name: "Kasturba Medical College", city: "Manipal", state: "Karnataka", est: 1953, seats: 250 },
    { rank: 11, name: "Dr. D. Y. Patil Vidyapeeth", city: "Pune", state: "Maharashtra", est: 1995, seats: 250 },
    { rank: 12, name: "Saveetha Institute of Medical and Technical Sciences", city: "Chennai", state: "Tamil Nadu", est: 2008, seats: 250 },
  ];

  const faqs = [
    { q: "Are there specific entrance exams required before applying for an MBBS program abroad?", a: "Unlike admissions in the US, UK, or Canada which may require TOEFL or IELTS, many popular destinations for Indian students (like Russia, Kazakhstan, Nepal, and the Philippines) do not strictly require these English proficiency tests for admission. Seats are generally allotted on a first-come, first-served basis provided you qualify NEET." },
    { q: "Can I complete my medical internship in India after graduating from a foreign university?", a: "Yes, once you complete your MBBS abroad and clear the FMGE/NEXT screening test conducted by the NMC, you are eligible to undergo your mandatory internship in India." },
    { q: "How many attempts are allowed for the NMC/FMGE Screening Test?", a: "Currently, there is no limit on the number of attempts for the FMGE/NEXT exam. You can appear for it as many times as needed to clear it." },
    { q: "Can I practice or work in an Indian government hospital after studying abroad?", a: "Absolutely. After passing the screening test and registering with the Medical Council, your degree is treated identically to an Indian MBBS degree. You can apply for government roles and practice anywhere in India." },
    { q: "What kind of medical facilities are available for students on international campuses?", a: "Most recognized medical universities have their own dedicated student clinics on campus. Additionally, Careerview ensures all students have valid medical insurance, allowing them to access state-run hospitals in their host city if needed." },
    { q: "How can I secure an education loan for my MBBS studies?", a: "Education loans can be availed from nationalized and private banks. Careerview provides you with the necessary admission letters, fee structures, and documentation support to seamlessly process your education loan." },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        {/* Intro Section */}
        <section className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-red-600">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">MBBS Admission in India 2026</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Are you planning to pursue your medical career in India? Careerview is here to guide you through the complexities of MBBS admissions, ensuring you find the right college based on your NEET score without hidden donation fees.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Securing an MBBS seat in India requires navigating intense competition. Currently, India offers approximately <strong>117,825 MBBS seats</strong>, divided almost equally between Government/Semi-Government institutions (59,860 seats) and Private or Deemed universities (57,965 seats). The standard MBBS curriculum spans 5.5 years, which includes a 1-year mandatory internship. 
          </p>
          <div className="bg-red-50 text-red-800 p-4 rounded-md inline-block font-semibold border border-red-200">
            Estimated Cost of Private MBBS in India: ₹5 Lakhs – ₹25 Lakhs (Per Year)
          </div>
        </section>

        {/* NEET Cutoff Table */}
        <section className="bg-white p-8 rounded-xl shadow-sm text-black">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">NEET 2024 Cutoff Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Category</th>
                  <th className="p-3 border">Cutoff Percentile</th>
                  <th className="p-3 border">Score Range</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border font-medium">UR/EWS</td><td className="p-3 border">50th</td><td className="p-3 border">720 - 164</td></tr>
                <tr><td className="p-3 border font-medium">OBC / SC / ST</td><td className="p-3 border">40th</td><td className="p-3 border">163 - 129</td></tr>
                <tr className="bg-gray-50"><td colSpan="3" className="p-3 border text-sm text-gray-500">
                  For NEET 2026 Registration, dates, and syllabus counseling, contact Careerview Experts at <strong>+91 62645-53973</strong>.
                </td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Top Private Colleges Table */}
        <section className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Private Medical Colleges (NIRF Ranking)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-3">NIRF Rank</th>
                  <th className="p-3">College Name</th>
                  <th className="p-3">City & State</th>
                  <th className="p-3">Est. Year</th>
                  <th className="p-3">Seats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {privateColleges.map((col, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-3 font-bold text-center text-black">{col.rank}</td>
                    <td className="p-3 font-medium text-blue-700">{col.name}</td>
                    <td className="p-3 text-gray-600">{col.city}, {col.state}</td>
                    <td className="p-3 text-gray-600">{col.est}</td>
                    <td className="p-3 text-gray-600">{col.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Careerview Admissions FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-4 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition focus:outline-none"
                >
                  {faq.q}
                  {openFaq === index ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-gray-400" />}
                </button>
                {openFaq === index && (
                  <div className="p-4 pt-0 text-gray-600 border-t border-gray-100 leading-relaxed bg-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Banner */}
        <div className="bg-blue-600 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Want a free consultation?</h3>
            <p className="text-blue-100 mt-1">Talk to our experts for admission into top medical universities.</p>
          </div>
          <a href="tel:6264553973" className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
            <FaPhoneAlt /> Call +91 62645-53973
          </a>
        </div>

      </div>
    </div>
  );
}