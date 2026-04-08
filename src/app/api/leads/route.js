//src/app/api/leads/route.js

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const newLead = await Lead.create(data);
    return NextResponse.json({ success: true, data: newLead }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: leads });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}