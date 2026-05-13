"use client";

import { FormEvent, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

type BookingData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  projectType: string;
  preferredDate: string;
  location: string;
  message: string;
};

const initialData: BookingData = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  projectType: "",
  preferredDate: "",
  location: "",
  message: "",
};

export function BookingForm() {
  const [data, setData] = useState<BookingData>(initialData);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const minDate = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }, []);

  function updateField<K extends keyof BookingData>(key: K, value: BookingData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(false);
    setError(null);
    setSending(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const payload = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          payload?.error || "Failed to send booking request. Please try again."
        );
      }

      setSent(true);
      setData(initialData);
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Failed to send booking request. Please try again.";
      setError(message);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-brand-navy/60 backdrop-blur-sm p-5 sm:p-8">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Book a Consultation
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/70">
          Fill in your details and we will send your booking request directly to
          our email inbox.
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
        <label className="sm:col-span-1">
          <span className="mb-1.5 block text-sm text-white/75">Full name *</span>
          <input
            required
            value={data.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className="w-full h-11 rounded-md border border-white/15 bg-brand-navy-deep/60 px-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-blue-soft"
            placeholder="Juan Dela Cruz"
          />
        </label>

        <label className="sm:col-span-1">
          <span className="mb-1.5 block text-sm text-white/75">Email *</span>
          <input
            required
            type="email"
            value={data.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full h-11 rounded-md border border-white/15 bg-brand-navy-deep/60 px-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-blue-soft"
            placeholder="you@example.com"
          />
        </label>

        <label className="sm:col-span-1">
          <span className="mb-1.5 block text-sm text-white/75">Phone *</span>
          <input
            required
            value={data.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="w-full h-11 rounded-md border border-white/15 bg-brand-navy-deep/60 px-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-blue-soft"
            placeholder="0948 903 3667"
          />
        </label>

        <label className="sm:col-span-1">
          <span className="mb-1.5 block text-sm text-white/75">Service *</span>
          <select
            required
            value={data.service}
            onChange={(e) => updateField("service", e.target.value)}
            className="w-full h-11 rounded-md border border-white/15 bg-brand-navy-deep/60 px-3 text-white focus:outline-none focus:border-brand-blue-soft"
          >
            <option value="" className="text-black">Select a service</option>
            <option value="Civil Works" className="text-black">Civil Works</option>
            <option value="Electrical Services" className="text-black">Electrical Services</option>
            <option value="Mechanical Services" className="text-black">Mechanical Services</option>
            <option value="Design & Build" className="text-black">Design & Build</option>
            <option value="General Inquiry" className="text-black">General Inquiry</option>
          </select>
        </label>

        <label className="sm:col-span-1">
          <span className="mb-1.5 block text-sm text-white/75">Project type</span>
          <input
            value={data.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
            className="w-full h-11 rounded-md border border-white/15 bg-brand-navy-deep/60 px-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-blue-soft"
            placeholder="Residential, Commercial, etc."
          />
        </label>

        <label className="sm:col-span-1">
          <span className="mb-1.5 block text-sm text-white/75">Preferred date</span>
          <input
            type="date"
            min={minDate}
            value={data.preferredDate}
            onChange={(e) => updateField("preferredDate", e.target.value)}
            className="w-full h-11 rounded-md border border-white/15 bg-brand-navy-deep/60 px-3 text-white focus:outline-none focus:border-brand-blue-soft"
            title="You can type the date or use the calendar picker."
          />
          <span className="mt-1.5 block text-xs text-white/50">
            You can type the date directly or pick from the calendar.
          </span>
        </label>

        <label className="sm:col-span-2">
          <span className="mb-1.5 block text-sm text-white/75">Project location</span>
          <input
            value={data.location}
            onChange={(e) => updateField("location", e.target.value)}
            className="w-full h-11 rounded-md border border-white/15 bg-brand-navy-deep/60 px-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-blue-soft"
            placeholder="City / Province"
          />
        </label>

        <label className="sm:col-span-2">
          <span className="mb-1.5 block text-sm text-white/75">Project details *</span>
          <textarea
            required
            rows={5}
            value={data.message}
            onChange={(e) => updateField("message", e.target.value)}
            className="w-full rounded-md border border-white/15 bg-brand-navy-deep/60 px-3 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-blue-soft resize-y"
            placeholder="Tell us about your project scope, timeline, and priorities."
          />
        </label>

        <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <Button type="submit" size="lg" disabled={sending}>
            {sending ? "Sending..." : "Send Booking Request"}
          </Button>
          {sent ? (
            <p className="inline-flex items-center gap-2 text-sm text-emerald-300">
              <CheckCircle2 className="size-4" />
              Booking request sent successfully.
            </p>
          ) : null}
          {error ? (
            <p className="inline-flex items-center gap-2 text-sm text-red-300">
              <AlertCircle className="size-4" />
              {error}
            </p>
          ) : null}
        </div>
      </form>

      <div className="mt-8 grid gap-2 text-sm text-white/70">
        <p className="inline-flex items-center gap-2">
          <Mail className="size-4 text-brand-blue-soft" />
          {site.bookingEmail}
        </p>
        <p className="inline-flex items-center gap-2">
          <Phone className="size-4 text-brand-blue-soft" />
          {site.bookingPhone}
        </p>
      </div>
    </div>
  );
}
