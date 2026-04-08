// src/models/College.js
import mongoose from 'mongoose';

const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  established: { type: String },
  seats: { type: Number },
  feeStructure: { type: String },
}, { timestamps: true });

export default mongoose.models.College || mongoose.model('College', CollegeSchema);