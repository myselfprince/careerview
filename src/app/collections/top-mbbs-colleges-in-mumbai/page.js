import React from 'react';

export const metadata = {
  title: 'Top MBBS Colleges in Mumbai 2026 | Fees & Admissions | Careerview',
  description: 'Discover the best government and private MBBS colleges in Mumbai for 2026. Get expert admission guidance, fee structures, and placement details with Careerview.',
};

// --- Structured Data for Careerview ---

const highlightsData = [
  { label: "Total MBBS Colleges", value: "15+ Institutions" },
  { label: "Accepted Entrance Exam", value: "NEET UG 2026" },
  { label: "Top Colleges", value: "Dr. D. Y. Patil Vidyapeeth, Grant Medical College, KJ Somaiya, MGM Institute" },
  { label: "Overall Fee Range", value: "₹6 Lakhs - ₹1.5 Crores (Total Course)" },
  { label: "Approval & Affiliation", value: "NMC Approved, MUHS / Mumbai University Affiliated" }
];

const privateColleges = [
  { name: "Padmashree Dr. D. Y. Patil Vidyapeeth", type: "Private", fees: "₹ 1.49 Cr.", seats: 250 },
  { name: "KJ Somaiya Medical College", type: "Private", fees: "₹ 49.09 Lakh", seats: 100 },
  { name: "Terna Medical College", type: "Private", fees: "₹ 32.32 Lakh", seats: 150 },
  { name: "MGM Medical College, Navi Mumbai", type: "Private", fees: "₹ 94.50 Lakh", seats: 50 },
  { name: "MGM Institute of Health Sciences", type: "Private", fees: "₹ 91.00 Lakh", seats: 500 }
];

const govtColleges = [
  { name: "Grant Medical College", type: "Government", fees: "₹ 7.61 Lakh", seats: 250 },
  { name: "Lokmanya Tilak Municipal Medical College", type: "Government", fees: "₹ 6.22 Lakh", seats: 200 },
  { name: "H.B.T. Medical College & Dr. R.N. Cooper Hospital", type: "Government", fees: "₹ 6.22 Lakh", seats: 200 },
  { name: "Rajiv Gandhi Medical College, Thane", type: "Government", fees: "₹ 6.22 Lakh", seats: 100 },
  { name: "Seth GS Medical College and KEM Hospital", type: "Government", fees: "₹ 6.62 Lakh", seats: "NA" },
  { name: "Topiwala National Medical College", type: "Government", fees: "₹ 6.62 Lakh", seats: "NA" }
];

const placementData = [
  { name: "MGM Institute of Health Sciences", avgPackage: "₹ 10.00 LPA", recruiters: "Top Hospitals & Research Centers" },
  { name: "Padmashree Dr. D. Y. Patil Vidyapeeth", avgPackage: "₹ 9.50 LPA", recruiters: "Corporate Hospitals, Pharma Companies" }
];

const faqs = [
  {
    question: "What is the minimum eligibility to apply for MBBS in Mumbai?",
    answer: "Aspirants must be at least 17 years old by December 31, 2026. Academically, you need to clear your Class 12 (10+2) board exams with a minimum of 50% aggregate in Physics, Chemistry, and Biology (PCB), and successfully qualify the NEET UG entrance exam."
  },
  {
    question: "Is NEET mandatory for private medical colleges in Mumbai?",
    answer: "Yes. Whether you are applying to a prestigious government institution like Grant Medical College or a top private university like KJ Somaiya, qualifying the NEET UG exam is strictly mandatory for MBBS admissions across India."
  },
  {
    question: "Why is there such a massive fee difference between colleges?",
    answer: "Government and municipal colleges (like Lokmanya Tilak or KEM) are heavily subsidized by the state, keeping fees around ₹6-8 Lakhs for the entire course. Private and Deemed universities (like DY Patil or MGM) are self-funded, offering premium infrastructure and clinical facilities, which brings their fee range from ₹30 Lakhs to over ₹1 Crore."
  },
  {
    question: "How can Careerview assist me in securing a medical seat in Mumbai?",
    answer: "The admission process can be highly competitive. Careerview provides personalized counseling based on your NEET score, budget constraints, and preferences. We help you navigate the complex counseling rounds, choice filling, and documentation to maximize your chances of getting the best possible college."
  }
];

export default function MumbaiMbbsCollegesPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-xs tracking-wide uppercase mb-4 shadow-sm">
            Admissions 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Best MBBS Colleges in Mumbai
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Mumbai Metropolitan Region (MMR) is a premier hub for medical education, offering an excellent blend of top-tier government, municipal, and private institutions. Discover your path to becoming a doctor with Careerview.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left/Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Key Highlights */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Key Highlights: Medical Education in Mumbai</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mumbai's medical colleges are strictly approved by the National Medical Commission (NMC) and offer world-class clinical exposure due to the city's vast healthcare infrastructure. Graduates from these institutions frequently secure roles as physicians, critical care specialists, and clinical researchers in top-tier hospitals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlightsData.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="block text-sm text-gray-500 font-medium mb-1">{item.label}</span>
                  <span className="block text-gray-900 font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Government Colleges Table */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Government MBBS Colleges</h2>
            <p className="text-gray-600 mb-4 text-sm">Admission to these institutions is highly competitive, strictly based on NEET UG merit and state quota counseling. They offer exceptional clinical exposure at highly subsidized fees.</p>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-sm">Institution Name</th>
                      <th className="px-6 py-4 font-semibold text-sm text-center">Seat Intake</th>
                      <th className="px-6 py-4 font-semibold text-sm text-right">Total Tuition Fee (Approx)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {govtColleges.map((college, idx) => (
                      <tr key={idx} className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-800">{college.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">{college.seats}</td>
                        <td className="px-6 py-4 text-sm font-bold text-green-700 text-right">{college.fees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Private Colleges Table */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Private MBBS Colleges</h2>
            <p className="text-gray-600 mb-4 text-sm">Private and Deemed universities in Mumbai are renowned for their modern infrastructure, advanced research facilities, and excellent campus amenities.</p>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                  <thead className="bg-indigo-900 text-white">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-sm">Institution Name</th>
                      <th className="px-6 py-4 font-semibold text-sm text-center">Seat Intake</th>
                      <th className="px-6 py-4 font-semibold text-sm text-right">Total Tuition Fee (Approx)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {privateColleges.map((college, idx) => (
                      <tr key={idx} className="hover:bg-indigo-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-800">{college.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">{college.seats}</td>
                        <td className="px-6 py-4 text-sm font-bold text-indigo-700 text-right">{college.fees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

           {/* Placements Section */}
           <section className="bg-blue-50 rounded-2xl border border-blue-100 p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Career Prospects & Placements</h2>
            <p className="text-blue-800 mb-6 leading-relaxed">
              Upon completing their mandatory 1-year internship, MBBS graduates from Mumbai are highly sought after by top pharmaceutical companies, multi-specialty hospital chains, and research institutes. Standard roles include Junior Doctors, Medical Consultants, and Resident Medical Officers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {placementData.map((data, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-2">{data.name}</h4>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-500">Average Package:</span>
                    <span className="font-bold text-green-600">{data.avgPackage}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-blue-600 mr-3 text-xl leading-none">Q.</span> 
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-7 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            
            {/* Primary Contact Widget */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl text-white p-8 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="font-extrabold text-2xl mb-2">Need Expert Admission Help?</h3>
              <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                Don't navigate the competitive NEET counseling alone. Talk to Careerview experts today for a free profile evaluation and secure your seat.
              </p>
              
              <a href="tel:+916264553973" className="flex items-center justify-center bg-white text-blue-700 font-bold py-3.5 px-4 rounded-xl shadow-md hover:bg-gray-50 transition transform hover:-translate-y-0.5 mb-3">
                Call: +91 62645-53973
              </a>
              <a href="https://wa.me/916264553973" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-green-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:bg-green-400 transition transform hover:-translate-y-0.5">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.098.824z"/></svg>
                WhatsApp Us
              </a>
            </div>

            {/* Quick Form Widget */}
            {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Request a Callback</h3>
              <p className="text-sm text-gray-500 mb-5">Drop your details and we'll reach out shortly.</p>
              
              <form className="space-y-4">
                <div>
                  <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition" placeholder="Student Name" required />
                </div>
                <div>
                  <input type="tel" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition" placeholder="WhatsApp Number" required />
                </div>
                <div>
                  <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition" placeholder="Expected NEET Score (Optional)" />
                </div>
                <button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-lg text-sm transition">
                  Submit Details
                </button>
              </form>
            </div> */}
            
          </div>
        </div>

      </main>
    </div>
  );
}