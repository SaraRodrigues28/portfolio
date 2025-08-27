"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus(null);
    const payload = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent. Thank you!");
      } else {
        setStatus(data?.error || "Something went wrong.");
      }
  } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form action={onSubmit} className="rounded-lg border border-black/10 bg-white/70 p-4 space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input name="name" className="mt-1 w-full rounded-md border border-black/10 p-2 bg-white" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" name="email" className="mt-1 w-full rounded-md border border-black/10 p-2 bg-white" />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" rows={6} className="mt-1 w-full rounded-md border border-black/10 p-2 bg-white" />
      </div>
      <button
        disabled={loading}
        className="rounded-md bg-primary text-white px-4 py-2 text-sm font-medium disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send"}
      </button>
      {status && <p className="text-sm text-black/70">{status}</p>}
    </form>
  );
}


