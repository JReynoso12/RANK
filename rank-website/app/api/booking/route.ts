import { NextResponse } from "next/server";
import { Resend } from "resend";

type BookingPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  projectType?: string;
  preferredDate?: string;
  location?: string;
  message?: string;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 }
    );
  }
  const resend = new Resend(apiKey);

  let payload: BookingPayload;
  try {
    payload = (await request.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = clean(payload.fullName);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const service = clean(payload.service);
  const projectType = clean(payload.projectType);
  const preferredDate = clean(payload.preferredDate);
  const location = clean(payload.location);
  const message = clean(payload.message);

  if (!fullName || !email || !phone || !service || !message) {
    return NextResponse.json(
      {
        error:
          "Please provide full name, email, phone, service, and project details.",
      },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const toEmail = process.env.BOOKING_TO_EMAIL ?? "rankengineeringservices@gmail.com";
  const fromEmail =
    process.env.BOOKING_FROM_EMAIL ?? "RANK Booking <onboarding@resend.dev>";

  const subject = `Booking Request - ${fullName}`;
  const text = [
    "RANK ENGINEERING SERVICES - BOOKING REQUEST",
    "",
    `Full Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service Needed: ${service}`,
    `Project Type: ${projectType || "Not specified"}`,
    `Preferred Date: ${preferredDate || "Not specified"}`,
    `Project Location: ${location || "Not specified"}`,
    "",
    "Project Details:",
    message,
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send booking email. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}

