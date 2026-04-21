import React from 'react';
import Head from 'next/head';

// --- Data Structures ---

const overviewData = [
  { label: "Admission Name", value: "Uttar Pradesh MBBS College Admission 2026" },
  { label: "Counseling Authority", value: "Directorate General of Medical Education and Training (UPDGME)" },
  { label: "Mode Of Admission", value: "Online Counseling" },
  { label: "Entrance Exam", value: "NEET UG 2026 (Conducted by NTA)" },
  { label: "Official Website", value: "https://upneet.gov.in/" },
  { label: "Total Government Colleges", value: "48 (Approx. 5725 Seats)" },
  { label: "Total Private Colleges", value: "41 (Approx. 7700 Seats)" },
];

const govtCollegesFees = [
  { name: "KGMU, Lucknow", fee: "₹ 18,000" },
  { name: "Dr. R.M.L Institute of Medical Sciences, Lucknow", fee: "₹ 18,000" },
  { name: "Autonomous State Medical College, Kaushambi / Sonebhadra / Kanpur Dehat / Pilibhit / Amethi / Bijnor", fee: "₹ 18,000" },
  { name: "Kalyan Singh Government Medical College, Bulandshahr", fee: "₹ 18,000" },
  { name: "ESIC Medical College and Hospital, Noida", fee: "₹ 24,000" },
  { name: "G.S.V.M. Medical College, Kanpur", fee: "₹ 26,000" },
  { name: "M.L.N. Medical College, Prayagraj", fee: "₹ 30,000" },
  { name: "L.L.R.M. Medical College, Meerut", fee: "₹ 36,000" },
  { name: "Govt. Institute of Medical Sciences, Greater Noida", fee: "₹ 36,000" },
  { name: "S.N. Medical College, Agra / B.R.D. Gorakhpur / M.L.B. Jhansi", fee: "₹ 36,000" },
  { name: "U.P.U.M.S, Safai, Etawah", fee: "₹ 36,000" },
  { name: "Various Autonomous Medical Colleges (Ghazipur, Jaunpur, Mirzapur, Siddharth Nagar, Hardoi, Deoria, Sultanpur)", fee: "₹ 36,000" },
  { name: "Govt. Medical College (Kannauj, Saharanpur, Ambedkarnagar)", fee: "₹ 36,000" },
  { name: "Autonomous Medical College, Pratapgarh / Etah", fee: "₹ 36,600" },
  { name: "Govt. Medical College (Jalaun, Azamgarh) / Autonomous Fatehpur", fee: "₹ 40,800" },
  { name: "Govt. Medical College (Banda, Badaun)", fee: "₹ 42,000" },
  { name: "Autonomous Medical College (Ayodhya, Firozabad, Shahjahanpur)", fee: "₹ 42,000" },
  { name: "Autonomous Medical College, Basti", fee: "₹ 54,600" },
  { name: "Autonomous Medical College, Bahraich", fee: "₹ 83,600" },
];

const privateCollegesFees = [
  { name: "Prasad Institute of Medical Sciences, Lucknow", fee: "₹ 11,03,932" },
  { name: "Venkateshwara Institute of Medical Sciences, Gajraula", fee: "₹ 11,10,508" },
  { name: "Mayo Institute of Medical Sciences, Barabanki", fee: "₹ 11,21,162" },
  { name: "Saraswati Medical College, Unnao", fee: "₹ 11,59,610" },
  { name: "Krishna Mohan Medical College & Hospital, Mathura", fee: "₹ 11,73,856" },
  { name: "Saraswati Institute of Medical Sciences, Hapur", fee: "₹ 11,81,671" },
  { name: "United Institute of Medical Sciences, Prayagraj", fee: "₹ 11,90,401" },
  { name: "Naraina Medical College / SKS Hospital Medical College", fee: "₹ 12,14,683" },
  { name: "National Capital Region Institute of Medical Sciences, Meerut", fee: "₹ 12,19,917" },
  { name: "K.D. Medical College Hospital & Research Centre, Mathura", fee: "₹ 12,28,240" },
  { name: "Hind Institute of Medical Sciences, Sitapur", fee: "₹ 12,92,675" },
  { name: "Rama Medical College Hospital and Research Centre, Hapur", fee: "₹ 13,09,968" },
  { name: "Heritage Institute of Medical Sciences, Varanasi", fee: "₹ 13,21,492" },
  { name: "Shri Gorakhnath / Ajay Singhal / KMC / Siddhivinayak / Dr. B.S. Kushwah", fee: "₹ 14,14,159" },
  { name: "Subharti Medical College, Meerut", fee: "₹ 14,22,160" },
  { name: "G.S. Medical College & Hospital, Hapur", fee: "₹ 14,42,670" },
  { name: "Varuna Arjun Medical College, Shahjahanpur", fee: "₹ 14,52,000" },
  { name: "Rama Medical College and Hospital, Kanpur", fee: "₹ 15,19,895" },
  { name: "School of Medical Sciences & Research (Sharda University)", fee: "₹ 15,23,183" },
  { name: "Muzaffarnagar Medical College, Muzaffarnagar", fee: "₹ 16,72,660" },
  { name: "Hind Institute of Medical Sciences, Barabanki", fee: "₹ 16,85,681" },
  { name: "Noida International Institute of Medical Sciences, Greater Noida", fee: "₹ 17,16,784" },
  { name: "Rajshree Medical Research Institute, Bareilly", fee: "₹ 17,68,904" },
  { name: "T.S. Mishra Medical College & Hospital, Lucknow", fee: "₹ 18,70,847" },
  { name: "Rohilkhand Medical College & Hospital, Bareilly", fee: "₹ 18,72,361" },
  { name: "Shri Ram Murti Smarak Institute of Medical Sciences, Bareilly", fee: "₹ 19,78,214" },
];

const minorityCollegesFees = [
  { name: "Teerthanker Mahaveer Medical College & Research Centre, Moradabad", fee: "₹ 15,59,000" },
  { name: "Career Institute of Medical Sciences and Hospital, Lucknow", fee: "₹ 16,50,000" },
  { name: "Era Lucknow Medical College, Lucknow", fee: "₹ 16,60,000" },
  { name: "F.H. Medical College & Hospital, Agra", fee: "₹ 17,95,000" },
  { name: "Integral Institute of Medical Sciences & Research, Lucknow", fee: "₹ 18,00,000" },
];

const faqs = [
  {
    question: "What are the eligibility criteria for UP MBBS Admissions 2026?",
    answer: "Aspirants must have successfully qualified the NEET UG 2026 examination. Additionally, they must have completed their 10+2 (or equivalent) with Physics, Chemistry, and Biology, securing a minimum aggregate of 50% for General categories and 40% for reserved categories (SC/ST/OBC)."
  },
  {
    question: "Which entrance examination is mandated for medical colleges in Uttar Pradesh?",
    answer: "The National Eligibility cum Entrance Test (NEET UG) is the singular, mandatory examination required for admission into any government or private MBBS program within Uttar Pradesh."
  },
  {
    question: "Can students domiciled in UP apply for colleges in other states?",
    answer: "Absolutely. UP students can secure seats in other states through the 15% All India Quota (AIQ) counseling conducted by MCC for government colleges and deemed universities, or participate in specific state counselings for private college admissions."
  },
  {
    question: "When is the Uttar Pradesh NEET counseling expected to commence for 2026?",
    answer: "Based on previous trends, the UPDGME is expected to initiate Round 1 of the state counseling in July 2026, followed by Round 2 in August 2026. Keep an eye on the Careerview portal for exact date announcements."
  }
];

export default function UPMbbsCollegesPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Head>
        <title>Top MBBS Colleges in Uttar Pradesh 2026 | Careerview</title>
        <meta name="description" content="Comprehensive guide to MBBS admissions in Uttar Pradesh. Explore government, private, and minority college fees, cutoffs, and counseling processes." />
      </Head>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm mb-4">
            Admissions 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Top MBBS Colleges in Uttar Pradesh
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uttar Pradesh boasts a vast and highly competitive network of medical institutions. Discover top-ranked colleges, detailed fee structures, and precise cutoffs to guide your medical journey.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Content Area (Takes 2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Overview & Admission Process */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Admission Process in UP</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Directorate General of Medical Education and Training (UPDGME) is the central authority overseeing the entire MBBS and BDS admission cycle in Uttar Pradesh. From publishing counseling schedules and verifying documents to managing the seat matrix and final allotments, the UPDGME handles it all. 
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>Seat Distribution:</strong> In UP Government Medical Colleges, 15% of seats are reserved for the All India Quota (AIQ) managed by MCC, while the remaining 85% are filled via state quota counseling. For Private Medical Colleges in UP, 100% of the seats are allocated exclusively through the state quota counseling process.
            </p>
            
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-gray-200">
                  {overviewData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 border-r border-gray-200">{item.label}</td>
                      <td className="px-4 py-3 text-gray-600">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Government Colleges Fee Structure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Government Medical Colleges Fee Structure</h2>
            <p className="text-sm text-gray-500 mb-4">*Fees are subject to change based on official government notifications.</p>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-sm">Institution Name</th>
                    <th className="px-6 py-4 font-semibold text-sm text-right">Annual Tuition Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {govtCollegesFees.map((college, idx) => (
                    <tr key={idx} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{college.name}</td>
                      <td className="px-6 py-4 text-sm font-bold text-green-700 text-right">{college.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Private Colleges Fee Structure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Private Medical Colleges Fee Structure</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-indigo-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-sm">Institution Name</th>
                    <th className="px-6 py-4 font-semibold text-sm text-right">Annual Tuition Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {privateCollegesFees.map((college, idx) => (
                    <tr key={idx} className="hover:bg-indigo-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{college.name}</td>
                      <td className="px-6 py-4 text-sm font-bold text-indigo-700 text-right">{college.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

           {/* Minority Colleges Fee Structure */}
           <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Minority Medical Colleges Fee Structure</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-teal-800 text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-sm">Institution Name</th>
                    <th className="px-6 py-4 font-semibold text-sm text-right">Annual Tuition Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {minorityCollegesFees.map((college, idx) => (
                    <tr key={idx} className="hover:bg-teal-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{college.name}</td>
                      <td className="px-6 py-4 text-sm font-bold text-teal-700 text-right">{college.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Sidebar (Takes 1/3 width on large screens) */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-6">
            
            {/* Lead Form Widget */}
            {/* <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Admission Help</h3>
              <p className="text-sm text-gray-500 mb-6">Subscribe for Latest NEET 2026 Counseling Updates, Fees, & Cutoffs.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Your Full Name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number*</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="+91" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How Can We Help You?</label>
                  <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Tell us about your NEET score and target colleges..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition shadow-md">
                  Submit Inquiry
                </button>
              </form>
            </div> */}

            {/* Contact Widget */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm border border-blue-200 p-6 text-center">
              <h3 className="font-bold text-blue-900 text-lg mb-2">Free Consultation</h3>
              <p className="text-sm text-blue-800 mb-6">Talk to our Careerview experts and secure admission in top medical universities.</p>
              
              <a href="tel:+916264553973" className="flex items-center justify-center bg-white text-blue-700 font-bold py-3 px-4 rounded-lg shadow-sm border border-blue-300 hover:bg-blue-50 transition mb-3">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call: +91 62645-53973
              </a>
              <a href="https://wa.me/916264553973" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-green-500 text-white font-bold py-3 px-4 rounded-lg shadow-sm hover:bg-green-600 transition">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.098.824z"/></svg>
                WhatsApp Us
              </a>
            </div>
            
          </div>
        </div>

      </main>
    </div>
  );
}