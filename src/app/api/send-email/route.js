// A:\AJ\web development\FINAL YEAR PROJECT\smart-water-tank\src\app\api\send-email\route.js

import { NextResponse } from "next/server";
import { sendEmail } from '../../../components/email';

export async function POST(request, response){
    try {
      const { subject, message } = await request.json();
     
      await sendEmail(subject, message);
      return NextResponse.json( { success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ success: false, message: 'Failed to send email' });
    }
  }
