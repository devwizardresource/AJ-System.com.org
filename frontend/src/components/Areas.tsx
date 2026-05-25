import SectionLabel from "./SectionLabel";
import AreaCard from "./areas/AreaCard";
import { AREAS } from "./areas/data";

export default function Areas() {
  return (
    <section id="areas" className="relative border-b border-[#1f1f1f]">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(34,211,255,0.10),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Áreas Corporativas</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Una organización,
            <br />
            <span className="bg-gradient-to-b from-white to-[#9a9a9a] bg-clip-text text-transparent">
              seis disciplinas alineadas.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-[#9a9a9a]">
            Cada área de AJ System opera con identidad propia, indicadores
            propios y un mismo estándar de ejecución. Hablan en conjunto para
            entregar resultados consistentes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <AreaCard key={area.id} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
