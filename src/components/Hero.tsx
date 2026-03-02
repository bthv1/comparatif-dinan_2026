export default function Hero() {
  return (
    <section className="relative bg-vert text-white overflow-hidden">
      {/* Motif organique subtil */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            d="M0,160 C320,260 420,60 720,160 C1020,260 1120,80 1440,160 L1440,400 L0,400 Z"
            fill="currentColor"
          />
          <path
            d="M0,240 C360,320 480,140 800,240 C1120,340 1200,160 1440,240 L1440,400 L0,400 Z"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28 text-center">
        <h1 className="text-3xl md:text-5xl leading-tight mb-6 animate-fade-in-up">
          Municipales 2026 à Dinan-Léhon
          <br />
          <span className="text-vert-pale">Comparez les programmes</span>
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-light">
          Un outil citoyen pour éclairer votre choix le 15 mars
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#comparateur"
            className="inline-block bg-white text-vert font-semibold px-6 py-3 rounded-lg hover:bg-vert-pale transition-colors"
          >
            Découvrir le comparatif
          </a>
          <a
            href="#en-un-coup-doeil"
            className="inline-block border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            En un coup d'œil
          </a>
        </div>
      </div>
    </section>
  );
}
