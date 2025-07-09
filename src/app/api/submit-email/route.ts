import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(request: NextRequest) {
  try {
    const { email, type } = await request.json();

    if (!email || !type) {
      return NextResponse.json(
        { error: 'Email and type are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check for required environment variables
    if (!process.env.GOOGLE_SHEETS_PRIVATE_KEY || !process.env.GOOGLE_SHEETS_CLIENT_EMAIL || !process.env.GOOGLE_SHEETS_SHEET_ID) {
      console.error('Missing required Google Sheets environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Initialize Google Sheets API
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    // Get the first sheet (make sure it has headers: Timestamp, Email, Type, Source)
    const sheet = doc.sheetsByIndex[0];

    // Add the new row
    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Email: email,
      Type: type,
      Source: 'StudySpot Landing Page'
    });

    return NextResponse.json(
      { message: 'Email submitted successfully' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error submitting email:', error);
    
    // Provide more specific error messages
    if (error.response?.status === 403) {
      const message = error.response?.data?.error?.message || error.message;
      if (message.includes('API has not been used') || message.includes('is disabled')) {
        return NextResponse.json(
          { error: 'Google Sheets API is not enabled. Please enable it in Google Cloud Console.' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to submit email. Please try again later.' },
      { status: 500 }
    );
  }
}