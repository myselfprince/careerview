import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import College from '@/models/College';

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const newCollege = await College.create(data);
    return NextResponse.json({ success: true, data: newCollege }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const colleges = await College.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: colleges });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}