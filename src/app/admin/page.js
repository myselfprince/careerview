'use client';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [newCollege, setNewCollege] = useState({ name: '', location: '', established: '', seats: '', feeStructure: '' });

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const res = await fetch('/api/leads');
    const data = await res.json();
    if (data.success) setLeads(data.data);
  };

  const handleAddCollege = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/colleges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCollege),
    });
    if (res.ok) {
      alert('College Added!');
      setNewCollege({ name: '', location: '', established: '', seats: '', feeStructure: '' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">Admin Dashboard</h1>
      
      {/* Add College Form */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Add New College</h2>
        <form onSubmit={handleAddCollege} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="College Name" required className="border p-2 rounded" value={newCollege.name} onChange={(e) => setNewCollege({...newCollege, name: e.target.value})} />
          <input type="text" placeholder="Location (e.g., Patna, Bihar)" required className="border p-2 rounded" value={newCollege.location} onChange={(e) => setNewCollege({...newCollege, location: e.target.value})} />
          <input type="text" placeholder="Established Year" className="border p-2 rounded" value={newCollege.established} onChange={(e) => setNewCollege({...newCollege, established: e.target.value})} />
          <input type="number" placeholder="Number of Seats" className="border p-2 rounded" value={newCollege.seats} onChange={(e) => setNewCollege({...newCollege, seats: e.target.value})} />
          <input type="text" placeholder="Fee Structure (e.g., 10K / Year)" className="border p-2 rounded" value={newCollege.feeStructure} onChange={(e) => setNewCollege({...newCollege, feeStructure: e.target.value})} />
          <button type="submit" className="bg-green-600 text-white p-2 rounded md:col-span-2 hover:bg-green-700">Add College to Database</button>
        </form>
      </section>

      {/* View Leads */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Student Inquiries (Leads)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Phone</th>
                <th className="p-3 border-b">City</th>
                <th className="p-3 border-b">Date Submitted</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead._id} className="border-b">
                  <td className="p-3">{lead.fullName}</td>
                  <td className="p-3 text-blue-600"><a href={`tel:${lead.phone}`}>{lead.phone}</a></td>
                  <td className="p-3">{lead.city}</td>
                  <td className="p-3">{new Date(lead.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}