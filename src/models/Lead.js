// src/models/Lead.js
import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);