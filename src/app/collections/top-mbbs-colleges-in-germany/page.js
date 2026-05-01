// app/mbbs-in-germany/page.js

import React from 'react';

export default function MBBSGermanyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MBBS Admission in Germany 2026-27</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Affordable Colleges with Smooth Admission Process, High-Quality Education, and Global Recognition.
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
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Study MBBS in Germany</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Get 100% satisfaction with our admission guidance for MBBS in Germany for Indian students. We help with college and university selection, affordable fee structures, hostels, and more – all under budget. Germany is known for its high-quality education system, which is highly valued around the world. Most public universities offer free or low tuition fees, making it an incredibly affordable option for international students.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Apply to the university either directly or through an authorized representative of <strong>{brandName}</strong>. With proper support, students can unlock a world of opportunities that come with a degree from a reputable German university.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Germany at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Course Duration", value: "6 years" },
              { title: "Eligibility", value: "NEET Qualified, PCB 60%" },
              { title: "MBBS Fees", value: "₹ 3-4 Lakhs (Varies)" },
              { title: "Cost of Living", value: "₹12,000–₹18,000 / month" },
              { title: "Teaching Medium", value: "German / English" },
              { title: "IELTS & TOEFL", value: "Not Required" },
              { title: "Age Limit", value: "17-25 years" },
              { title: "Recognitions", value: "NMC, WHO, FAIMER" }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 border border-blue-100 rounded-lg p-5 text-center flex flex-col justify-center">
                <h3 className="text-sm font-semibold text-blue-800 uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-lg font-bold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Why Study MBBS in Germany in 2026-27?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyGermany.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col">
                <h3 className="text-lg font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top 10 Universities List */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Top 10 Medical Universities in Germany</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {top10Universities.map((uni, idx) => (
              <div key={idx} className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                <h3 className="font-bold text-lg text-blue-900">{uni.name}</h3>
                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                  <li><strong>Founded:</strong> {uni.founded}</li>
                  <li><strong>Address:</strong> {uni.address}</li>
                  <li><strong>Phone:</strong> {uni.phone}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Admission & Eligibility Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Admission Procedure */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Admission Procedure</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
              <li><strong>Research:</strong> Find universities fitting your location, language, and fee preferences.</li>
              <li><strong>Check Eligibility:</strong> Ensure academic, language (German), and financial requirements are met.</li>
              <li><strong>Prepare Documents:</strong> Gather transcripts, language tests, CV, and certificates.</li>
              <li><strong>Apply:</strong> Submit via the university's online portal and pay any application fees.</li>
              <li><strong>Aptitude Test:</strong> Clear tests like TMS (Test for Medical Studies) if required.</li>
              <li><strong>Interview:</strong> Clear university interviews assessing motivation and communication.</li>
              <li><strong>Admission Decision:</strong> Confirm acceptance and pay initial deposits.</li>
              <li><strong>Visa Application:</strong> Apply for a German student visa via the embassy.</li>
            </ol>
            <p className="mt-4 text-sm text-blue-800 font-semibold">
              Contact {brandName} experts at {phone1} to simplify this process!
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Eligibility Criteria</h2>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li><strong>Academic Qualifications:</strong> Minimum 60% in Physics, Chemistry, and Biology (PCB) in 12th grade.</li>
              <li><strong>NEET:</strong> Must be NEET qualified.</li>
              <li><strong>Language Proficiency:</strong> Must pass tests like TestDaF, DSH, or Goethe-Zertifikat as German is the primary language of instruction.</li>
              <li><strong>Entrance Qualification:</strong> Recognized qualification such as Abitur, IB, or equivalent.</li>
              <li><strong>Health & Finance:</strong> Valid health insurance and proof of financial resources for living expenses.</li>
            </ul>
          </div>
        </div>

        {/* Expenses Tables */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <h2 className="text-2xl font-bold text-blue-900">Estimated Expenses in Germany (INR)</h2>
            <p className="text-gray-600 mt-2 text-sm">Average cost of living is between ₹12,000 to ₹18,000 per month.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h3 className="font-bold text-lg text-blue-800 mb-4">Food & Groceries</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>Milk (1 liter)</span> <span>₹ 107.88</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>Bread (500g)</span> <span>₹ 181.60</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>Rice (1kg)</span> <span>₹ 260.62</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>Eggs (12)</span> <span>₹ 297.03</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>Local Cheese (1kg)</span> <span>₹ 1,128.17</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>Chicken/Meat (1kg)</span> <span>₹ 750 - 900</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>Vegetables (Potato/Onion 1kg)</span> <span>₹ 150 - 170</span></li>
              </ul>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-blue-800 mb-4">Travel & Transport</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>One-way Ticket (Local)</span> <span>₹ 285.80</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>Monthly Pass</span> <span>₹ 4,464.67</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>Taxi Start</span> <span>₹ 446.56</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-1"><span>Taxi 1km</span> <span>₹ 205.37</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scholarships & Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Scholarships in Germany</h2>
            <p className="text-gray-700 text-sm mb-4">Several scholarships help international students cover tuition and living expenses:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li><strong>DAAD Scholarship:</strong> Covers tuition, living, and health insurance.</li>
              <li><strong>Heinrich Böll Foundation:</strong> For students with strong academics and social commitment.</li>
              <li><strong>Konrad-Adenauer-Stiftung:</strong> Focuses on democracy and social justice commitment.</li>
              <li><strong>Deutschlandstipendium:</strong> Merit-based, provides a monthly stipend.</li>
              <li><strong>University of Freiburg Int. Scholarship:</strong> Covers tuition and living expenses.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Required Documents</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Completed University Application Form</li>
              <li>10th & 12th Marksheets / High School Diploma</li>
              <li>NEET Scorecard</li>
              <li>Language Proficiency Certificate (TestDaF, IELTS/TOEFL)</li>
              <li>Valid Passport & Visa Documents</li>
              <li>Letter of Motivation & detailed CV</li>
              <li>Letter(s) of Recommendation</li>
              <li>Proof of Financial Means & Health Insurance</li>
              <li>Medical Fitness Certificate</li>
            </ul>
          </div>
        </div>

        {/* Pros and Cons */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Advantages & Challenges for Indian Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-bold text-green-800 mb-4">Advantages</h3>
              <ul className="space-y-3 text-sm text-green-900">
                <li>✅ <strong>High-Quality Education:</strong> Rigorous academic standards and comprehensive training.</li>
                <li>✅ <strong>Prestigious Universities:</strong> Globally recognized medical schools.</li>
                <li>✅ <strong>Cutting-Edge Facilities:</strong> Access to state-of-the-art labs and teaching hospitals.</li>
                <li>✅ <strong>Clinical Experience:</strong> Deep emphasis on hands-on internships and hospital rotations.</li>
                <li>✅ <strong>International Recognition:</strong> Degree respected worldwide, unlocking global careers.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4">Challenges</h3>
              <ul className="space-y-3 text-sm text-red-900">
                <li>⚠️ <strong>Language Barrier:</strong> High proficiency in German is mandatory for clinical phases and many classes.</li>
                <li>⚠️ <strong>Fierce Competition:</strong> Limited seats with stringent admission criteria and entrance exams.</li>
                <li>⚠️ <strong>Financial Considerations:</strong> Living expenses must be covered independently.</li>
                <li>⚠️ <strong>Cultural Adjustment:</strong> Adapting to a highly different academic and social environment.</li>
                <li>⚠️ <strong>Length of Study:</strong> The program and specialization takes dedication over many years.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full List of 40 Colleges (Dropdown/Accordion to save space) */}
        <details className="bg-white border border-gray-200 rounded-lg group">
          <summary className="p-6 font-bold text-xl cursor-pointer text-blue-900 group-open:border-b border-gray-200">
            View All 40 Medical Universities in Germany
          </summary>
          <div className="p-6 bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-700">
            {allColleges.map((college, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="font-semibold">{idx + 1}.</span> {college}
              </div>
            ))}
          </div>
        </details>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">{brandName} Admissions FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="p-4 font-semibold cursor-pointer text-gray-800 group-open:text-blue-700">
                  {faq.q}
                </summary>
                <div className="p-4 border-t border-gray-200 text-gray-600 text-sm">
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

// Data Arrays mapped from provided text

const whyGermany = [
  { title: "Low/No Tuition Fees", desc: "Most public universities offer free or extremely low tuition fees, making it an affordable option." },
  { title: "Cutting-Edge Research", desc: "German universities are known for their strong focus on research, offering student participation." },
  { title: "International Recognition", desc: "A degree from a German university is highly recognized worldwide, opening global doors." },
  { title: "English-Taught Programs", desc: "Some universities offer English-taught initial programs, easing the transition for students." },
  { title: "Advanced Healthcare", desc: "Experience learning inside one of the most advanced and well-funded healthcare systems globally." },
  { title: "Safe & Stable", desc: "Germany is highly safe and multicultural, offering a secure and exciting environment to live and study." }
];

const top10Universities = [
  { name: "Charité - Universitätsmedizin Berlin", founded: "1710", address: "Charitéplatz 1, 10117 Berlin", phone: "+49 30 45050" },
  { name: "Heidelberg University", founded: "1386", address: "Im Neuenheimer Feld 672, Heidelberg", phone: "+49 6221 56-0" },
  { name: "LMU Munich", founded: "1472", address: "Pettenkoferstraße 9, 80336 Munich", phone: "+49 89 4400" },
  { name: "Ruprecht-Karls-Universität Heidelberg", founded: "1386", address: "Grabengasse 1, Heidelberg", phone: "+49 6221 54-0" },
  { name: "Humboldt University of Berlin", founded: "1809", address: "Charitéplatz 1, 10117 Berlin", phone: "+49 30 45050" },
  { name: "Freiburg University", founded: "1457", address: "Killianstraße 5, Freiburg", phone: "+49 761 2030" },
  { name: "University of Tübingen", founded: "1477", address: "Geschwister-Scholl-Platz, Tübingen", phone: "+49 7071 29-0" },
  { name: "RWTH Aachen University", founded: "1966", address: "Pauwelsstraße 30, Aachen", phone: "+49 241 80-0" },
  { name: "University of Bonn", founded: "1818", address: "Sigmund-Freud-Straße 25, Bonn", phone: "+49 228 287-0" },
  { name: "Goethe University Frankfurt", founded: "1914", address: "Theodor-Stern-Kai 7, Frankfurt", phone: "+49 69 6301-0" }
];

const allColleges = [
  "Charité - Universitätsmedizin Berlin", "Heidelberg University", "LMU Munich", "Ruprecht-Karls-Universität Heidelberg",
  "Humboldt University of Berlin", "Freiburg University", "University of Tübingen", "RWTH Aachen University",
  "University of Bonn", "Goethe University Frankfurt", "University of Göttingen", "University of Hamburg",
  "University of Cologne", "University of Leipzig", "University of Mainz", "University of Marburg",
  "University of Münster", "University of Würzburg", "Eberhard Karls University Tübingen", "University of Erlangen-Nuremberg",
  "Saarland University", "University of Düsseldorf", "University of Rostock", "University of Greifswald",
  "University of Regensburg", "Martin Luther University Halle-Wittenberg", "University of Jena", "University of Ulm",
  "University of Duisburg-Essen", "University of Lübeck", "University of Giessen", "University of Halle",
  "University of Kiel", "University of Witten/Herdecke", "University of Bochum", "University of Leipzig",
  "University of Magdeburg", "University of Regensburg", "University of Rostock", "University of Schleswig-Holstein Campus"
];

const faqs = [
  {
    q: "Is it possible to study MBBS in Germany as an international student?",
    a: "Yes, it is possible. However, the admission process can be highly competitive. Applicants must meet strict academic criteria and generally require strong proficiency in the German language."
  },
  {
    q: "What is the duration of the MBBS program in Germany?",
    a: "The program lasts for 6 years. It is divided into two parts: the preclinical phase (first two years) and the clinical phase (last four years)."
  },
  {
    q: "Is the MBBS program taught in English or German?",
    a: "The program is primarily taught in German, especially during the clinical years where patient interaction is required. Some universities offer initial stages in English, but learning German is practically mandatory."
  },
  {
    q: "What is the cost of studying MBBS in Germany?",
    a: "It is relatively low compared to other western countries. Public universities do not charge tuition fees; you only pay a minor semester fee. However, you must cover your own living expenses (₹12,000 to ₹18,000/month)."
  },
  {
    q: "What are the job opportunities after completion?",
    a: "Graduates have excellent opportunities working in hospitals, clinics, and research institutions across Europe. You can also return to India to practice after clearing the FMGE/NExT screening test."
  }
];