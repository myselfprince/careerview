// src/app/collections/top-mbbs-india-rank-wise/page.js
import React from 'react';
import Link from 'next/link';

export default function TopMBBSIndia() {
  const colleges = [
    { rank: 1, name: "All India Institute of Medical Sciences, Delhi", city: "New Delhi", state: "Delhi" },
    { rank: 2, name: "Post Graduate Institute of Medical Education and Research", city: "Chandigarh", state: "Chandigarh" },
    { rank: 3, name: "Christian Medical College", city: "Vellore", state: "Tamil Nadu" },
    { rank: 4, name: "Jawaharlal Institute of Post Graduate Medical Education & Research", city: "Puducherry", state: "Pondicherry" },
    { rank: 5, name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh" },
    { rank: 6, name: "Banaras Hindu University", city: "Varanasi", state: "Uttar Pradesh" },
    { rank: 7, name: "National Institute of Mental Health & Neuro Sciences", city: "Bangalore", state: "Karnataka" },
    { rank: 8, name: "King George’s Medical University", city: "Lucknow", state: "Uttar Pradesh" },
    { rank: 9, name: "Amrita Vishwa Vidyapeetham", city: "Coimbatore", state: "Tamil Nadu" },
    { rank: 10, name: "Kasturba Medical College, Manipal", city: "Manipal", state: "Karnataka" },
    // You can add the rest of the 50 colleges here following the same format
    { rank: 11, name: "Saveetha Institute of Medical and Technical Sciences", city: "Chennai", state: "Tamil Nadu" },
    { rank: 12, name: "Dr. D. Y. Patil Vidyapeeth", city: "Pune", state: "Maharashtra" },
    { rank: 13, name: "All India Institute of Medical Sciences, Rishikesh", city: "Rishikesh", state: "Uttarakhand" },
    { rank: 14, name: "All India Institute of Medical Sciences, Bhubaneswar", city: "Khordha", state: "Odisha" },
    { rank: 15, name: "Siksha 'O' Anusandhan", city: "Bhubaneswar", state: "Odisha" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link> &gt; Collections &gt; Top MBBS Colleges in India Rank Wise
        </div>

        {/* Header */}
        <div className="bg-white p-8 rounded-t-xl shadow-sm border-b-4 border-blue-600 text-center">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Rankings 2026</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
            Indian Medical Colleges And Universities Rankings 2026
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore the top-ranked medical institutions across India based on comprehensive educational standards, infrastructure, and clinical exposure.
          </p>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-md rounded-b-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 font-semibold w-16 text-center">Rank</th>
                  <th className="p-4 font-semibold">Institution Name</th>
                  <th className="p-4 font-semibold">City</th>
                  <th className="p-4 font-semibold">State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {colleges.map((college, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors">
                    <td className="p-4 text-center font-bold text-gray-700">{college.rank}</td>
                    <td className="p-4 font-medium text-blue-800">{college.name}</td>
                    <td className="p-4 text-gray-600">{college.city}</td>
                    <td className="p-4 text-gray-600">{college.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}