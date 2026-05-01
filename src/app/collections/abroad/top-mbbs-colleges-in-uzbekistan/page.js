// app/mbbs-in-uzbekistan/page.js

import React from 'react';

export default function MBBSUzbekistanPage() {
  // Environment Variables mapped as requested
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Study MBBS in Uzbekistan 2026-27</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-6">
            Affordable and easy apply. Get complete guidance from admission form filling to hostel accommodation. Study in top universities with an affordable fee structure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Overview: MBBS in Uzbekistan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uzbekistan has emerged as a top destination for Indian students looking to pursue a medical career. The tuition fees in Uzbekistan are significantly lower than in India, largely aided by favorable currency exchange rates (1 Uzbekistani Som = 0.0072 Indian Rupee). 
          </p>
          <p className="text-gray-700 leading-relaxed">
            With <strong>{brandName}</strong>, your gateway to MBBS abroad, Indian students can seamlessly transition to studying in high-quality, MCI/NMC recognized institutions featuring a safe, multicultural environment.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">MBBS Uzbekistan at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Course Duration", value: "6 Years" },
              { title: "Eligibility", value: "NEET Qualified, 60% in 12th" },
              { title: "Total Fees Range", value: "₹14 - ₹20 Lakhs" },
              { title: "Cost of Living", value: "₹15,000 - ₹18,000 / month" },
              { title: "Medium of Teaching", value: "English" },
              { title: "Age Limit", value: "17 - 25 Years" },
              { title: "Exams (IELTS/TOEFL)", value: "Not Required" },
              { title: "Recognition", value: "NMC, WHO, MCI" },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
                <h3 className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-1">{item.title}</h3>
                <p className="text-base md:text-lg font-bold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fees Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">List of Medical Universities & Fees Structure</h2>
              <p className="text-gray-600 mt-1 text-sm">Estimated budget for top medical colleges in Uzbekistan (2026-27)</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 font-semibold text-sm">Sr. No</th>
                  <th className="p-4 font-semibold text-sm">Name of University</th>
                  <th className="p-4 font-semibold text-sm">Tuition Fees (Yr)</th>
                  <th className="p-4 font-semibold text-sm">Total 1st Year</th>
                  <th className="p-4 font-semibold text-sm">2nd - 6th Year</th>
                  <th className="p-4 font-semibold text-sm">Total Budget (w/o Food)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {feesData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4">{row.id}</td>
                    <td className="p-4 font-medium text-blue-700">{row.university}</td>
                    <td className="p-4">{row.tuition}</td>
                    <td className="p-4">{row.firstYr}</td>
                    <td className="p-4">{row.remaining}</td>
                    <td className="p-4 font-bold text-green-700">{row.totalBudget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top 5 Medical Colleges Detailed */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Top 5 Medical Colleges in Uzbekistan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topColleges.map((college, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-blue-800 mb-2">{college.name}</h3>
                <p className="text-sm text-gray-600 mb-1"><strong>Founded:</strong> {college.founded}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Fees (Approx):</strong> {college.fee}</p>
                <p className="text-sm text-gray-500 mt-3">{college.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission & Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Admission Process</h2>
            <p className="text-sm text-gray-600 mb-4"><strong>{brandName}</strong> will guide you from application form filling till drop to the hostel.</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
              <li>Fill Application form in medical university in Uzbekistan.</li>
              <li>Submit all required documents to the Department of International students.</li>
              <li>Once accepted, you will receive an invitation letter from the university.</li>
              <li>Apply for a student visa at the Embassy of Uzbekistan.</li>
              <li>Attend an interview call from the embassy.</li>
              <li>Receive your student visa and book air tickets to Uzbekistan.</li>
            </ol>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Documents Required</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              <li>Scanned copy of Class 10th & 12th Certificates</li>
              <li>6 Passport size photographs with white backgrounds</li>
              <li>Duly signed complete Admission form</li>
              <li>Scanned photocopy of Passport</li>
              <li>NEET Exam Result/Admit Card</li>
              <li>Police verification certificate & Bank statement</li>
              <li>ID Proof (Aadhar card, PAN card, Driving License, etc.)</li>
              <li>Student Visa</li>
            </ul>
          </div>
        </div>

        {/* Expenses Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Daily Expenses in Uzbekistan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <h3 className="bg-gray-50 p-4 font-bold border-b border-gray-200 text-gray-800">Food Expenses (Approx. INR)</h3>
              <ul className="divide-y divide-gray-100 text-sm text-gray-700 p-4">
                <li className="flex justify-between py-2"><span>Milk (1 liter)</span> <span>₹ 94.28</span></li>
                <li className="flex justify-between py-2"><span>White Rice (1kg)</span> <span>₹ 141.29</span></li>
                <li className="flex justify-between py-2"><span>Eggs (12)</span> <span>₹ 155.78</span></li>
                <li className="flex justify-between py-2"><span>Potato/Onion (1kg)</span> <span>₹ 40 - ₹ 45</span></li>
                <li className="flex justify-between py-2"><span>Water (1.5L bottle)</span> <span>₹ 29.27</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-fit">
              <h3 className="bg-gray-50 p-4 font-bold border-b border-gray-200 text-gray-800">Travel & Transport (Approx. INR)</h3>
              <ul className="divide-y divide-gray-100 text-sm text-gray-700 p-4">
                <li className="flex justify-between py-2"><span>One-way Ticket (Local)</span> <span>₹ 10.21</span></li>
                <li className="flex justify-between py-2"><span>Monthly Pass</span> <span>₹ 996.48</span></li>
                <li className="flex justify-between py-2"><span>Taxi Start (Normal Tariff)</span> <span>₹ 51.90</span></li>
                <li className="flex justify-between py-2"><span>Taxi 1km (Normal Tariff)</span> <span>₹ 24.91</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Challenges & Things to Know */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-orange-50 rounded-xl border border-orange-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-orange-900 mb-4">Potential Challenges</h2>
            <ul className="space-y-3 text-sm text-gray-800">
              <li><strong>Language Barrier:</strong> Interacting with locals requires learning basics of Uzbek or Russian, though classes are in English.</li>
              <li><strong>Cultural Adjustment:</strong> Adapting to a new lifestyle and diet may take time.</li>
              <li><strong>Clinical Exposure:</strong> Healthcare systems vary; adaptation to local protocols is required during internships.</li>
            </ul>
          </div>
          <div className="bg-indigo-50 rounded-xl border border-indigo-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">Interesting Facts</h2>
            <ul className="space-y-3 text-sm text-gray-800">
              <li><strong>Silk Road Cities:</strong> Home to ancient historic cities like Samarkand, Bukhara, and Khiva.</li>
              <li><strong>Aral Sea:</strong> Witness to the geographic shift of the once fourth-largest lake in the world.</li>
              <li><strong>Gold Mine:</strong> Houses the Muruntau Gold Mine, the world's largest open-pit gold mine.</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">{brandName} Admissions FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="p-4 font-semibold cursor-pointer text-gray-800 group-open:text-blue-700">
                  {faq.q}
                </summary>
                <div className="p-4 border-t border-gray-200 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Data mapping 

const feesData = [
  { id: 1, university: "Fergana State Medical Institute", tuition: "3,500 USD", firstYr: "6,650 USD", remaining: "4,350 w/ hostel", totalBudget: "25,400 USD" },
  { id: 2, university: "Bukhara State Medical Institute", tuition: "3,200 USD", firstYr: "6,250 USD", remaining: "4,450 USD", totalBudget: "28,500 USD" },
  { id: 3, university: "Tashkent State Medical University", tuition: "3,500 USD", firstYr: "7,600 USD", remaining: "4,475 USD", totalBudget: "29,975 USD" },
  { id: 4, university: "Samarkand State Medical University", tuition: "3,500 USD", firstYr: "6,250 USD", remaining: "4,700 USD", totalBudget: "29,750 USD" },
  { id: 5, university: "Andijian State Medical Institute", tuition: "3,500 USD", firstYr: "7,000 USD", remaining: "5,000 USD", totalBudget: "32,000 USD" },
  { id: 6, university: "KMI- Nukus State Medical Institute", tuition: "2,900 USD", firstYr: "6,500 USD", remaining: "3,450 USD", totalBudget: "29,550 USD" },
  { id: 7, university: "Gulistan State Univ. Medical Faculty", tuition: "2,800 USD", firstYr: "6,950 USD", remaining: "4,350 USD", totalBudget: "28,700 USD" }
];

const topColleges = [
  { name: "Tashkent Medical Academy", founded: "1919", fee: "28 lakhs", address: "2, Farobi Street, Tashkent" },
  { name: "Samarkand State Medical Institute", founded: "1930", fee: "20 lakhs", address: "15, Amir Temur Street, Samarkand" },
  { name: "Bukhara State Medical Institute", founded: "1990", fee: "19.5 lakhs", address: "45, Buyuk Turon Street, Bukhara" },
  { name: "Andijan State Medical Institute", founded: "1955", fee: "19.3 lakhs", address: "60, Universitetskiy Boulevard, Andijan" },
  { name: "Tashkent Pediatric Medical Institute", founded: "1939", fee: "Varies", address: "2, Farobi Street, Tashkent" }
];

const faqs = [
  {
    q: "Is the MBBS degree from Uzbekistan recognized in India?",
    a: "Yes, the MBBS degree from universities in Uzbekistan is recognized by the Medical Council of India (MCI/NMC) and allows Indian students to practice medicine in India after completing their studies and clearing the MCI screening test / NExT."
  },
  {
    q: "What is the duration and language of the MBBS program?",
    a: "The duration is six years (five years of classroom learning and one year of clinical rotation). The language of instruction is primarily English, but students learn the local language, Uzbek, to communicate with patients during clinicals."
  },
  {
    q: "Is Uzbekistan safe for Indian students?",
    a: "Yes! The Central Asian nations, including Uzbekistan, are classified as level 1 nations by the US Department of State, meaning they are among the most secure nations in the world to visit and study in."
  },
  {
    q: "What is the fee structure for MBBS in Uzbekistan?",
    a: "The fee structure varies depending on the university and ranges from approximately $4,500 to $8,000 per year. Over 6 years, the total budget sits comfortably between ₹14 Lakhs to ₹20 Lakhs."
  }
];