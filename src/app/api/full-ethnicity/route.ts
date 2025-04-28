import { NextResponse } from 'next/server';
import data from './full-ethnicity.json'; 

export async function GET() {
  return NextResponse.json(data);
}
