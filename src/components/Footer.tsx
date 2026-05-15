import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 py-14 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex flex-col leading-none mb-4">
            <span className="text-xl font-black tracking-[0.18em] text-white uppercase">SEM</span>
            <span className="text-[10px] font-semibold tracking-[0.22em] text-[#FBC02D] uppercase">Grill og Pizza</span>
          </div>
          <p className="text-white/35 text-sm leading-relaxed">
            Din lokale pizzeria i Sem, Tønsberg. Fersk mat, god service og
            rask levering siden 2010.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.facebook.com/Sempizza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white/30 text-xs uppercase tracking-[0.18em] mb-5">Navigasjon</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Meny", href: "#meny" },
              { label: "Om oss", href: "#om-oss" },
              { label: "Anmeldelser", href: "#anmeldelser" },
              { label: "Finn oss", href: "#finn-oss" },
              { label: "Bestill via Foodora", href: "https://www.foodora.no/restaurant/yxd5/sem-pizza-and-grill" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/45 hover:text-white transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white/30 text-xs uppercase tracking-[0.18em] mb-5">Kontakt</h4>
          <ul className="space-y-3 text-sm text-white/45">
            <li>Andebuveien 3, 3170 Sem</li>
            <li>
              <a
                href="tel:91006106"
                className="hover:text-white transition-colors"
              >
                910 06 106
              </a>
            </li>
            <li className="pt-3 space-y-1.5">
              <div className="flex justify-between">
                <span>Man–Tor</span><span className="text-white/60 tabular-nums">11–22</span>
              </div>
              <div className="flex justify-between">
                <span>Fre–Lør</span><span className="text-white/60 tabular-nums">11–23</span>
              </div>
              <div className="flex justify-between">
                <span>Søn</span><span className="text-white/60 tabular-nums">12–22</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/20 tracking-wide">
        <span>&copy; {year} Sem Grill og Pizza. Alle rettigheter forbeholdt.</span>
        <span>Sem, Tønsberg</span>
        <span>Utviklet av <a href="https://taceit.no" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">TACE IT AS</a></span>
      </div>
    </footer>
  );
}
