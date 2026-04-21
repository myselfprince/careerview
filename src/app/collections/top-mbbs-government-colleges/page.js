import React from 'react';
import Head from 'next/head';

// --- Data Objects (Easy to update and maintain) ---

const collegeData = [
  { rank: 1, name: "All India Institute of Medical Sciences (AIIMS)", city: "New Delhi", state: "Delhi", established: 1956, seats: 132 },
  { rank: 2, name: "Jawaharlal Institute of Post Graduate Medical Education and Research (JIPMER)", city: "Puducherry", state: "Puducherry", established: 1956, seats: 200 },
  { rank: 5, name: "Banaras Hindu University (BHU)", city: "Varanasi", state: "Uttar Pradesh", established: 1916, seats: 100 },
  { rank: 10, name: "Madras Medical College & Government General Hospital", city: "Chennai", state: "Tamil Nadu", established: 1835, seats: 250 },
  { rank: 14, name: "All India Institute of Medical Sciences (AIIMS)", city: "Rishikesh", state: "Uttarakhand", established: 2012, seats: 125 },
  { rank: 15, name: "All India Institute of Medical Sciences (AIIMS)", city: "Bhubaneswar", state: "Odisha", established: 2012, seats: 125 },
  { rank: 16, name: "All India Institute of Medical Sciences (AIIMS)", city: "Jodhpur", state: "Rajasthan", established: 2012, seats: 125 },
  { rank: 17, name: "Vardhman Mahavir Medical College & Safdarjung Hospital", city: "New Delhi", state: "Delhi", established: 2002, seats: 170 },
  { rank: 19, name: "King George's Medical University (KGMU)", city: "Lucknow", state: "Uttar Pradesh", established: 1911, seats: 250 },
  { rank: 22, name: "Institute Of Postgraduate Medical Education & Research", city: "Kolkata", state: "West Bengal", established: 1957, seats: 200 },
  { rank: 24, name: "Maulana Azad Medical College", city: "New Delhi", state: "Delhi", established: 1958, seats: 250 },
  { rank: 27, name: "Aligarh Muslim University (AMU)", city: "Aligarh", state: "Uttar Pradesh", established: 1875, seats: 150 },
  { rank: 29, name: "Lady Hardinge Medical College", city: "New Delhi", state: "Delhi", established: 1916, seats: 240 },
  { rank: 31, name: "All India Institute of Medical Sciences (AIIMS)", city: "Bhopal", state: "Madhya Pradesh", established: 2012, seats: 125 },
  { rank: 32, name: "University College Of Medical Sciences", city: "New Delhi", state: "Delhi", established: 1971, seats: 170 },
  { rank: 35, name: "Govt. Medical College & Hospital", city: "Chandigarh", state: "Chandigarh", established: 1991, seats: 150 },
  { rank: 38, name: "All India Institute of Medical Sciences (AIIMS)", city: "Raipur", state: "Chhattisgarh", established: 2012, seats: 125 },
  { rank: 42, name: "Govt. Medical College", city: "Thiruvananthapuram", state: "Kerala", established: 1951, seats: 250 },
  { rank: 48, name: "Osmania Medical College", city: "Hyderabad", state: "Telangana", established: 2006, seats: 250 },
  { rank: 50, name: "Pandit B.D. Sharma, PGIMS", city: "Rohtak", state: "Haryana", established: 1960, seats: 250 },
];

const cutoffData = [
  { category: "UR/EWS", percentile: "50th", score: "720-164" },
  { category: "OBC", percentile: "40th", score: "163-129" },
  { category: "SC", percentile: "40th", score: "163-129" },
  { category: "ST", percentile: "40th", score: "163-129" },
  { category: "UR/EWS-PwD", percentile: "45th", score: "163-146" },
  { category: "OBC-PwD", percentile: "40th", score: "145-129" },
  { category: "SC-PwD", percentile: "40th", score: "145-129" },
  { category: "ST-PwD", percentile: "40th", score: "145-129" },
];

const faqs = [
  {
    question: "What is the total number of MBBS seats available in India?",
    answer: "Currently, India offers an estimated 117,825 MBBS seats. This includes 59,860 seats allocated to Government and Semi-Government institutions, while Private and Deemed universities offer around 57,965 seats."
  },
  {
    question: "What is the average fee structure for Government Medical Colleges?",
    answer: "Pursuing an MBBS degree from a government institution in India is highly subsidized. The fee structure typically ranges from ₹5,000 to ₹25 Lakhs per year, depending on the state and the specific college."
  },
  {
    question: "How long is the MBBS program in India?",
    answer: "The complete MBBS program spans 5.5 years. This includes 4.5 years of rigorous academic coursework followed by a mandatory 1-year clinical internship."
  }
];

export default function TopGovtCollegesPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Head>
        <title>Top Government MBBS Colleges in India 2026 | Careerview</title>
        <meta name="description" content="Explore top NIRF ranked government medical colleges in India, NEET cutoffs, fee structures, and MBBS admission eligibility for 2026 with Careerview." />
      </Head>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm mb-6">
          RANKINGS 2026
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Top MBBS Government Colleges
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the highest-ranked government medical institutions in India offering immense clinical exposure and subsidized fees.
        </p>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        
        {/* Why Study MBBS in India / Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Pursue MBBS in India?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dreaming of a successful medical career? <strong>Careerview</strong> is your dedicated partner in navigating the complex MBBS admission landscape in India. We provide transparent, merit-based guidance to help you secure a seat in top-tier medical colleges based entirely on your NEET-UG performance—without hidden donation fees.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Securing admission is highly competitive due to the ratio of applicants to available seats. In the most recent academic cycle, over 2.3 million candidates appeared for the NEET UG exam competing for approximately <strong>117,825 MBBS seats</strong> nationwide. The primary hurdle for students remains balancing the pursuit of quality education against high private tuition fees and limited government quotas.
          </p>
        </div>

        {/* Top Colleges Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-blue-800 text-white px-6 py-4">
            <h2 className="text-xl font-bold">Top Government Medical Colleges (NIRF Rankings)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider border-b">
                  <th className="px-6 py-4 font-semibold">NIRF Rank</th>
                  <th className="px-6 py-4 font-semibold">College Name</th>
                  <th className="px-6 py-4 font-semibold">City / State</th>
                  <th className="px-6 py-4 font-semibold text-center">Est. Year</th>
                  <th className="px-6 py-4 font-semibold text-center">Intake (Seats)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {collegeData.map((college, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-4 font-bold text-gray-900 text-center">{college.rank}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{college.name}</td>
                    <td className="px-6 py-4 text-gray-600">{college.city}, {college.state}</td>
                    <td className="px-6 py-4 text-gray-600 text-center">{college.established}</td>
                    <td className="px-6 py-4 text-gray-600 text-center font-medium">{college.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* NEET Cutoff Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12 max-w-4xl mx-auto">
          <div className="bg-blue-800 text-white px-6 py-4">
            <h2 className="text-xl font-bold">Recent NEET Cutoff Percentile & Scores</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider border-b">
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold text-center">Cutoff Percentile</th>
                  <th className="px-6 py-4 font-semibold text-center">Score Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cutoffData.map((cutoff, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-4 font-medium text-gray-900">{cutoff.category}</td>
                    <td className="px-6 py-4 text-gray-600 text-center">{cutoff.percentile}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold text-center">{cutoff.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Want a Free Admission Consultation?</h2>
          <p className="text-blue-800 mb-6">
            For NEET 2026 Registration, application forms, exam dates, syllabus updates, and expert admission guidance, connect with the <strong>Careerview Admission Experts</strong>. Let us help you secure your medical future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+916264553973" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Call: +91 62645-53973
            </a>
            <a href="tel:+916264553973" className="bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
              WhatsApp: +91 62645-53973
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}