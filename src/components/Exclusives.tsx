import { exclusives } from "../data/themes";
import { Sparkles } from "lucide-react";
import ThemeIcon from "./ThemeIcon";
import { useReveal } from "../hooks/useReveal";

function ExclusiveCard({
  item,
}: {
  item: (typeof exclusives)[0];
}) {
  return (
    <div className="bg-white border border-vert-clair/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <span className="w-10 h-10 rounded-xl bg-vert-pale text-vert flex items-center justify-center shrink-0">
          <ThemeIcon name={item.icon} size={20} />
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-corail" />
            <span className="text-xs font-bold text-corail uppercase tracking-wide">
              Exclusif
            </span>
          </div>
          <h4 className="font-serif text-lg text-vert mb-1">{item.title}</h4>
          <p className="text-sm text-texte/70 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Exclusives() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal max-w-5xl mx-auto px-4 py-14">
      <h2 className="text-3xl md:text-4xl text-center mb-2">
        Ce qui les distingue
      </h2>
      <p className="text-center text-gris mb-8">
        Mesures présentes uniquement dans le programme{" "}
        <strong className="text-vert">Bien vivre ici</strong>
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {exclusives.map((item, i) => (
          <ExclusiveCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
