"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

const API = process.env.NEXT_PUBLIC_API_URL ?? "";
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contacto@ajsystem.com";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries(),
    ) as Record<string, string>;

    if (!API) {
      const subject = encodeURIComponent(`Contacto AJ System — ${data.name ?? ""}`);
      const body = encodeURIComponent(
        `Nombre: ${data.name}\nEmail: ${data.email}\nEmpresa: ${data.company ?? "—"}\n\n${data.message}`,
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("ok");
      setMsg("Abriendo tu cliente de correo…");
      return;
    }

    setStatus("loading");
    setMsg(null);
    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("ok");
      setMsg("Gracias — te contactaremos pronto.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMsg(
        err instanceof Error
          ? `No se pudo enviar: ${err.message}`
          : "No se pudo enviar tu mensaje.",
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-3 md:grid-cols-2"
    >
      <input
        required
        name="name"
        placeholder="Tu nombre"
        className="col-span-1 h-11 rounded-md border border-[#2a2a2a] bg-[#0a0a0a] px-3 text-sm text-white placeholder:text-[#6b6b6b] focus:border-[#22d3ff] focus:outline-none"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        className="col-span-1 h-11 rounded-md border border-[#2a2a2a] bg-[#0a0a0a] px-3 text-sm text-white placeholder:text-[#6b6b6b] focus:border-[#22d3ff] focus:outline-none"
      />
      <input
        name="company"
        placeholder="Empresa"
        className="md:col-span-2 h-11 rounded-md border border-[#2a2a2a] bg-[#0a0a0a] px-3 text-sm text-white placeholder:text-[#6b6b6b] focus:border-[#22d3ff] focus:outline-none"
      />
      <textarea
        required
        name="message"
        placeholder="¿En qué podemos ayudarte?"
        rows={4}
        className="md:col-span-2 resize-none rounded-md border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2.5 text-sm text-white placeholder:text-[#6b6b6b] focus:border-[#22d3ff] focus:outline-none"
      />
      <div className="md:col-span-2 flex items-center justify-between gap-4">
        <p
          className={[
            "text-xs",
            status === "ok" ? "text-emerald-400" : "",
            status === "error" ? "text-[#ff6b6b]" : "",
            status === "idle" || status === "loading" ? "text-[#6b6b6b]" : "",
          ].join(" ")}
        >
          {msg ?? "Respondemos cada mensaje."}
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-[#dadada] disabled:opacity-60"
        >
          {status === "loading" ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
