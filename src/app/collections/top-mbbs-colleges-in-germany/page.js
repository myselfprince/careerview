    import React from 'react';
import Link from 'next/link';

export default function TopGermanyColleges() {
  const colleges = [
    { rank: 1, name: "Heidelberg University", city: "Heidelberg", fees: "€1,500 / Semester" },
    { rank: 2, name: "LMU Munich", city: "Munich", fees: "No Tuition Fee" },
    { rank: 3, name: "Charité - Universitätsmedizin", city: "Berlin", fees: "No Tuition Fee" },
    { rank: 4, name: "RWTH Aachen University", city: "Aachen", fees: "No Tuition Fee" },
    { rank: 5, name: "University of Tübingen", city: "Tübingen", fees: "€1,500 / Semester" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-sm text-gray-500 mb-6"><Link href="/" className="hover:text-blue-600">Home</Link> &gt; Collections &gt; Germany</div>
        <div className="bg-white p-8 rounded-t-xl shadow-sm border-b-4 border-blue-600 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">Top MBBS Colleges in Germany</h1>
          <p className="text-gray-600 mt-3">Study medicine in Germany for virtually free tuition, provided you clear the language and Studienkolleg requirements.</p>
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