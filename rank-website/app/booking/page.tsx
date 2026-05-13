import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { BookingForm } from "./booking-form";

export default function BookingPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-brand-navy-deep text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,107,255,0.25),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(30,72,199,0.2),transparent_35%)]"
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
          <Logo showWordmark />
        </div>

        <BookingForm />
      </div>
    </main>
  );
}
