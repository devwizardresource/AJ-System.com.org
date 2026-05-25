import Link from "next/link";
import { AREAS } from "./areas/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#1f1f1f] pt-14">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,rgba(34,211,255,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-black/50 px-3 py-1 text-xs text-[#9a9a9a] backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-[#22d3ff]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22d3ff]" />
            </span>
            6 áreas, una sola operación
          </div>
        </div>

        <h1 className="mt-8 text-center text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
          Tecnología, operaciones
          <br />
          <span className="text-[#9a9a9a]">y servicios para </span>
          <span className="bg-gradient-to-b from-white to-[#9a9a9a] bg-clip-text text-transparent">
            empresas serias
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base text-[#9a9a9a] md:text-lg">
          AJ System integra seis áreas corporativas — gerencia, ingeniería,
          logística, soporte técnico, jurídica y contabilidad — bajo un mismo
          estándar de ejecución y trazabilidad.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#areas"
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-[#dadada]"
          >
            Conocer las áreas
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-md border border-[#2a2a2a] bg-black/50 px-5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-[#111]"
          >
            Hablar con nosotros
          </Link>
        </div>

        {/* Areas mini-strip preview */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
            {AREAS.map((a, i) => (
              <a
                href={`#${a.id}`}
                key={a.id}
                className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#080808] p-4 transition-all duration-500 hover:-translate-y-1 animate-fade-up"
                style={
                  {
                    animationDelay: `${i * 90}ms`,
                  } as React.CSSProperties
                }
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(80% 70% at 50% 0%, ${a.accentDim} 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="relative grid h-10 w-10 place-items-center rounded-lg border border-[#1f1f1f] bg-black"
                  style={{ color: a.accent }}
                >
                  <a.Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="relative text-[11px] font-medium text-[#cfcfcf]">
                  {a.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
