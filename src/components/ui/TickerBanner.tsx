const items = [
  "⬥ GUNDYNASTY #3 LATAM",
  "⬥ 697 KILLS · 8 BOOYAHS",
  "⬥ BNLXYY: 256 KILLS · 172K DAÑO",
  "⬥ ESPORTS WORLD CUP 2026",
  "⬥ SHYROO094 META M1887",
  "⬥ SPLIT MAYO 2026 · 16 RONDAS",
  "⬥ VEGATHK NUEVO TITULAR",
  "⬥ @FFESPORTSLATAM TEMPORADA 2026",
];

const allItems = [...items, ...items];

export function TickerBanner() {
  return (
    <div
      className="relative overflow-hidden border-y border-ff-cyan/20 bg-ff-graphite/80 py-2.5 backdrop-blur-sm"
      aria-hidden
    >
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ff-graphite/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ff-graphite/80 to-transparent" />

      <div className="flex whitespace-nowrap ff-ticker">
        <span className="flex items-center gap-10 px-5 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-ff-cyan/60">
          {allItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </span>
        {/* Duplicate for seamless loop */}
        <span
          aria-hidden
          className="flex items-center gap-10 px-5 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-ff-cyan/60"
        >
          {allItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </span>
      </div>
    </div>
  );
}
