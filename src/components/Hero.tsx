import Image from "next/image";
import Link from "next/link";

const FOODORA_URL = "https://www.foodora.no/restaurant/yxd5/sem-pizza-and-grill";

export default function Hero() {
  return (
    <section
      id="hjem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-pizza.jpg"
        alt="Nylaget pizza fra Sem Grill og Pizza"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C62828]/80 via-[#1A1A1A]/75 to-[#1A1A1A]/95" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
        {/* Rating – typographic, no badge */}
        <p className="text-white/50 text-sm font-medium tracking-[0.15em] uppercase mb-5">
          4.4 / 5 &nbsp;&middot;&nbsp; Google-anmeldelser &nbsp;&middot;&nbsp; Sem, Tønsberg
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-[0.95] tracking-tight uppercase">
          <span className="block">Sem</span>
          <span className="block text-[#FBC02D]">Grill og Pizza</span>
        </h1>

        <p className="text-base md:text-lg text-white/70 mb-10 max-w-lg mx-auto leading-relaxed tracking-wide">
          Fersk pizza, kebab og burger i Sem – laget med kjærlighet,
          servert med et smil. Rask levering til døren din.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={FOODORA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-cta bg-[#FBC02D] hover:bg-yellow-400 text-[#1A1A1A] font-bold tracking-wide px-8 py-4 transition-colors w-full sm:w-auto text-center text-sm uppercase"
          >
            Bestill via Foodora
          </a>

          <a
            href="tel:91006106"
            className="border border-white/30 hover:border-white/60 text-white font-semibold tracking-wide px-8 py-4 transition-colors w-full sm:w-auto text-center text-sm uppercase"
          >
            Ring og bestill
          </a>
        </div>

        {/* Opening hours */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-1 text-white/40 text-xs tracking-widest uppercase">
          <span>Man–Tor &nbsp;11–22</span>
          <span>Fre–Lør &nbsp;11–23</span>
          <span>Søn &nbsp;12–22</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#meny"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/70 transition-colors animate-bounce"
        aria-label="Scroll ned"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
    </section>
  );
}
