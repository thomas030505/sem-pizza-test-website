"use client";

import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Trond Moskvil",
    rating: 5,
    text: "Områdes beste pizza. Min favoritt er Sem Spesial med ekstra fyll. Anbefales. Alltid god service og ikke blitt skuffa på 10 handler. Prøvde kebaben dems igår og den var like bra!",
  },
  {
    name: "June Bjørnøy",
    rating: 5,
    text: "Beste pizzaen på Sem. Takler ikke usmaker. Det får du ikke her.",
  },
  {
    name: "Jakob Grøv",
    rating: 5,
    text: "God mat laget ordentlig, og ikke minst en hyggelig kar som møter deg med et smil. Alltid serviceorientert, og blant de beste kebabene i området.",
  },
  {
    name: "Lin Bele Jacobsen",
    rating: 5,
    text: "Den absolutt beste kebaben jeg har spist i Norge. Frisk og nydelig tynnt pitabrød. Veldig hyggelig kar bak disken også!",
  },
  {
    name: "Rickard Aasrum",
    rating: 4,
    text: "Om du vil ha en knall god cheeseburger, så er dette virkelig stedet! Disse gutta kan virkelig lage burger. Rullekebaben er også god!",
  },
  {
    name: "rolands8200",
    rating: 5,
    text: "Hyggelig service, bra mat og veldig ren og pent lokalet.",
  },
  {
    name: "Herman Schinnes",
    rating: 5,
    text: "Vi var tre sultne gutter som bestilte en innbakt pizza hver. Maten kom veldig fort og smakte veldig godt. Fine og trivelige lokaler og hyggelig betjening.",
  },
  {
    name: "Marius Verpe",
    rating: 5,
    text: "Helt perfekt. Beste i Sem.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} av 5 stjerner`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 12 12"
          className={`w-3 h-3 ${i < count ? "fill-[#FBC02D]" : "fill-white/15"}`}
          aria-hidden="true"
        >
          <path d="M6 .5l1.545 3.09 3.455.5-2.5 2.41.59 3.4L6 8.25 2.91 9.9l.59-3.4L1 4.09l3.455-.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const review = reviews[current];

  return (
    <section id="anmeldelser" className="py-24 px-6 bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <span className="text-[#FBC02D] text-xs font-semibold uppercase tracking-[0.2em]">
            Anmeldelser
          </span>
          <div className="flex items-end gap-5 mt-2">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Hva kundene sier
            </h2>
            <span className="text-white/30 text-sm mb-1.5 tracking-wide">
              4.4 / 5 &nbsp;&middot;&nbsp; Google
            </span>
          </div>
        </div>

        {/* Slideshow */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote mark */}
          <div
            className="text-[120px] leading-none text-white/5 font-black absolute -top-4 left-0 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Review content */}
          <div className="relative min-h-48 flex flex-col justify-between pl-4 md:pl-8">
            <div key={current} className="fade-up">
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light mb-8 max-w-2xl">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-[#C62828]" />
                <span className="text-white font-semibold text-sm tracking-wide">
                  {review.name}
                </span>
                <Stars count={review.rating} />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-12 pl-4 md:pl-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/20 hover:border-white/60 text-white/60 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Forrige"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 12L6 8l4-4" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/20 hover:border-white/60 text-white/60 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Neste"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12l4-4-4-4" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-1.5 ml-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-0.5 transition-all duration-300 ${
                    i === current ? "w-8 bg-[#FBC02D]" : "w-3 bg-white/20"
                  }`}
                  aria-label={`Anmeldelse ${i + 1}`}
                />
              ))}
            </div>

            <span className="ml-auto text-white/25 text-xs tabular-nums tracking-wider">
              {String(current + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
