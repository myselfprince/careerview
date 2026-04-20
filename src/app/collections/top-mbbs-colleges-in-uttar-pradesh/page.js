import React from 'react';
import Link from 'next/link';

export default function TopUPColleges() {
  const colleges = [
    { rank: 1, name: "King George's Medical University", city: "Lucknow", fees: "₹54,600 / Year" },
    { rank: 2, name: "Institute of Medical Sciences, BHU", city: "Varanasi", fees: "₹13,410 / Year" },
    { rank: 3, name: "Jawaharlal Nehru Medical College, AMU", city: "Aligarh", fees: "₹46,340 / Year" },
    { rank: 4, name: "Sanjay Gandhi Postgraduate Institute", city: "Lucknow", fees: "Government Norms" },
    { rank: 5, name: "LLRM Medical College", city: "Meerut", fees: "₹42,000 / Year" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-600">Home</Link> &gt; Collections &gt; Uttar Pradesh</div>
        <div className="bg-white p-8 rounded-t-xl shadow-sm border-b-4 border-blue-600 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">Top MBBS Colleges in Uttar Pradesh</h1>
          <p className="text-gray-600 mt-3">UP has a vast network of medical colleges. Here are the top institutions for aspiring doctors in the state.</p>
        </div>
        <div className="bg-white shadow-md rounded-b-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-4 font-semibold text-center w-16">Rank</th>
                <th className="p-4 font-semibold">College Name</th>
                <th className="p-4 font-semibold">City</th>
                <th className="p-4 font-semibold">Approx. Fees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {colleges.map((col, i) => (
                <tr key={i} className="hover:bg-blue-50">
                  <td className="p-4 text-center font-bold text-gray-700">{col.rank}</td>
                  <td className="p-4 font-medium text-blue-800">{col.name}</td>
                  <td className="p-4 text-gray-600">{col.city}</td>
                  <td className="p-4 text-green-700 font-semibold">{col.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}