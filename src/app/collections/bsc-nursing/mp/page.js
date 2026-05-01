// app/mp-nursing-colleges/page.js

import React from 'react';

export default function MPNursingCollegesPage() {
  // Environment Variables mapped for contact and branding
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || "Careermedi";
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "careermedi.com";
  const phone1 = process.env.NEXT_PUBLIC_PHONE || "+91 62645-53973";
  const phone2 = process.env.NEXT_PUBLIC_PHONE2 || "+91 62645-53973";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "916264553973";

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Nursing Colleges in Madhya Pradesh</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive details and rankings for the best Government and Private Nursing Colleges across Madhya Pradesh.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href={`https://wa.me/${whatsapp}`} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Chat on WhatsApp
            </a>
            <a href={`tel:${phone1}`} className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
              Call {phone1}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-12 space-y-12">
        
        {/* Intro Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Nursing Admissions in Madhya Pradesh</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Madhya Pradesh boasts a strong network of educational institutions dedicated to healthcare and nursing. With major educational hubs in Bhopal, Indore, Gwalior, and Jabalpur, the state offers exceptional clinical exposure and training facilities through its top government and private medical colleges. 
          </p>
          <p className="text-gray-700 leading-relaxed">
            Navigating the admission process, understanding seat matrices, and participating in state counseling can be overwhelming. At <strong>{brandName}</strong>, our expert team provides dedicated support and guidance to help you secure a seat in a college that perfectly aligns with your career aspirations in nursing.
          </p>
        </div>

        {/* Top Nursing Colleges Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50 flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">List of Nursing Colleges in MP</h2>
              <p className="text-gray-600 mt-2 text-sm">Showing top Government and Private institutions</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 font-semibold text-sm whitespace-nowrap">Rank</th>
                  <th className="p-4 font-semibold text-sm min-w-[300px]">College Name</th>
                  <th className="p-4 font-semibold text-sm whitespace-nowrap">District</th>
                  <th className="p-4 font-semibold text-sm whitespace-nowrap text-center">Established</th>
                  <th className="p-4 font-semibold text-sm whitespace-nowrap text-center">No. of Seats</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {nursingCollegesData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-4 font-bold text-blue-900">{row.rank}</td>
                    <td className="p-4 font-medium text-gray-900">{row.college}</td>
                    <td className="p-4">{row.district}</td>
                    <td className="p-4 text-center">{row.established}</td>
                    <td className="p-4 text-center font-semibold">{row.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gray-50 text-center text-sm text-gray-500 border-t border-gray-200">
            For real-time seat availability and personalized admission counseling, contact {brandName} experts at {phone1}.
          </div>
        </div>

        {/* Admission Support Section */}
        <div className="bg-blue-50 rounded-xl border border-blue-100 shadow-sm p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Need Help with Your Application?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our expert counselors at {brandName} can guide you through the entrance exams, state counseling procedures, and direct admission formalities for both government and private institutions.
          </p>
          <a href={`tel:${phone2}`} className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Request a Callback
          </a>
        </div>

      </div>
    </div>
  );
}

// Data Array mapped from the provided text (Fee Structure strictly removed)
const nursingCollegesData = [
  { rank: "#1", college: "Bhopal Nursing College (Government)", district: "Bhopal, Madhya Pradesh", established: "1956 (Up 2005, 2018)", seats: "60" },
  { rank: "#2", college: "Government Nursing College, GMC (Government)", district: "Bhopal, Madhya Pradesh", established: "2005", seats: "120" },
  { rank: "#3", college: "Government Nursing College, MGM Medical College (Government)", district: "Indore, Madhya Pradesh", established: "1948", seats: "50" },
  { rank: "#4", college: "Government Nursing College, NSCB Medical College (Government)", district: "Jabalpur, Madhya Pradesh", established: "1955", seats: "50" },
  { rank: "#5", college: "Government Nursing College, GR Medical College (Government)", district: "Gwalior, Madhya Pradesh", established: "1946", seats: "50" },
  { rank: "#6", college: "Government Nursing College, SS Medical College (Government)", district: "Rewa, Madhya Pradesh", established: "2018", seats: "50" },
  { rank: "#7", college: "Government Nursing College, Bundelkhand Medical College (Government)", district: "Sagar, Madhya Pradesh", established: "2009", seats: "50" },
  { rank: "#8", college: "Government Nursing College, Chhindwara Institute of Medical Sciences (Government)", district: "Chhindwara, Madhya Pradesh", established: "2019", seats: "50" },
  { rank: "#9", college: "Government Nursing College, Datia (Government)", district: "Datia, Madhya Pradesh", established: "2018", seats: "50" },
  { rank: "#10", college: "R.D. Memorial College of Nursing (Private)", district: "Bhopal, Madhya Pradesh", established: "1988", seats: "60" },
  { rank: "#11", college: "People’s College of Nursing & Research (Private)", district: "Bhopal, Madhya Pradesh", established: "2003", seats: "100" },
  { rank: "#12", college: "BIMR Nursing College (Private)", district: "Indore, Madhya Pradesh", established: "2003", seats: "60" },
  { rank: "#13", college: "BIPS Nursing College (Birla Institute) (Private)", district: "Gwalior, Madhya Pradesh", established: "2004", seats: "60" },
  { rank: "#14", college: "Amarjyoti Institute of Nursing Sciences (Private)", district: "Jabalpur, Madhya Pradesh", established: "2005", seats: "50" },
  { rank: "#15", college: "Kasturba College of Nursing (Private)", district: "Bhopal, Madhya Pradesh", established: "2002", seats: "50" },
  { rank: "#16", college: "Veena Vadini College of Nursing (Private)", district: "Gwalior, Madhya Pradesh", established: "2008", seats: "60" },
  { rank: "#17", college: "Rahat College of Nursing (Private)", district: "Khargone, Madhya Pradesh", established: "2011", seats: "40" },
  { rank: "#18", college: "VVM College of Nursing (Private)", district: "Bhopal, Madhya Pradesh", established: "2004", seats: "50" },
  { rank: "#19", college: "Sophia Nursing College (Private)", district: "Gwalior, Madhya Pradesh", established: "2002", seats: "40" },
  { rank: "#20", college: "HICT Shiksha Mahavidyalaya (Private)", district: "Gwalior, Madhya Pradesh", established: "2006", seats: "50" },
  { rank: "#21", college: "Sai Shraddha Nursing College (Private)", district: "Rewa, Madhya Pradesh", established: "2010", seats: "40" },
  { rank: "#22", college: "Manoj Jain Memorial College of Nursing (Private)", district: "Satna, Madhya Pradesh", established: "2007", seats: "50" },
  { rank: "#23", college: "Mother Teresa Institute of Nursing (Private)", district: "Gwalior, Madhya Pradesh", established: "2005", seats: "60" },
  { rank: "#24", college: "RSC College of Nursing (Private)", district: "Gwalior, Madhya Pradesh", established: "2006", seats: "60" },
  { rank: "#25", college: "Pragyan College of Nursing (Private)", district: "Bhopal, Madhya Pradesh", established: "2004", seats: "50" },
  { rank: "#26", college: "Kusha Bhau Thakre Nursing College (Private)", district: "Bhopal, Madhya Pradesh", established: "2006", seats: "60" },
  { rank: "#27", college: "Sri Aurobindo College of Nursing (Private)", district: "Indore, Madhya Pradesh", established: "2006", seats: "60" },
  { rank: "#28", college: "LN Nursing College (LNCT University) (Private)", district: "Bhopal, Madhya Pradesh", established: "2008", seats: "60" },
  { rank: "#29", college: "Ojaswini Nursing College (Private)", district: "Sagar, Madhya Pradesh", established: "2006", seats: "50" },
  { rank: "#30", college: "Index Nursing College (Private)", district: "Indore, Madhya Pradesh", established: "2007", seats: "60" },
  { rank: "#31", college: "Choithram College of Nursing (Private)", district: "Indore, Madhya Pradesh", established: "1996", seats: "75" },
  { rank: "#32", college: "Aurovindo College of Nursing (Private)", district: "Bhopal, Madhya Pradesh", established: "2006", seats: "40" },
  { rank: "#33", college: "Sardar Patel College of Nursing (Private)", district: "Ratlam, Madhya Pradesh", established: "2010", seats: "40" },
  { rank: "#34", college: "Shivnath Singh College of Nursing (Private)", district: "Gwalior, Madhya Pradesh", established: "2006", seats: "40" },
  { rank: "#35", college: "Madhvi Raje Nursing College (Private)", district: "Morena, Madhya Pradesh", established: "2011", seats: "40" },
  { rank: "#36", college: "Jabalpur Institute of Nursing Sciences (Private)", district: "Jabalpur, Madhya Pradesh", established: "2006", seats: "60" }
];