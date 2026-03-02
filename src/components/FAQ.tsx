import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const faqs = [
  {
    question: "Qui a réalisé ce comparateur ?",
    answer:
      "Ce comparateur a été conçu et réalisé par le collectif Bien vivre ici, la liste conduite par Clémence Essevaz-Roulet pour les élections municipales de Dinan-Léhon 2026.",
  },
  {
    question: "D'où viennent ces données ?",
    answer:
      "Les propositions présentées sont issues des programmes officiels publics des deux listes candidates. Le texte de chaque proposition reprend fidèlement la rédaction de chaque programme.",
  },
  {
    question: "Comment voter les 15 et 22 mars 2026 ?",
    answer:
      "Les élections municipales se déroulent les dimanches 15 mars (1er tour) et 22 mars 2026 (2nd tour si nécessaire). Pour voter, vous devez être inscrit sur les listes électorales de Dinan ou Léhon et vous présenter dans votre bureau de vote muni d'une pièce d'identité. Les bureaux de vote sont ouverts de 8h à 18h.",
  },
  {
    question: "Pourquoi certains thèmes ont plus de propositions d'un côté ?",
    answer:
      "Le nombre de propositions reflète le niveau de détail de chaque programme sur un thème donné. Un programme plus détaillé n'est pas nécessairement meilleur, mais il offre davantage de visibilité sur les intentions concrètes de la liste.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-4 px-1 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-semibold text-texte">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gris shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 px-1 text-texte/70 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal max-w-3xl mx-auto px-4 py-14">
      <h2 className="text-3xl md:text-4xl text-center mb-8">
        Questions fréquentes
      </h2>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 md:p-8">
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
    </section>
  );
}
