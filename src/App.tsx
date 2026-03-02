import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import ThemeComparator from "./components/ThemeComparator";
import Overview from "./components/Overview";
import Exclusives from "./components/Exclusives";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import MentionsLegales from "./components/MentionsLegales";

export default function App() {
  const [page, setPage] = useState<"home" | "mentions">(
    window.location.hash === "#mentions-legales" ? "mentions" : "home"
  );

  useEffect(() => {
    const onHash = () => {
      setPage(window.location.hash === "#mentions-legales" ? "mentions" : "home");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const goMentions = () => {
    window.location.hash = "#mentions-legales";
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    window.location.hash = "";
    window.scrollTo(0, 0);
  };

  if (page === "mentions") {
    return <MentionsLegales onBack={goHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="flex-1">
        <Introduction />
        <ThemeComparator />
        <Overview />
        <Exclusives />
        <FAQ />
      </main>
      <Footer onMentionsLegales={goMentions} />
    </div>
  );
}
