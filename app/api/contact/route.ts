import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log('[Contact API] Received new contact form submission');
  
  let formData: { name?: string; email?: string; phone?: string; message?: string } = {};
  
  try {
    // Parse request body
    formData = await req.json();
    const { name, email, phone, message } = formData;
    console.log('[Contact API] Parsed form data:', { name, email, phone: phone || 'Not provided' });
    
    // Basic validation
    if (!name || !email || !message) {
      console.warn('[Contact API] Validation failed: Missing required fields');
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn('[Contact API] Validation failed: Invalid email format', { email });
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }
    
    console.log('[Contact API] Validation passed successfully');
    console.log('[Contact API] Attempting to send email');
    
    const emailResponse = await resend.emails.send({
      from: "Contact Form <noreply@graygaas.com>",
      to: ["info@graygaas.com"], // Your active Namecheap Private Email
      replyTo: [email],
      subject: "New Contact Form Submission",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #374151;">Message:</h3>
                <div style="background-color: #ffffff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
              <p style="font-size: 14px; color: #6b7280;">
                This email was sent from your website contact form.
              </p>
            </div>
          </body>
        </html>
      `,
    });
    
    // Check for errors in the response
    if (emailResponse.error) {
      console.error('[Contact API] Resend API error:', emailResponse.error);
      return NextResponse.json(
        { error: "Failed to send email: " + emailResponse.error.message },
        { status: 500 }
      );
    }
    
    console.log('[Contact API] Email sent successfully', {
      emailId: emailResponse.data?.id,
      recipientEmail: "info@graygaas.com"
    });
    
    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully",
      emailId: emailResponse.data?.id 
    });
    
  } catch (error) {
    const errorDetails = {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      requestData: {
        name: formData.name || 'Not provided',
        email: formData.email || 'Not provided',
        phone: formData.phone || 'Not provided'
      }
    };
    
    console.error('[Contact API] Error in request:', errorDetails);
    
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}