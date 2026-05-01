// app/mbbs-in-russia/page.js

import React from 'react';

export default function MBBSRussiaPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MBBS Admission in Russia 2026-27</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Details & Information for MBBS from Russia, Top Govt. Universities, Admission Procedure, Documents Required, Visa Procedure, Hostel Facilities, and Expenses.
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
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Study MBBS in Russia</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For many Indian students, pursuing an MBBS abroad at a low cost is an attractive option, and an MBBS in Russia fits the bill perfectly. Russian medical universities offer a robust education that adheres to international standards, making them globally recognized. The fee structure for MBBS in Russia is significantly more affordable compared to countries like the UK and the USA, with average annual expenses ranging from 2.4 Lacs to 5.1 Lacs INR. Additionally, the opportunity to gain practical experience through a compulsory one-year internship adds immense value to the educational journey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When considering MBBS abroad admission, students often seek guidance from an expert consultant to navigate the application process efficiently. With proper support from <strong>{brandName}</strong>, students can unlock a world of opportunities that come with a degree from a reputable Russian university.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">MBBS in Russia: Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Duration", value: "6 years (incl. 1 year internship)" },
              { title: "Eligibility", value: "NEET qualified, 50% in PCB" },
              { title: "Cost of Living", value: "₹12,000–₹15,000 / month" },
              { title: "Medium of Teaching", value: "English" }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 border border-blue-100 rounded-lg p-5 text-center">
                <h3 className="text-sm font-semibold text-blue-800 uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-lg font-bold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Universities Fees Table (Styled like your reference screenshot) */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <h2 className="text-2xl font-bold text-blue-900">List of Medical Universities in Russia with Fees Structure</h2>
            <p className="text-gray-600 mt-2 text-sm">Total 6 Years Budget Includes Tuition, Hostel, Medical Insurance, Visa Extension & Admission</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 font-semibold text-sm">Sr. No.</th>
                  <th className="p-4 font-semibold text-sm">Name of University</th>
                  <th className="p-4 font-semibold text-sm">Tuition Fees (1st Yr)</th>
                  <th className="p-4 font-semibold text-sm">Tuition Fees (2nd-6th Yr)</th>
                  <th className="p-4 font-semibold text-sm">Hostel Charges</th>
                  <th className="p-4 font-semibold text-sm">Total Budget (Lakhs)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {feesData.slice(0, 15).map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4">{row.id}</td>
                    <td className="p-4 font-medium text-blue-700">{row.university}</td>
                    <td className="p-4">{row.fee1}</td>
                    <td className="p-4">{row.fee2}</td>
                    <td className="p-4">{row.hostel}</td>
                    <td className="p-4 font-bold">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gray-50 text-center text-sm text-gray-500 border-t border-gray-200">
            *Showing top 15 universities. For the complete list and personalized counseling, contact {brandName} at {phone1}.
          </div>
        </div>

        {/* Why Choose Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Why Choose MBBS in Russia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyRussia.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col">
                <h3 className="text-lg font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Procedure */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Step-by-Step Admission Procedure</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>Pick your favorite MBBS University in Russia following an in-depth consultation via <strong>{brandName}</strong>.</li>
            <li>Fill in our MBBS Admissions Form and upload all necessary documents (10th, 12th marksheet, NEET scorecard).</li>
            <li>Receive an admissions letter or invitation letter from your chosen University.</li>
            <li>We will make an application to get a student Visa. You will need to provide your passport and other documentation.</li>
            <li>Pay the tuition for the first semester directly to the university. If you need an education loan, <strong>{brandName}</strong> will guide you.</li>
            <li>Pack your bags! We drop you at the airport to board the flight for Russia and begin your journey.</li>
          </ol>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">{brandName} Admissions FAQ</h2>
          <div className="space-y-4">
            <details className="bg-white border border-gray-200 rounded-lg group">
              <summary className="p-4 font-semibold cursor-pointer text-gray-800 group-open:text-blue-700">
                Is NEET mandatory for MBBS in Russia?
              </summary>
              <div className="p-4 border-t border-gray-200 text-gray-600">
                Yes, NEET qualification is mandatory for Indian students to study MBBS in Russia. Your NEET score remains valid for 3 years for abroad admissions.
              </div>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg group">
              <summary className="p-4 font-semibold cursor-pointer text-gray-800 group-open:text-blue-700">
                Are Russian medical degrees recognized in India?
              </summary>
              <div className="p-4 border-t border-gray-200 text-gray-600">
                Yes, degrees from NMC-approved universities in Russia are entirely valid in India, provided you clear the FMGE/NExT exam upon your return.
              </div>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg group">
              <summary className="p-4 font-semibold cursor-pointer text-gray-800 group-open:text-blue-700">
                What are the food and hostel facilities like?
              </summary>
              <div className="p-4 border-t border-gray-200 text-gray-600">
                Most universities provide comfortable, secure hostels. Indian mess facilities are widely available offering hygienic and authentic Indian food at affordable prices (approx. ₹7,000 to ₹15,000 monthly).
              </div>
            </details>
          </div>
        </div>

      </div>
    </div>
  );
}

// Data Arrays mapped from your provided text

const feesData = [
  { id: 1, university: "Kabardino-Balkarian State University", fee1: "3,24,000 Rub", fee2: "3,33,500 Rub", hostel: "12,000 Rub", budget: "21.80" },
  { id: 2, university: "Ural State Medical University", fee1: "3,00,000 Rub", fee2: "3,12,500 Rub", hostel: "16,000 Rub", budget: "19.80" },
  { id: 3, university: "Yaroslavl State Medical University", fee1: "3,50,000 Rub", fee2: "3,60,000 Rub", hostel: "60,000 Rub", budget: "23.81" },
  { id: 4, university: "Kemerovo State University", fee1: "2,77,000 Rub", fee2: "2,84,700 Rub", hostel: "25,000 Rub", budget: "18.84" },
  { id: 5, university: "Kirov State Medical University", fee1: "3,50,000 Rub", fee2: "3,76,000 Rub", hostel: "60,000 Rub", budget: "24.84" },
  { id: 6, university: "Petrozavodsk University", fee1: "3,13,000 Rub", fee2: "3,19,000 Rub", hostel: "18,000 Rub", budget: "21.08" },
  { id: 7, university: "Pskov Medical University", fee1: "3,40,000 Rub", fee2: "3,40,000 Rub", hostel: "Inc. in TF", budget: "20.40" },
  { id: 8, university: "Omsk State Medical University", fee1: "3,30,000 Rub", fee2: "3,40,000 Rub", hostel: "12,000 Rub", budget: "22.40" },
  { id: 9, university: "Immanuel Kant Baltic Federal", fee1: "3,15,525 Rub", fee2: "3,37,525 Rub", hostel: "20,000 Rub", budget: "22.11" },
  { id: 10, university: "Krasnoyarsk State Medical University", fee1: "3,60,000 RUB", fee2: "3,67,000 RUB", hostel: "12,000 RUB", budget: "23.97" },
  { id: 11, university: "Tver State Medical University", fee1: "4,30,000 Rub", fee2: "4,35,100 Rub", hostel: "12,000 Rub", budget: "26.67" },
  { id: 12, university: "Tambov Medical University", fee1: "3,85,000 Rub", fee2: "3,94,920 Rub", hostel: "Inc. in TF", budget: "25.43" },
  { id: 13, university: "Ulyanovsk Medical University", fee1: "3,50,000 RUB", fee2: "3,60,000 RUB", hostel: "18,000 RUB", budget: "23.49" },
  { id: 14, university: "Far Eastern Federal University", fee1: "4,95,000 Rub", fee2: "5,05,000 Rub", hostel: "40,000 Rub", budget: "32.43" },
  { id: 15, university: "St. Petersburg University", fee1: "4,90,000 RUB", fee2: "4,97,100 Rub", hostel: "36,000 Rub", budget: "31.91" }
];

const whyRussia = [
  {
    title: "Recognized Universities",
    desc: "All medical universities in Russia are accredited by the National Medical Commission (NMC), ensuring the education meets global standards. Graduates can practice medicine in India."
  },
  {
    title: "No Donation or Capitation Fees",
    desc: "Admission is based purely on merit, ensuring that students can pursue their dreams of becoming doctors without any hidden financial hurdles beyond standard tuition."
  },
  {
    title: "Affordable Tuition & Living",
    desc: "With an average tuition fee around 20-25 Lacs for a six-year program and living expenses around ₹12,000–₹15,000 per month, it is highly economical compared to Western countries."
  },
  {
    title: "English-Medium Instruction",
    desc: "Most medical universities in Russia offer courses completely in English, making it easier for Indian students to adapt right from the start without language barriers."
  },
  {
    title: "Hygienic Indian Mess Facilities",
    desc: "Students will find plenty of options for Indian cuisine. Many universities provide hygienic Indian mess facilities right within the campus hostels."
  },
  {
    title: "NEET Qualification Valid for 3 Years",
    desc: "Indian students who have qualified for the NEET examination can rest assured that their scores are valid for three years for pursuing medicine abroad."
  }
];