// app/bihar-nursing-colleges/page.js

import React from 'react';

export default function BiharNursingCollegesPage() {
  // Environment Variables mapped for contact and branding
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || "Careermedi";
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "careermedi.com";
  const phone1 = process.env.NEXT_PUBLIC_PHONE || "+91 62645-53973";
  const phone2 = process.env.NEXT_PUBLIC_PHONE2 || "+91 62645-53973";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "916264553973";

  return (
    <div className="bg-slate-50 min-h-screen pb-12 font-sans flex flex-col">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Nursing Colleges in Bihar</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the top government and private nursing institutions across Bihar to kickstart your medical career.
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

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12 w-full">
        
        {/* Intro Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Nursing Admissions in Bihar</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bihar is rapidly expanding its healthcare education infrastructure. From historic government institutions like PMCH and IGIMS to emerging private colleges, students have a variety of options to pursue high-quality nursing education. 
          </p>
          <p className="text-gray-700 leading-relaxed">
            Securing admission to these top colleges requires proper guidance, up-to-date information regarding state counseling, and an understanding of the seat matrices. At <strong>{brandName}</strong>, we assist you throughout the application process to ensure you find the perfect institution for your future.
          </p>
        </div>

        {/* Top Nursing Colleges Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50 flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">List of Nursing Colleges in Bihar</h2>
              <p className="text-gray-600 mt-2 text-sm">Showing top Government and Private institutions</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-full">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 font-semibold text-sm whitespace-nowrap">Rank</th>
                  <th className="p-4 font-semibold text-sm min-w-[300px]">College Name</th>
                  <th className="p-4 font-semibold text-sm whitespace-nowrap">District / Location</th>
                  <th className="p-4 font-semibold text-sm whitespace-nowrap text-center">Established</th>
                  <th className="p-4 font-semibold text-sm whitespace-nowrap text-center">No. of Seats</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {nursingColleges.map((college, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-4 font-bold text-blue-900">#{college.rank}</td>
                    <td className="p-4 font-medium text-gray-900">{college.name}</td>
                    <td className="p-4">{college.district}</td>
                    <td className="p-4 text-center text-gray-500">{college.established}</td>
                    <td className="p-4 text-center font-semibold text-gray-900">{college.seats}</td>
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
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 capitalize">
            Let's take a tour of the best college campuses together.
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our expert counselors at {brandName} can guide you through the entrance exams, state counseling procedures, and direct admission formalities.
          </p>
          <a href={`tel:${phone2}`} className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Request a Callback
          </a>
        </div>

    
      </main>

    
    </div>
  );
}

// Data Array parsed from your input
const nursingColleges = [
  { rank: 1, name: "Indira Gandhi Institute of Medical Sciences (IGIMS), College of Nursing (Government)", district: "Sheikhpura, Patna, Bihar", established: "1983", seats: 40 },
  { rank: 2, name: "Patna Medical College and Hospital (PMCH), Department of Nursing (Government)", district: "Ashok Rajpath, Patna, Bihar", established: "1925", seats: 60 },
  { rank: 3, name: "Nalanda Medical College and Hospital (NMCH), Department of Nursing (Government)", district: "Kankarbagh, Patna, Bihar", established: "1970", seats: 50 },
  { rank: 4, name: "Sri Krishna Medical College and Hospital (SKMCH), Department of Nursing (Government)", district: "Umanagar, Muzaffarpur, Bihar", established: "1970", seats: 50 },
  { rank: 5, name: "Darbhanga Medical College and Hospital (DMCH), Department of Nursing (Government)", district: "Laheriasarai, Darbhanga, Bihar", established: "1946", seats: 50 },
  { rank: 6, name: "Anugrah Narayan Magadh Medical College (ANMMC), Department of Nursing (Government)", district: "Sherghati Road, Gaya, Bihar", established: "1969", seats: 50 },
  { rank: 7, name: "Jawaharlal Nehru Medical College and Hospital (JNMCH), Department of Nursing (Government)", district: "Bhagalpur, Bihar", established: "1971", seats: 50 },
  { rank: 8, name: "A.N.M. Training School, Sadar Hospital (Government)", district: "Munger, Bihar", established: "1970", seats: 30 },
  { rank: 9, name: "Narayan Nursing College (Private)", district: "Jamuhar, Sasaram, Rohtas, Bihar", established: "2012", seats: 60 },
  { rank: 10, name: "Kurji Holy Family Hospital, School of Nursing (Private)", district: "Sadaquat Ashram, Patna, Bihar", established: "1940", seats: 40 },
  { rank: 11, name: "Gautam Institute of Nursing & Paramedics (Private)", district: "Bihar Sharif, Nalanda, Bihar", established: "2011", seats: 40 },
  { rank: 12, name: "Patliputra College of Nursing (Private)", district: "Khemnichak, New Bypass Road, Patna, Bihar", established: "2010", seats: 40 },
  { rank: 13, name: "Shri Sai College of Nursing & Paramedical (Private)", district: "Kankarbagh, Patna, Bihar", established: "2000", seats: 40 },
  { rank: 14, name: "National Institute of Health Education and Research (NIHER) (Private)", district: "Gulzarbagh, Patna, Bihar", established: "1998", seats: 40 },
  { rank: 15, name: "Bihar Institute of Nursing & Paramedical (Private)", district: "Jaitipur, Neora, Patna, Bihar", established: "1998", seats: 40 },
  { rank: 16, name: "MGM College of Nursing & Paramedical Sciences (Private)", district: "Kankarbagh, Patna, Bihar", established: "1980", seats: 40 },
  { rank: 17, name: "Taluka Institute of Nursing (Private)", district: "Danapur, Patna, Bihar", established: "2008", seats: 40 },
  { rank: 18, name: "Patna Institute of Nursing & Paramedical Science (Private)", district: "Brahampur, New Jaganpura, Patna, Bihar", established: "2006", seats: 40 },
  { rank: 19, name: "Swamyal Chandrashekhar Nursing College (Private)", district: "Parmanandpur, Khagaria, Bihar", established: "1996", seats: 40 },
  { rank: 20, name: "Tripolia School of Nursing (Private)", district: "Gulzarbagh, Patna, Bihar", established: "1955", seats: 50 },
  { rank: 21, name: "RUP Bala Memorial ANM Training Centre (Private)", district: "Rajbari, East Champaran, Bihar", established: "1988", seats: 40 },
  { rank: 22, name: "AHS Nursing College & Hospital (Private)", district: "Tajpur Road, Samastipur, Bihar", established: "2023", seats: 40 },
  { rank: 23, name: "Mata Gujri College of Nursing (Private)", district: "Purab Pali Road, Kishanganj, Bihar", established: "2012", seats: 40 },
  { rank: 24, name: "Dhanarua School of Nursing (Private)", district: "Dhanarua, Patna, Bihar", established: "2015", seats: 40 },
  { rank: 25, name: "Anju Institute of Nursing Science (Private)", district: "Islamnagar, Nalanda, Bihar", established: "2011", seats: 40 },
  { rank: 26, name: "Saroj Nursing Institute (Private)", district: "Muzaffarpur, Bihar", established: "2014", seats: 40 },
  { rank: 27, name: "Himalaya College of Nursing (Private)", district: "Patna, Bihar", established: "2012", seats: 40 },
  { rank: 28, name: "Madhubani Nursing College (Private)", district: "Madhubani, Bihar", established: "2019", seats: 40 },
  { rank: 29, name: "Daksh B.Sc. Nursing College (Private)", district: "Siwan, Bihar", established: "2012", seats: 40 }
];