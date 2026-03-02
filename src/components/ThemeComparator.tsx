import { useState } from "react";
import { themes } from "../data/themes";
import { ChevronDown, Sparkles } from "lucide-react";
import ThemeIcon from "./ThemeIcon";
import { useReveal } from "../hooks/useReveal";

function ProposalList({
  proposals,
  variant,
  vague,
}: {
  proposals: { text: string; highlight?: boolean }[];
  variant: "bvi" | "dle";
  vague?: string;
}) {
  return (
    <div>
      <ul className="space-y-3">
        {proposals.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            {variant === "bvi" ? (
              <span className="mt-1.5 w-2 h-2 rounded-full bg-vert-clair shrink-0" />
            ) : (
              <span className="mt-1.5 w-2 h-2 rounded-full bg-gris/40 shrink-0" />
            )}
            {p.highlight && variant === "bvi" ? (
              <span className="flex-1 bg-vert-pale/60 border border-vert-clair/30 rounded-lg px-3 py-2 text-[15px] leading-relaxed">
                <Sparkles className="inline w-4 h-4 text-vert mr-1 -mt-0.5" />
                <strong>Mesure phare :</strong> {p.text}
              </span>
            ) : (
              <span className="flex-1 text-[15px] leading-relaxed">
                {p.text}
              </span>
            )}
          </li>
        ))}
      </ul>
      {vague && (
        <p className="mt-4 text-sm italic text-gris border-t border-gris-clair pt-3">
          {vague}
        </p>
      )}
    </div>
  );
}

function ThemeSection({
  theme,
  isOpen,
  onToggle,
}: {
  theme: (typeof themes)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal border-b border-gray-200 last:border-b-0">
      {/* Header cliquable */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-5 md:px-6 hover:bg-gray-50 transition-colors text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="w-10 h-10 rounded-xl bg-vert/10 text-vert flex items-center justify-center shrink-0">
          <ThemeIcon name={theme.icon} size={20} />
        </span>
        <h3 className="flex-1 text-xl font-serif">{theme.title}</h3>
        <div className="flex items-center gap-3 text-sm">
          <span className="bg-vert/10 text-vert px-2.5 py-1 rounded-full font-semibold">
            {theme.bvi.proposals.length}
          </span>
          <span className="text-gris/60">vs</span>
          <span className="bg-gris-clair text-gris px-2.5 py-1 rounded-full font-semibold">
            {theme.dle.proposals.length}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gris transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Contenu dépliable */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-6 md:px-6 grid md:grid-cols-2 gap-6">
            {/* Colonne BVI */}
            <div className="border-l-4 border-vert bg-white rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-vert font-bold text-sm uppercase tracking-wide">
                  Bien vivre ici
                </h4>
                <span className="text-xs text-gris">— Clémence Essevaz-Roulet</span>
              </div>
              <div className="text-xs text-vert bg-vert/5 rounded px-2 py-1 inline-block mb-4 font-semibold">
                {theme.bvi.proposals.length} propositions concrètes
              </div>
              <ProposalList proposals={theme.bvi.proposals} variant="bvi" />
            </div>

            {/* Colonne DLE */}
            <div className="border-l-4 border-gris/30 bg-gris-clair/50 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-gris font-bold text-sm uppercase tracking-wide">
                  Dinan-Léhon Évidemment
                </h4>
                <span className="text-xs text-gris">— Didier Lechien</span>
              </div>
              <div className="text-xs text-gris bg-gris/10 rounded px-2 py-1 inline-block mb-4 font-semibold">
                {theme.dle.proposals.length} propositions
              </div>
              <ProposalList
                proposals={theme.dle.proposals}
                variant="dle"
                vague={theme.dle.vague}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThemeComparator() {
  const [openThemes, setOpenThemes] = useState<Set<string>>(
    new Set([themes[0].id])
  );

  const toggle = (id: string) => {
    setOpenThemes((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const openAll = () =>
    setOpenThemes(new Set(themes.map((t) => t.id)));
  const closeAll = () => setOpenThemes(new Set());

  return (
    <section id="comparateur" className="max-w-5xl mx-auto px-4 py-14">
      <h2 className="text-3xl md:text-4xl text-center mb-2">
        Comparatif thème par thème
      </h2>
      <p className="text-center text-gris mb-8">
        Cliquez sur un thème pour découvrir les propositions détaillées
      </p>

      <div className="flex justify-center gap-3 mb-6 text-sm">
        <button
          onClick={openAll}
          className="text-vert hover:underline cursor-pointer"
        >
          Tout déplier
        </button>
        <span className="text-gris/30">|</span>
        <button
          onClick={closeAll}
          className="text-gris hover:underline cursor-pointer"
        >
          Tout replier
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {themes.map((theme) => (
          <ThemeSection
            key={theme.id}
            theme={theme}
            isOpen={openThemes.has(theme.id)}
            onToggle={() => toggle(theme.id)}
          />
        ))}
      </div>
    </section>
  );
}
