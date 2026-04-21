import React from 'react';
import Head from 'next/head';

// --- Data Objects (Cleaned, corrected, and easy to maintain) ---

const bdsCollegesData = [
  { rank: 1, name: "Saveetha Institute of Medical and Technical Sciences", city: "Chennai", state: "Tamil Nadu" },
  { rank: 2, name: "Manipal College of Dental Sciences", city: "Manipal", state: "Karnataka" },
  { rank: 3, name: "Dr. D. Y. Patil Vidyapeeth", city: "Pune", state: "Maharashtra" },
  { rank: 4, name: "Maulana Azad Institute of Dental Sciences", city: "Delhi", state: "Delhi" },
  { rank: 5, name: "A.B. Shetty Memorial Institute of Dental Sciences", city: "Mangaluru", state: "Karnataka" },
  { rank: 6, name: "SRM Dental College", city: "Chennai", state: "Tamil Nadu" },
  { rank: 7, name: "Sri Ramachandra Institute of Higher Education and Research", city: "Chennai", state: "Tamil Nadu" },
  { rank: 8, name: "Manipal College of Dental Sciences", city: "Mangaluru", state: "Karnataka" },
  { rank: 9, name: "Siksha 'O' Anusandhan", city: "Bhubaneshwar", state: "Odisha" },
  { rank: 10, name: "Jamia Millia Islamia", city: "New Delhi", state: "New Delhi" },
  { rank: 11, name: "JSS Dental College and Hospital", city: "Mysuru", state: "Karnataka" },
  { rank: 12, name: "Amrita Vishwa Vidyapeetham", city: "Coimbatore", state: "Tamil Nadu" },
  { rank: 13, name: "Postgraduate Institute of Dental Sciences", city: "Rohtak", state: "Haryana" },
  { rank: 14, name: "M.S. Ramaiah University of Applied Sciences", city: "Bangalore", state: "Karnataka" },
  { rank: 15, name: "Govt. Dental College", city: "Nagpur", state: "Maharashtra" },
  { rank: 16, name: "Meenakshi Academy of Higher Education and Research", city: "Chennai", state: "Tamil Nadu" },
  { rank: 17, name: "Datta Meghe Institute of Higher Education and Research", city: "Wardha", state: "Maharashtra" },
  { rank: 18, name: "Banaras Hindu University (BHU)", city: "Varanasi", state: "Uttar Pradesh" },
  { rank: 19, name: "Nair Hospital Dental College", city: "Mumbai", state: "Maharashtra" },
  { rank: 20, name: "Kalinga Institute of Industrial Technology (KIIT)", city: "Bhubaneshwar", state: "Odisha" },
  { rank: 21, name: "Government Dental College", city: "Ahmedabad", state: "Gujarat" },
  { rank: 22, name: "SDM College of Dental Sciences & Hospital", city: "Dharwad", state: "Karnataka" },
  { rank: 23, name: "Dr. M. G. R. Educational and Research Institute", city: "Chennai", state: "Tamil Nadu" },
  { rank: 24, name: "Government Dental College", city: "Bangalore", state: "Karnataka" },
  { rank: 25, name: "Government Dental College", city: "Thiruvananthapuram", state: "Kerala" }, // Corrected state assumption based on city
  { rank: 26, name: "Vishnu Dental College", city: "Bhimavaram", state: "Andhra Pradesh" },
  { rank: 27, name: "Chettinad Dental College and Research Institute", city: "Kelambakkam", state: "Tamil Nadu" },
  { rank: 28, name: "Yenepoya Dental College", city: "Mangaluru", state: "Karnataka" },
  { rank: 29, name: "Govt. Dental College", city: "Mumbai", state: "Maharashtra" },
  { rank: 30, name: "Christian Dental College", city: "Ludhiana", state: "Punjab" },
  { rank: 31, name: "Aligarh Muslim University (AMU)", city: "Aligarh", state: "Uttar Pradesh" },
  { rank: 32, name: "Govt. Dental College", city: "Indore", state: "Madhya Pradesh" },
  { rank: 33, name: "Army College of Dental Sciences", city: "Secunderabad", state: "Telangana" },
  { rank: 34, name: "Panjab University", city: "Chandigarh", state: "Chandigarh" },
  { rank: 35, name: "KLE Vishwanath Katti Institute of Dental Sciences", city: "Belgaum", state: "Karnataka" },
  { rank: 36, name: "Bapuji Dental College & Hospital", city: "Davangere", state: "Karnataka" },
  { rank: 37, name: "Karnavati University", city: "Gandhinagar", state: "Gujarat" },
  { rank: 38, name: "Padmashree Dr. D. Y. Patil Vidyapeeth", city: "Mumbai", state: "Maharashtra" },
  { rank: 39, name: "Bharati Vidyapeeth Dental College and Hospital", city: "Pune", state: "Maharashtra" },
  { rank: 40, name: "Saraswati Dental College & Hospital", city: "Lucknow", state: "Uttar Pradesh" },
];

const faqs = [
  {
    question: "Is NEET-UG mandatory for BDS admission in India?",
    answer: "Yes, qualifying the National Eligibility cum Entrance Test (NEET-UG) is strictly mandatory for admission into any recognized BDS (Bachelor of Dental Surgery) program in India, across both government and private dental colleges."
  },
  {
    question: "What is the duration of the BDS course?",
    answer: "The BDS degree is a 5-year undergraduate program. This includes 4 years of comprehensive academic education and clinical training, followed by a mandatory 1-year paid rotating internship."
  },
  {
    question: "Are these dental colleges recognized by the government?",
    answer: "Absolutely. The institutions listed above are highly ranked and strictly recognized by the Dental Council of India (DCI), which is the apex regulatory body for dental education in the country."
  },
  {
    question: "How can Careerview help me secure a BDS seat?",
    answer: "Careerview provides end-to-end admission counseling. We analyze your NEET score, budget, and location preferences to guide you through the choice-filling and counseling process, ensuring you secure the best possible DCI-approved dental college."
  }
];

export default function TopBdsCollegesPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Head>
        <title>Top BDS Colleges in India | Careerview</title>
        <meta name="description" content="Discover the top-ranked Dental (BDS) colleges in India recognized by the DCI. Get expert admission counseling and guidance with Careerview." />
      </Head>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Top BDS Colleges in India
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Pursue dentistry from India's highest-ranked dental institutes recognized by the Dental Council of India (DCI).
        </p>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        
        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Your Journey in Dentistry</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A career in dental surgery offers immense professional growth and the opportunity to make a tangible difference in healthcare. Choosing the right institution is the first critical step. <strong>Careerview</strong> brings you a meticulously curated list of the top dental colleges in India, evaluated on academic excellence, clinical exposure, infrastructure, and placement records.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Navigating the NEET-UG counseling process for a BDS seat can be overwhelming. Our expert counselors are dedicated to helping you find the perfect college that aligns with your competitive scores and career aspirations. Explore the rankings below to find your ideal academic destination.
          </p>
        </div>

        {/* Top Colleges Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-blue-900 text-white px-6 py-5 border-b border-blue-800">
            <h2 className="text-xl font-bold text-center">Indian Dental Colleges And Universities Rankings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-blue-50 text-blue-900 text-sm uppercase tracking-wider border-b border-blue-100">
                  <th className="px-6 py-4 font-bold text-center w-24">Rank</th>
                  <th className="px-6 py-4 font-bold">Institution Name</th>
                  <th className="px-6 py-4 font-bold">City</th>
                  <th className="px-6 py-4 font-bold">State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bdsCollegesData.map((college, index) => (
                  <tr key={index} className="hover:bg-blue-50/50 transition duration-150">
                    <td className="px-6 py-4 font-bold text-gray-900 text-center">{college.rank}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{college.name}</td>
                    <td className="px-6 py-4 text-gray-600">{college.city}</td>
                    <td className="px-6 py-4 text-gray-600">{college.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions (BDS Admissions)</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start">
                  <span className="text-blue-600 mr-2">Q.</span> {faq.question}
                </h3>
                <p className="text-gray-600 ml-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-10 text-center max-w-4xl mx-auto shadow-sm">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Need Help with BDS Admissions?</h2>
          <p className="text-blue-800 mb-8 text-lg">
            Don't leave your medical career to chance. Talk to our expert counselors at <strong>Careerview</strong> today for personalized guidance, fee structure details, and admission support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <a href="tel:+916264553973" className="flex items-center justify-center bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Us: +91 62645-53973
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}