import { themes } from "../data/themes";
import ThemeIcon from "./ThemeIcon";
import { useReveal } from "../hooks/useReveal";

function BarRow({ theme }: { theme: (typeof themes)[0] }) {
  const bviCount = theme.bvi.proposals.length;
  const dleCount = theme.dle.proposals.length;
  const max = Math.max(bviCount, dleCount, 1);

  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-b-0">
      <div className="w-8 h-8 rounded-lg bg-vert/10 text-vert flex items-center justify-center shrink-0">
        <ThemeIcon name={theme.icon} size={16} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate mb-1.5">{theme.title}</p>
        <div className="flex items-center gap-2">
          {/* BVI bar */}
          <div className="flex-1 flex items-center gap-1.5">
            <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-vert to-vert-clair rounded-full transition-all duration-700"
                style={{ width: `${(bviCount / max) * 100}%` }}
              />
            </div>
            <span className="text-xs font-bold text-vert w-6 text-right">
              {bviCount}
            </span>
          </div>
          {/* DLE bar */}
          <div className="flex-1 flex items-center gap-1.5">
            <span className="text-xs font-bold text-gris w-6 text-left">
              {dleCount}
            </span>
            <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gris/40 rounded-full transition-all duration-700 ml-auto"
                style={{ width: `${(dleCount / max) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Overview() {
  const ref = useReveal<HTMLElement>();
  const totalBvi = themes.reduce((s, t) => s + t.bvi.proposals.length, 0);
  const totalDle = themes.reduce((s, t) => s + t.dle.proposals.length, 0);

  return (
    <section
      ref={ref}
      id="en-un-coup-doeil"
      className="reveal max-w-4xl mx-auto px-4 py-14"
    >
      <h2 className="text-3xl md:text-4xl text-center mb-2">
        En un coup d'œil
      </h2>
      <p className="text-center text-gris mb-8">
        Nombre de propositions concrètes par thème
      </p>

      {/* Légende */}
      <div className="flex justify-center gap-8 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-vert" />
          <span>
            Bien vivre ici —{" "}
            <strong className="text-vert">{totalBvi} propositions</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gris/40" />
          <span>
            Dinan-Léhon Évidemment —{" "}
            <strong className="text-gris">{totalDle} propositions</strong>
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 md:p-8">
        {themes.map((theme) => (
          <BarRow key={theme.id} theme={theme} />
        ))}
      </div>
    </section>
  );
}
