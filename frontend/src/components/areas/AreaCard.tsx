import type { Area } from "./data";

type Props = {
  area: Area;
  index: number;
};

export default function AreaCard({ area, index }: Props) {
  const { name, tagline, description, accent, accentDim, accentSoft, Icon, highlights } = area;

  return (
    <article
      id={area.id}
      className="area-scope area-card group relative flex flex-col overflow-hidden rounded-2xl border border-[#1f1f1f] bg-black p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--area-dim)] animate-fade-up"
      style={
        {
          "--area": accent,
          "--area-dim": accentDim,
          "--area-soft": accentSoft,
          animationDelay: `${index * 80}ms`,
        } as React.CSSProperties
      }
    >
      {/* Drifting accent background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100 animate-drift"
        style={{
          background: `radial-gradient(120% 80% at 0% 0%, ${accentSoft} 0%, transparent 55%), radial-gradient(120% 80% at 100% 100%, ${accentSoft} 0%, transparent 55%)`,
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-30" />

      {/* Top: icon + chip */}
      <header className="relative flex items-start justify-between">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -m-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"
            style={{ background: accentDim }}
          />
          <div
            className="relative grid h-14 w-14 place-items-center rounded-xl border border-[#1f1f1f] bg-[#0a0a0a]"
            style={{ color: accent }}
          >
            <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
            <span
              aria-hidden
              className="absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 area-ring"
              style={{ filter: "blur(8px)", zIndex: -1 }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-md border border-[#2a2a2a] bg-black/60 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-[#9a9a9a] backdrop-blur">
          <span
            className="inline-block h-1.5 w-1.5 animate-breathe rounded-full"
            style={{ background: accent }}
          />
          Área {String(index + 1).padStart(2, "0")}
        </div>
      </header>

      {/* Body */}
      <div className="relative mt-7 flex-1">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h3>
        <p className="mt-1 text-sm font-medium" style={{ color: accent }}>
          {tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#9a9a9a]">
          {description}
        </p>
      </div>

      {/* Highlights */}
      <ul className="relative mt-6 flex flex-wrap gap-1.5">
        {highlights.map((h) => (
          <li
            key={h}
            className="rounded-md border border-[#1f1f1f] bg-[#0a0a0a] px-2 py-1 text-[11px] text-[#cfcfcf] transition-colors duration-300 group-hover:border-[var(--area-dim)]"
          >
            {h}
          </li>
        ))}
      </ul>

      {/* Footer CTA */}
      <div className="relative mt-6 flex items-center justify-between border-t border-[#1f1f1f] pt-4 transition-colors duration-500 group-hover:border-[var(--area-dim)]">
        <span className="text-xs text-[#6b6b6b]">Conocer más</span>
        <span
          className="grid h-7 w-7 place-items-center rounded-full border border-[#2a2a2a] text-[#9a9a9a] transition-all duration-500 group-hover:border-transparent group-hover:bg-[var(--area)] group-hover:text-black"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 -rotate-45 transition-transform duration-500 group-hover:rotate-0" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 13L13 3M6 3h7v7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {/* Shimmer pass */}
      <div className="shimmer-line absolute inset-0 overflow-hidden" aria-hidden />
    </article>
  );
}
