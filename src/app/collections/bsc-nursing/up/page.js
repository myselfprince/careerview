// app/up-nursing-colleges/page.js

import React from 'react';

export default function UPNursingCollegesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Nursing Colleges in Uttar Pradesh</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive details and rankings for the best Government and Private Nursing Colleges across Uttar Pradesh.
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
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Nursing Admissions in Uttar Pradesh</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Uttar Pradesh is home to some of the most prestigious medical and nursing institutions in India. Whether you are aiming for a highly coveted seat in a government institution like King George’s Medical University (KGMU) or looking at top-tier private colleges, the state offers excellent infrastructure and clinical exposure for aspiring nurses.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Securing admission to these top colleges requires proper guidance and up-to-date information regarding counseling and seat matrices. At <strong>{brandName}</strong>, we assist you throughout the application and counseling process to ensure you find the right fit for your medical career.
          </p>
        </div>

        {/* Top Nursing Colleges Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50 flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">List of Nursing Colleges in UP</h2>
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
            Our expert counselors at {brandName} can guide you through the entrance exams, state counseling procedures, and direct admission formalities for private institutions.
          </p>
          <a href={`tel:${phone2}`} className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Request a Callback
          </a>
        </div>

      </div>
    </div>
  );
}

// Data Array mapped from your provided text (Fee Structure removed)
const nursingCollegesData = [
  { rank: "#1", college: "King George’s Medical University (KGMU), College of Nursing (Government)", district: "Lucknow, Uttar Pradesh", established: "1911", seats: "100" },
  { rank: "#2", college: "Government Nursing College, Dr. Ram Manohar Lohia Institute of Medical Sciences (RMLIMS) (Government)", district: "Lucknow, Uttar Pradesh", established: "2017", seats: "50" },
  { rank: "#3", college: "Government Nursing College, Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS) (Government)", district: "Lucknow, Uttar Pradesh", established: "1983", seats: "40" },
  { rank: "#4", college: "Government Nursing College, BRD Medical College (Government)", district: "Gorakhpur, Uttar Pradesh", established: "1972", seats: "50" },
  { rank: "#5", college: "Government Nursing College, Maharani Laxmi Bai Medical College (Government)", district: "Jhansi, Uttar Pradesh", established: "1968", seats: "50" },
  { rank: "#6", college: "Government Nursing College, GSVM Medical College (Government)", district: "Kanpur, Uttar Pradesh", established: "1955", seats: "50" },
  { rank: "#7", college: "Government Nursing College, SN Medical College (Government)", district: "Agra, Uttar Pradesh", established: "1939", seats: "50" },
  { rank: "#8", college: "Government Nursing College, Medical College Kannauj (Government)", district: "Kannauj, Uttar Pradesh", established: "2012", seats: "50" },
  { rank: "#9", college: "Vivekananda College of Nursing (Private)", district: "Lucknow, Uttar Pradesh", established: "1987", seats: "40" },
  { rank: "#10", college: "Teerthanker Mahaveer College of Nursing (Private)", district: "Moradabad, Uttar Pradesh", established: "2009", seats: "100" },
  { rank: "#11", college: "Galgotiass School of Nursing (Private)", district: "Greater Noida, Uttar Pradesh", established: "2020", seats: "60" },
  { rank: "#12", college: "Integral College of Nursing (Private)", district: "Lucknow, Uttar Pradesh", established: "2015", seats: "40" },
  { rank: "#13", college: "Kailash Institute of Nursing and Para-Medical Sciences (Private)", district: "Greater Noida, Uttar Pradesh", established: "2004", seats: "40" },
  { rank: "#14", college: "Rama College of Nursing (Private)", district: "Kanpur, Uttar Pradesh", established: "2008", seats: "40" },
  { rank: "#15", college: "Era’s College of Nursing (Private)", district: "Lucknow", established: "2020", seats: "40" },
  { rank: "#16", college: "Sahara College of Nursing (Private)", district: "Lucknow, Uttar Pradesh", established: "2008", seats: "40" },
  { rank: "#17", college: "Apex College of Nursing (Private)", district: "Varanasi, Uttar Pradesh", established: "2008", seats: "40" },
  { rank: "#18", college: "Hind Institute of Medical Sciences, School of Nursing (Private)", district: "Sitapur, Uttar Pradesh", established: "2015", seats: "40" },
  { rank: "#19", college: "GS College of Nursing and School of Nursing (Private)", district: "Hapur, Uttar Pradesh", established: "2017", seats: "40" },
  { rank: "#20", college: "Sharda School of Nursing and Paramedical Sciences (Private)", district: "Greater Noida, Uttar Pradesh", established: "2008", seats: "60" },
  { rank: "#21", college: "F.I. College of Nursing (Private)", district: "Lucknow, Uttar Pradesh", established: "2008", seats: "40" },
  { rank: "#22", college: "Krishna Nursing & Paramedical Institute (Private)", district: "Lucknow, Uttar Pradesh", established: "2009", seats: "40" },
  { rank: "#23", college: "SAMARPAN Institute of Nursing and Paramedical Sciences (Private)", district: "Lucknow, Uttar Pradesh", established: "2010", seats: "40" },
  { rank: "#24", college: "NIMT Institute of Medical and Paramedical Sciences (Private)", district: "Greater Noida, Uttar Pradesh", established: "2008", seats: "40" },
  { rank: "#25", college: "Aligarh College of Nursing (Private)", district: "Aligarh, Uttar Pradesh", established: "1993", seats: "40" },
  { rank: "#26", college: "Javitri Institute of Medical Sciences (Private)", district: "Lucknow, Uttar Pradesh", established: "2019", seats: "40" },
  { rank: "#27", college: "M.S. Hospital and Research Centre (Private)", district: "Lucknow, Uttar Pradesh", established: "2014", seats: "40" },
  { rank: "#28", college: "T.S. Misra College of Nursing (Private)", district: "Lucknow, Uttar Pradesh", established: "2015", seats: "N/A" },
  { rank: "#29", college: "Bhalchandra Institute of Paramedical Sciences (Private)", district: "Lucknow, Uttar Pradesh", established: "2010", seats: "N/A" },
  { rank: "#30", college: "Suruchi Institute of Nursing (Private)", district: "Lucknow, Uttar Pradesh", established: "2011", seats: "N/A" },
  { rank: "#31", college: "Nova Institute of Nursing & Paramedical Sciences (Private)", district: "Lucknow, Uttar Pradesh", established: "2010", seats: "N/A" },
  { rank: "#32", college: "Maa Chandrika Devi Institute of Paramedical Sciences (Private)", district: "Lucknow, Uttar Pradesh", established: "2017", seats: "N/A" }
];