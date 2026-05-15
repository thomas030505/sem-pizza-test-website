import Image from "next/image";

const stats = [
  { value: "10+", label: "År i bransjen" },
  { value: "4.4★", label: "Google-rating" },
  { value: "30 min", label: "Snitttid levering" },
  { value: "100%", label: "Fersk mat" },
];

export default function About() {
  return (
    <section id="om-oss" className="py-24 px-6 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative overflow-hidden h-72 md:h-96">
          <Image
            src="/images/restaurant-interior.jpg"
            alt="Hyggelig atmosfære inne på Sem Grill og Pizza"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
        </div>

        {/* Content */}
        <div>
          <span className="text-[#FBC02D] text-xs font-semibold uppercase tracking-[0.2em]">
            Om oss
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-5 leading-tight uppercase tracking-tight">
            Hjertene bak<br />
            <span className="text-[#C62828]">Sem Grill og Pizza</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-4 text-sm">
            Vi er en lokal familirestaurant i hjertet av Sem som har servert
            fersk og smakfull mat til nabolaget i over 10 år. Vår lidenskap er
            ekte råvarer, rask service og et vennlig smil ved hvert besøk.
          </p>
          <p className="text-white/60 leading-relaxed mb-10 text-sm">
            Fra Sem Spesial til den beste kebaben i Tønsberg – vi lager mat
            vi selv ville spist. Velkommen inn!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#1A1A1A] p-5"
              >
                <div className="text-2xl font-black text-[#FBC02D] tracking-tight">
                  {s.value}
                </div>
                <div className="text-white/40 text-xs mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
