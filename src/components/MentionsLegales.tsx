import { ArrowLeft } from "lucide-react";

export default function MentionsLegales({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-fond">
      <div className="bg-vert text-white py-8">
        <div className="max-w-3xl mx-auto px-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au comparateur
          </button>
          <h1 className="text-3xl">Mentions légales</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8 text-texte/80 leading-relaxed">
        <section>
          <h2 className="text-xl text-texte mb-3">Éditeur du site</h2>
          <p>
            Le présent site est édité par le collectif <strong className="text-texte">Bien vivre ici</strong>,
            liste candidate aux élections municipales de Dinan-Léhon des 15 et 22 mars 2026,
            conduite par Clémence Essevaz-Roulet.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><strong className="text-texte">Adresse :</strong> 9 rue Thiers, 22100 Dinan</li>
            <li><strong className="text-texte">Directeur de la publication :</strong> Baptiste Thevelein, directeur de campagne de Clémence Essevaz-Roulet</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-texte mb-3">Hébergement</h2>
          <p>
            Ce site est hébergé par GitHub Pages (GitHub, Inc.), 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-texte mb-3">Nature du site</h2>
          <p>
            Ce site est un outil de comparaison des programmes électoraux pour les élections municipales
            de Dinan-Léhon 2026. Il constitue un document de communication électorale au sens de
            l'article L. 52-1 du Code électoral.
          </p>
          <p className="mt-2">
            Les propositions présentées sont issues des programmes officiels publics des deux listes
            candidates et reprennent fidèlement la rédaction de chaque programme.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-texte mb-3">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus de ce site (textes, graphismes, mise en page) est la propriété
            du collectif Bien vivre ici, à l'exception des propositions issues des programmes électoraux
            qui appartiennent à leurs auteurs respectifs. Toute reproduction, même partielle, est soumise
            à autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-texte mb-3">Protection des données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle. Il n'utilise pas de cookies,
            pas de traceurs publicitaires et ne recourt à aucun service d'analyse d'audience.
            Aucune information n'est transmise à des tiers.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-texte mb-3">Responsabilité</h2>
          <p>
            Le collectif Bien vivre ici s'efforce de fournir des informations aussi exactes que possible.
            Toutefois, il ne saurait être tenu responsable des omissions, des inexactitudes ou des
            carences dans la mise à jour de ces informations. Les liens vers des sites extérieurs sont
            fournis à titre indicatif et n'engagent pas la responsabilité de l'éditeur.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-texte mb-3">Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. En cas de litige, les tribunaux
            français seront seuls compétents.
          </p>
        </section>

        <div className="pt-6 border-t border-gray-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-vert hover:underline text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au comparateur
          </button>
        </div>
      </div>
    </div>
  );
}
