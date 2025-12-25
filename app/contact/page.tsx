"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    setStatus(res.ok ? "success" : "error");
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Kontak Saya</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl">
          Jangan ragu untuk menghubungi saya untuk kolaborasi, proyek lepas,
          atau sekadar menyapa.
        </p>
      </div>
      <hr />
      {/* GRID */}
      <div className="pt-5 grid md:grid-cols-2 gap-10">
        {/* INFO */}
        <div className="space-y-6 text-sm">
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">
              mochanendeavour@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Lokasi</h3>
            <p className="text-gray-600 dark:text-gray-400">Indonesia</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Social</h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              <li>GitHub: github.com/MuhammadQuthbulAlam</li>
              <li>LinkedIn: linkedin.com/in/MuhammadQuthbulAlam</li>
              <li>Instagram: @mochansr_</li>
            </ul>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full border p-2 rounded bg-transparent"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded bg-transparent"
          />

          <textarea
            name="message"
            required
            placeholder="Message"
            className="w-full border p-2 rounded bg-transparent"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-[#161b22]"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600">Failed to send message.</p>
          )}
        </form>
      </div>
    </section>
  );
}
