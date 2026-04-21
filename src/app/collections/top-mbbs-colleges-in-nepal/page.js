import React from 'react';
import Head from 'next/head';

// --- Data Structures ---

const quickFacts = [
  { label: "Course Duration", value: "5.5 Years (Includes 1-Year Internship)" },
  { label: "Academic Intake", value: "September" },
  { label: "Eligibility", value: "50-60% in PCB (10+2) & NEET Qualified" },
  { label: "Medium of Teaching", value: "English" },
  { label: "Total Tuition Fees", value: "₹45 Lakhs - ₹60 Lakhs" },
  { label: "Living Expenses", value: "₹10,000 - ₹15,000 / Month" },
  { label: "Recognitions", value: "NMC, WHO, FAIMER, UNESCO" },
  { label: "Currency Exchange", value: "1 NPR ≈ 0.62 INR" },
];

const topColleges = [
  "Institute of Medicine (IOM), Kathmandu",
  "Nepal Medical College, Kathmandu",
  "Nepal Army Institute of Health Sciences, Kathmandu",
  "College of Medical Sciences (COMS), Bharatpur",
  "Kathmandu University School of Medical Sciences",
  "Kist Medical College, Kathmandu",
  "Chitwan Medical College, Bharatpur",
  "Birat Medical College, Biratnagar",
  "Gandaki Medical College, Pokhara",
  "Kathmandu Medical College, Kathmandu",
  "Universal Medical College, Bhairahawa",
  "Manipal College of Medical Sciences, Pokhara",
  "National Medical College, Birgunj",
  "Nepalgunj Medical College, Nepalgunj",
  "Janaki Medical College, Janakpur",
  "Lumbini Medical College, Palpa",
  "Nobel Medical College, Biratnagar",
  "Devdaha Medical College, Devdaha",
  "B & C Medical College, Birtamode"
];

const livingCosts = [
  { item: "Milk (1 Liter)", cost: "₹ 63.00" },
  { item: "White Bread (Loaf)", cost: "₹ 42.00" },
  { item: "White Rice (1kg)", cost: "₹ 64.00" },
  { item: "Eggs (Dozen)", cost: "₹ 124.00" },
  { item: "Apples (1kg)", cost: "₹ 195.00" },
  { item: "Potatoes / Onions (1kg)", cost: "₹ 35.00 - ₹ 51.00" },
  { item: "Local Transport (One-way)", cost: "₹ 19.00" },
  { item: "Monthly Transport Pass", cost: "₹ 932.00" },
];

const admissionSteps = [
  { title: "Initial Consultation", desc: "Connect with Careerview experts to evaluate your profile, NEET score, and budget preferences." },
  { title: "Documentation", desc: "Submit 10th/12th mark sheets, NEET scorecard, passport copies, and birth certificates for verification." },
  { title: "Application Submission", desc: "We help you fill out and submit official applications to your chosen Nepalese medical universities." },
  { title: "Admission Letter", desc: "Receive your official acceptance/invitation letter from the university." },
  { title: "Visa & Travel Processing", desc: "As an Indian student, visa requirements are minimal, but we assist with all cross-border documentation and travel arrangements." },
  { title: "Arrival & Onboarding", desc: "Careerview ensures a smooth transition with airport pickups and campus onboarding in Nepal." },
];

const faqs = [
  {
    question: "Will my Nepalese MBBS degree be valid in India and globally?",
    answer: "Absolutely. Degrees from top Nepalese medical universities are recognized by the National Medical Commission (NMC) of India, the World Health Organization (WHO), and FAIMER. After graduating, you simply need to clear the FMGE/NEXT exam to practice in India."
  },
  {
    question: "Is the medium of instruction English or Nepali?",
    answer: "The entire MBBS curriculum in Nepalese medical colleges is taught in English. However, learning basic conversational Nepali is encouraged as it helps significantly during your clinical rotations and hospital internships when interacting with local patients."
  },
  {
    question: "Do I need to clear IELTS or TOEFL to study in Nepal?",
    answer: "No, Indian students are not required to take English proficiency tests like IELTS or TOEFL to secure MBBS admission in Nepal."
  },
  {
    question: "How expensive is it to live in Nepal as an international student?",
    answer: "Nepal is highly affordable. On average, a student spends between ₹10,000 to ₹15,000 per month on accommodation, food, and daily travel, making it one of the most budget-friendly destinations for medical studies."
  },
  {
    question: "What are the academic requirements to apply via Careerview?",
    answer: "You must be at least 17 years old, have scored a minimum of 50-60% aggregate in Physics, Chemistry, and Biology in your 12th boards, and possess a valid, qualifying NEET-UG scorecard."
  }
];

export default function StudyMbbsInNepalPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Head>
        <title>Study MBBS in Nepal 2026-27 | Fees, Colleges & Admission | Careerview</title>
        <meta name="description" content="Pursue your medical dreams with an MBBS in Nepal. Get comprehensive details on fees, NMC-approved colleges, syllabus, and admission process with Careerview." />
      </Head>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-emerald-100 text-emerald-800 font-bold px-4 py-1.5 rounded-full text-xs tracking-wider uppercase mb-4">
            Admissions Open 2026-27
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Study MBBS in Nepal
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience world-class medical education right next door. Nepal offers Indian students NMC-approved curricula, English-medium instruction, and unparalleled clinical exposure at highly affordable tuition fees.
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:+916264553973" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition">
              Call Experts: +91 62645-53973
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left/Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Quick Facts */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-3">MBBS in Nepal at a Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex flex-col bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-sm text-slate-500 font-medium mb-1">{fact.label}</span>
                  <span className="text-slate-900 font-semibold">{fact.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Why Nepal Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Nepal for Your Medical Degree?</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 prose max-w-none text-slate-600">
              <p className="mb-4">
                For Indian students, Nepal represents the perfect balance of quality education and geographical convenience. The medical syllabus closely mirrors the Indian curriculum, making it significantly easier for students to clear the FMGE/NEXT licensing exams upon their return.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>No Language Barrier:</strong> Classes are conducted entirely in English.</li>
                <li><strong>Cultural Similarity:</strong> The food, lifestyle, and weather are nearly identical to northern India, preventing homesickness.</li>
                <li><strong>No Visa Hassles:</strong> Indian citizens do not require a passport or visa to travel to and study in Nepal.</li>
                <li><strong>Global Recognition:</strong> Degrees are respected globally, allowing graduates to pursue USMLE (USA) or PLAB (UK).</li>
              </ul>
            </div>
          </section>

          {/* Top Colleges List */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Medical Universities in Nepal</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                {topColleges.map((college, idx) => (
                  <div key={idx} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-sm font-medium">{college}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cost of Living Table */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Estimated Cost of Living (Monthly)</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-sm">Item / Service</th>
                    <th className="px-6 py-4 font-semibold text-sm text-right">Approximate Cost (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {livingCosts.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm text-slate-700">{item.item}</td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 text-right">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Admission Process */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Careerview Admission Process</h2>
            <div className="space-y-4">
              {admissionSteps.map((step, idx) => (
                <div key={idx} className="flex bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start">
                    <span className="text-blue-600 mr-3">Q.</span> 
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 ml-7 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            
            {/* Primary Contact Widget */}
            <div className="bg-blue-900 rounded-2xl shadow-xl text-white p-8 text-center">
              <h3 className="font-extrabold text-2xl mb-3">Begin Your Medical Journey Today!</h3>
              <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                Connect with Careerview's expert counselors for a free profile assessment. Let us handle your admission to top universities in Nepal.
              </p>
              
              <a href="tel:+916264553973" className="flex items-center justify-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl shadow-md hover:bg-slate-50 transition mb-4">
                Call: +91 62645-53973
              </a>
              <a href="https://wa.me/916264553973" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:bg-emerald-400 transition">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.098.824z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Inquiry Form Widget */}
            {/* <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Request Free Counseling</h3>
              <p className="text-sm text-slate-500 mb-5">Drop your details below and our team will contact you within 24 hours.</p>
              
              <form className="space-y-4">
                <div>
                  <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition" placeholder="Full Name" required />
                </div>
                <div>
                  <input type="tel" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition" placeholder="Phone Number" required />
                </div>
                <div>
                  <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition" placeholder="Current City" required />
                </div>
                <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg text-sm transition">
                  Send Request
                </button>
              </form>
            </div>
             */}
          </div>
        </div>

      </main>
    </div>
  );
}