import { ExternalLink } from "lucide-react";

export default function Footer({ onMentionsLegales }: { onMentionsLegales: () => void }) {
  return (
    <footer className="bg-vert text-white/80">
      {/* CTA discret */}
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-6 text-center">
        <p className="text-lg font-serif text-white mb-3">
          Vous voulez en savoir plus sur le projet Bien vivre ici ?
        </p>
        <a
          href="https://essevaz-roulet-2026.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 transition-colors px-5 py-2.5 rounded-lg text-sm font-semibold"
        >
          Découvrir le programme complet
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="border-t border-white/10 mt-6">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            <p>Bien vivre ici — 9 rue Thiers, 22100 Dinan</p>
            <p className="mt-1">
              Données issues des programmes officiels publics des deux listes.
            </p>
          </div>
          <div className="text-center md:text-right">
            <button
              onClick={onMentionsLegales}
              className="mt-1 underline hover:text-white/70 transition-colors cursor-pointer"
            >
              Mentions légales
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
