import React from 'react';
import Link from 'next/link';

export default function TopNepalColleges() {
  const colleges = [
    { rank: 1, name: "Institute of Medicine (IOM)", city: "Kathmandu", fees: "₹45 Lakhs / Total" },
    { rank: 2, name: "B.P. Koirala Institute of Health Sciences", city: "Dharan", fees: "₹50 Lakhs / Total" },
    { rank: 3, name: "Manipal College of Medical Sciences", city: "Pokhara", fees: "₹55 Lakhs / Total" },
    { rank: 4, name: "Kathmandu University School of Medical Sciences", city: "Dhulikhel", fees: "₹48 Lakhs / Total" },
    { rank: 5, name: "College of Medical Sciences", city: "Bharatpur", fees: "₹45 Lakhs / Total" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-600">Home</Link> &gt; Collections &gt; Nepal</div>
        <div className="bg-white p-8 rounded-t-xl shadow-sm border-b-4 border-blue-600 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">Top MBBS Colleges in Nepal</h1>
          <p className="text-gray-600 mt-3">Nepal is the closest destination for Indians, offering no visa requirements and excellent NMC-approved medical programs.</p>
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