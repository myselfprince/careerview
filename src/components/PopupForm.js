import { useState } from 'react';
import { FaUser, FaPhoneAlt, FaCity, FaTimes, FaArrowRight } from 'react-icons/fa';

export default function PopupForm({ onClose }) {
  const [formData, setFormData] = useState({ fullName: '', phone: '', city: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Call your API route here (from the previous setup)
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Details submitted successfully! Our counselor will contact you.');
      setFormData({ fullName: '', phone: '', city: '' });
      onClose(); // Close the modal on success
    }
  };

  return (
    // Backdrop with a subtle blur
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      
      {/* Modal Container */}
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden relative shadow-2xl animate-fade-in-up">
        
        {/* Close Button - Placed inside a slight translucent circle for better visibility */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white z-10 p-2 bg-black/20 rounded-full hover:bg-black/40 transition"
          aria-label="Close form"
        >
          <FaTimes />
        </button>

        {/* Edge-to-Edge Red Header */}
        <div className="bg-red-600 text-white px-8 py-6 text-center">
          <h2 className="text-xl md:text-2xl font-extrabold tracking-wide leading-tight">
            NEED HELP WITH ADMISSION IN MBBS?
          </h2>
        </div>

        {/* Form Body */}
        <div className="p-8">
          <p className="text-center text-gray-600 mb-6 font-medium">
            Get a free counseling session with us.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400 group-focus-within:text-blue-600 transition-colors" />
              </div>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full pl-10 pr-3 py-3 border-b-2 border-gray-200 bg-gray-50/50 rounded-t-md focus:outline-none focus:border-blue-600 focus:bg-blue-50/30 transition-colors placeholder-gray-500 text-gray-900 font-medium"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            {/* Phone Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhoneAlt className="text-gray-400 group-focus-within:text-blue-600 transition-colors" />
              </div>
              <input
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full pl-10 pr-3 py-3 border-b-2 border-gray-200 bg-gray-50/50 rounded-t-md focus:outline-none focus:border-blue-600 focus:bg-blue-50/30 transition-colors placeholder-gray-500 text-gray-900 font-medium"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            {/* City Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCity className="text-gray-400 group-focus-within:text-blue-600 transition-colors" />
              </div>
              <input
                type="text"
                required
                placeholder="City"
                className="w-full pl-10 pr-3 py-3 border-b-2 border-gray-200 bg-gray-50/50 rounded-t-md focus:outline-none focus:border-blue-600 focus:bg-blue-50/30 transition-colors placeholder-gray-500 text-gray-900 font-medium"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all flex justify-center items-center gap-2 group/btn"
            >
              SUBMIT <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}