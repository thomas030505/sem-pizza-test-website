export default function MapSection() {
  return (
    <section id="finn-oss" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-[#FBC02D] text-xs font-semibold uppercase tracking-[0.2em]">
            Finn oss
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 uppercase tracking-tight">
            Besøk oss
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {/* Info */}
          <div className="bg-[#1A1A1A] p-10">
            <div className="space-y-8">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-[0.18em] mb-1.5">Adresse</p>
                <p className="text-white font-semibold">Andebuveien 3, 3170 Sem</p>
                <p className="text-white/50 text-sm">Tønsberg, Vestfold</p>
              </div>

              <div>
                <p className="text-white/30 text-xs uppercase tracking-[0.18em] mb-1.5">Telefon</p>
                <a
                  href="tel:91006106"
                  className="text-white font-semibold hover:text-[#FBC02D] transition-colors"
                >
                  910 06 106
                </a>
              </div>

              <div>
                <p className="text-white/30 text-xs uppercase tracking-[0.18em] mb-3">Åpningstider</p>
                <div className="space-y-2">
                  {[
                    { days: "Mandag – Torsdag", hours: "11:00 – 22:00" },
                    { days: "Fredag – Lørdag", hours: "11:00 – 23:00" },
                    { days: "Søndag", hours: "12:00 – 22:00" },
                  ].map((row) => (
                    <div key={row.days} className="flex justify-between text-sm">
                      <span className="text-white/50">{row.days}</span>
                      <span className="text-white font-medium tabular-nums">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-white/30 text-xs uppercase tracking-[0.18em] mb-1.5">Levering</p>
                <a
                  href="https://www.foodora.no/restaurant/yxd5/sem-pizza-and-grill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FBC02D] hover:text-yellow-300 text-sm font-medium transition-colors"
                >
                  Bestill via Foodora
                </a>
              </div>

              <div>
                <p className="text-white/30 text-xs uppercase tracking-[0.18em] mb-1.5">Sosiale medier</p>
                <a
                  href="https://www.facebook.com/Sempizza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  facebook.com/Sempizza
                </a>
              </div>
            </div>

            <a
              href="tel:91006106"
              className="mt-10 inline-block bg-[#C62828] hover:bg-[#b71c1c] text-white font-bold text-xs uppercase tracking-[0.15em] px-8 py-4 transition-colors"
            >
              Ring og bestill
            </a>
          </div>

          {/* Map */}
          <div className="h-80 md:h-auto min-h-96">
            <iframe
              title="Kart til Sem Pizza & Grill – Andebuveien 3, 3170 Sem"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Andebuveien+3%2C+3170+Sem&output=embed&z=16"
              className="w-full h-full border-0 grayscale contrast-110"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
