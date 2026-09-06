import { NextResponse } from "next/server";

export interface CompactContactPayload {
  fullName: string;
  email: string;
  phone: string;
  service?: string;
  location?: string;
  preferredTime?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: CompactContactPayload = await request.json();

    const { fullName, email, phone, service, location, preferredTime, message } = body;

    // Basic Validation
    if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields (Full Name, Email, Phone, and Message).",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const recipient = "info@optimizedcare.org.pk";
    const timestamp = new Date().toISOString();
    const referenceId = `OC-CARE-${Date.now().toString(36).toUpperCase()}`;

    // Structure the email message content
    const emailSubject = `[Supported Care Referral] New Enquiry from ${fullName} - ${service || "General Care"}`;
    const formattedEmailBody = `
=====================================================
NEW CARE ENQUIRY - OPTIMIZEDCARE SUPPORTED SERVICES
=====================================================
Reference ID:    ${referenceId}
Received At:     ${timestamp}
Target Inbox:    ${recipient}

CLIENT DETAILS
-----------------------------------------------------
Full Name:       ${fullName}
Email Address:   ${email}
Telephone:       ${phone}
Location/Area:   ${location || "Not specified"}
Service Desired: ${service || "General Supported Living / Domiciliary"}
Preferred Time:  ${preferredTime || "Anytime"}

CARE ASSESSMENT / ENQUIRY DETAILS
-----------------------------------------------------
${message}
=====================================================
`;

    // Production logger for enquiry audit trail
    console.log(`[Compact Personnel Dispatch] Preparing email to ${recipient}:`);
    console.log(formattedEmailBody);

    /*
     * --------------------------------------------------------------------------
     * SMTP / NODEMAILER INTEGRATION HOOK
     * --------------------------------------------------------------------------
     * When you are ready to connect your SMTP credentials:
     * 1. Add to your .env.local:
     *    SMTP_HOST=smtp.yourprovider.com
     *    SMTP_PORT=587
     *    SMTP_USER=your-smtp-user
     *    SMTP_PASS=your-smtp-password
     *    SMTP_FROM="OptimizedCare Supported Services" <info@optimizedcare.org.pk>
     * 2. Install nodemailer (`npm i nodemailer @types/nodemailer`)
     * 3. Uncomment and trigger the transporter below:
     *
     * const transporter = nodemailer.createTransport({
     *   host: process.env.SMTP_HOST,
     *   port: Number(process.env.SMTP_PORT) || 587,
     *   secure: Number(process.env.SMTP_PORT) === 465,
     *   auth: {
     *     user: process.env.SMTP_USER,
     *     pass: process.env.SMTP_PASS,
     *   },
     * });
     *
     * await transporter.sendMail({
     *   from: process.env.SMTP_FROM || `"OptimizedCare" <${recipient}>`,
     *   to: recipient,
     *   replyTo: email,
     *   subject: emailSubject,
     *   text: formattedEmailBody,
     * });
     * --------------------------------------------------------------------------
     */

    return NextResponse.json(
      {
        success: true,
        referenceId,
        recipient,
        message:
          "Thank you for contacting our Supported Care team. Your referral has been safely logged and forwarded to our intake coordinators.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Care Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please call +44 7404 210566 directly.",
      },
      { status: 500 }
    );
  }
}
