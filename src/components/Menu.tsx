"use client";

import { useState } from "react";
import Image from "next/image";

type Category =
  | "amerikansk"
  | "italiensk"
  | "kebab"
  | "grill"
  | "bakt-potet"
  | "barnemeny"
  | "drikke";

interface MenuItem {
  id: number;
  name: string;
  desc?: string;
  price?: number;
  medium?: number;
  stor?: number;
  category: Category;
  subcategory?: string;
  popular?: boolean;
  spicy?: boolean;
  isNew?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  // Amerikansk Pizza – Tykk bunn
  { id: 1,  name: "Barnas favoritt",      desc: "Skinke, ost og tomatsaus",                                                  medium: 200, stor: 245, category: "amerikansk" },
  { id: 2,  name: "Hawaii",               desc: "Pepperoni, skinke og ananas",                                               medium: 210, stor: 255, category: "amerikansk" },
  { id: 3,  name: "Vegetar",              desc: "Løk, champignon, paprika, tomat, mais, ananas og oliven",                   medium: 215, stor: 260, category: "amerikansk" },
  { id: 4,  name: "Taco",                 desc: "Taco kjøttdeig, løk, mais, paprika og jalapeños",                           medium: 215, stor: 265, category: "amerikansk", spicy: true },
  { id: 5,  name: "Kebab",                desc: "Kebabkjøtt, løk, champignon, mais, paprika og jalapeños",                   medium: 225, stor: 300, category: "amerikansk", spicy: true },
  { id: 6,  name: "Barca Spesiale",       desc: "Purreløk, skinke, kjøttdeig, bacon og paprika",                             medium: 230, stor: 285, category: "amerikansk" },
  { id: 7,  name: "Kylling",              desc: "Løk, kylling, paprika og ananas",                                            medium: 230, stor: 300, category: "amerikansk" },
  { id: 8,  name: "Din favorittpizza",    desc: "Sett sammen din egen pizza – 4 kjøtt + grønnsaker",                          medium: 265, stor: 325, category: "amerikansk" },
  { id: 9,  name: "City",                 desc: "Løk, pepperoni, biff, champignon, paprika, jalapeños og ananas",            medium: 245, stor: 300, category: "amerikansk", spicy: true },
  { id: 10, name: "Sem Spesial",          desc: "Løk, pepperoni, skinke, biff, bacon og champignon",                          medium: 245, stor: 300, category: "amerikansk", popular: true },
  { id: 11, name: "Husets Spesial",       desc: "Purreløk, kylling, biff, taco kjøttdeig, champignon, mais og paprika",      medium: 245, stor: 300, category: "amerikansk", popular: true },
  { id: 12, name: "Mexicana",             desc: "Kebabkjøtt, kylling, løk og paprika",                                        medium: 245, stor: 300, category: "amerikansk" },
  { id: 13, name: "Milano",               desc: "Løk, pepperoni, skinke, biff og paprika",                                    medium: 245, stor: 300, category: "amerikansk" },
  { id: 14, name: "Klassisk Biff",        desc: "Løk, biff, champignon og oliven",                                            medium: 245, stor: 300, category: "amerikansk" },
  { id: 15, name: "Ozmana",               desc: "Purreløk, pepperoni, kjøttdeig, kylling og paprika",                         medium: 245, stor: 300, category: "amerikansk" },
  { id: 16, name: "Døner",                desc: "Døner kebab, løk, tomat, mais og sopp – toppet med pommes",                 medium: 275, stor: 330, category: "amerikansk", popular: true },
  { id: 17, name: "Las Vegas",            desc: "Biff, pommes og bernaisesaus",                                                medium: 275, stor: 330, category: "amerikansk" },

  // Italiensk Pizza – Tynn bunn
  { id: 24, name: "Margarita",            desc: "Ost og tomatsaus",                              medium: 180, stor: 220, category: "italiensk", subcategory: "Tynn bunn", isNew: true },
  { id: 25, name: "Vesuvio",              desc: "Ost, tomatsaus og skinke",                      medium: 200, stor: 240, category: "italiensk", subcategory: "Tynn bunn" },
  { id: 26, name: "Vegetar",              desc: "Løk, champignon, paprika, mais og oliven",      medium: 200, stor: 250, category: "italiensk", subcategory: "Tynn bunn" },
  { id: 27, name: "La Luna",              desc: "Løk, skinke, biff og champignon",               medium: 210, stor: 260, category: "italiensk", subcategory: "Tynn bunn" },
  { id: 28, name: "Pollo",                desc: "Kylling, løk, paprika og mais",                 medium: 210, stor: 260, category: "italiensk", subcategory: "Tynn bunn" },
  { id: 29, name: "Roma",                 desc: "Løk, pepperoni, skinke og biff",                medium: 220, stor: 270, category: "italiensk", subcategory: "Tynn bunn" },

  // Italiensk – Innbakt pizza
  { id: 30, name: "Calzone",              desc: "Ost, skinke og tomatsaus",                      price: 190, category: "italiensk", subcategory: "Innbakt pizza" },
  { id: 31, name: "Romana",               desc: "Løk, biff og champignon",                       price: 200, category: "italiensk", subcategory: "Innbakt pizza" },
  { id: 32, name: "Taco Kylling",         desc: "Kylling, løk, champignon og mais",              price: 200, category: "italiensk", subcategory: "Innbakt pizza" },

  // Italiensk – Halvinnbakt pizza
  { id: 33, name: "Halvinnbakt m/ biff",      desc: "Løk, biff, sopp og tomat",                   price: 195, category: "italiensk", subcategory: "Halvinnbakt pizza" },
  { id: 34, name: "Halvinnbakt m/ kylling",   desc: "Kylling, mais og tomat",                     price: 195, category: "italiensk", subcategory: "Halvinnbakt pizza" },
  { id: 35, name: "Halvinnbakt m/ pepperoni", desc: "Pepperoni, bacon og paprika",                price: 195, category: "italiensk", subcategory: "Halvinnbakt pizza" },
  { id: 36, name: "Halvinnbakt m/ dønerkebab",desc: "Dønerkebab, champignon, mais og tomat",      price: 205, category: "italiensk", subcategory: "Halvinnbakt pizza" },
  { id: 37, name: "UFO Pizza",                desc: "Løk, skinke, biff og champignon",            price: 230, category: "italiensk", subcategory: "Halvinnbakt pizza" },

  // Kebab
  { id: 38, name: "Kebab i pita",                    price: 125, category: "kebab" },
  { id: 39, name: "Stor kebab i pita",               price: 160, category: "kebab" },
  { id: 40, name: "Kebabtallerken",                  price: 165, category: "kebab" },
  { id: 41, name: "Stor kebabtallerken",             price: 190, category: "kebab" },
  { id: 42, name: "Kyllingkebab i pita",             price: 135, category: "kebab" },
  { id: 43, name: "Stor kyllingkebab i pita",        price: 165, category: "kebab" },
  { id: 44, name: "Kyllingkebabtallerken",           price: 170, category: "kebab" },
  { id: 45, name: "Stor kyllingkebabtallerken",      price: 200, category: "kebab" },
  { id: 46, name: "Mix kylling og kebab i pita",     price: 140, category: "kebab" },
  { id: 47, name: "Mix kylling og kebab tallerken",  price: 200, category: "kebab" },
  { id: 48, name: "Kebabrull",                       price: 150, category: "kebab", popular: true },
  { id: 49, name: "Stor kebabrull",                  price: 180, category: "kebab" },
  { id: 50, name: "Kyllingkebabrull",                price: 160, category: "kebab" },
  { id: 51, name: "Stor kyllingkebabrull",           price: 190, category: "kebab" },
  { id: 52, name: "Døner i pita",                    price: 150, category: "kebab" },
  { id: 53, name: "Stor døner i pita",               price: 170, category: "kebab" },
  { id: 54, name: "Døner kebabrull",                 price: 170, category: "kebab" },
  { id: 55, name: "Stor døner kebabrull",            price: 195, category: "kebab" },
  { id: 56, name: "Døner kebabtallerken",            price: 205, category: "kebab" },
  { id: 57, name: "Stor døner kebabtallerken",       price: 220, category: "kebab" },
  { id: 58, name: "Falafelrull",                     price: 150, category: "kebab" },

  // Salat (under kebab)
  { id: 59, name: "Ost og skinke salat",  desc: "Saus inkludert", price: 125, category: "kebab", subcategory: "Fresh Salat" },
  { id: 60, name: "Kyllingsalat",         desc: "Saus inkludert", price: 125, category: "kebab", subcategory: "Fresh Salat" },

  // Grill – Tallerkner
  { id: 61, name: "Løvstektallerken",           desc: "Med salat og pommes frites",            price: 165, category: "grill" },
  { id: 62, name: "Felafeltallerken",           desc: "Med salat og pommes frites",            price: 160, category: "grill" },
  { id: 63, name: "Fish & Chips-tallerken",     desc: "Med salat og pommes frites",            price: 170, category: "grill", isNew: true },
  { id: 64, name: "Kyllingburgertallerken",     desc: "Med salat og pommes frites",            price: 155, category: "grill" },
  { id: 65, name: "Hamburgertallerken 100 gr.", desc: "Med salat og pommes frites",            price: 130, category: "grill" },
  { id: 66, name: "Hamburgertallerken 160 gr.", desc: "Med salat og pommes frites",            price: 145, category: "grill" },
  { id: 67, name: "Hamburgertallerken 190 gr.", desc: "Med salat og pommes frites",            price: 165, category: "grill" },
  { id: 68, name: "Hamburgertallerken 250 gr.", desc: "Med salat og pommes frites",            price: 190, category: "grill" },
  { id: 69, name: "Biffsnaddertallerken",       desc: "Med salat og pommes frites",            price: 180, category: "grill" },
  { id: 70, name: "Kylling nuggets tallerken",  desc: "Med salat og pommes frites",            price: 155, category: "grill" },
  { id: 71, name: "1/2 Kyllingtallerken",       desc: "Med salat og pommes frites",            price: 175, category: "grill" },

  // Grill – Burgere
  { id: 72, name: "Løvstekburger",       desc: "Med salat og dressing",        price: 120, category: "grill", subcategory: "Burgere" },
  { id: 73, name: "Kyllingburger",       desc: "Med salat og dressing",        price: 120, category: "grill", subcategory: "Burgere" },
  { id: 74, name: "Hamburger 100 gr.",                                       price: 95,  category: "grill", subcategory: "Burgere" },
  { id: 75, name: "Hamburger 160 gr.",                                       price: 115, category: "grill", subcategory: "Burgere", popular: true },
  { id: 76, name: "Hamburger 190 gr.",                                       price: 135, category: "grill", subcategory: "Burgere" },
  { id: 77, name: "Hamburger 250 gr.",                                       price: 160, category: "grill", subcategory: "Burgere" },
  { id: 78, name: "Cheeseburger 100 gr.",                                    price: 105, category: "grill", subcategory: "Burgere" },
  { id: 79, name: "Cheeseburger 160 gr.",                                    price: 125, category: "grill", subcategory: "Burgere" },
  { id: 80, name: "Cheeseburger 190 gr.",                                    price: 145, category: "grill", subcategory: "Burgere" },
  { id: 81, name: "Cheeseburger 250 gr.",                                    price: 170, category: "grill", subcategory: "Burgere" },
  { id: 82, name: "Baconcheese 100 gr.",                                     price: 115, category: "grill", subcategory: "Burgere" },
  { id: 83, name: "Baconcheese 160 gr.",                                     price: 135, category: "grill", subcategory: "Burgere" },
  { id: 84, name: "Baconcheese 190 gr.",                                     price: 155, category: "grill", subcategory: "Burgere" },
  { id: 85, name: "Baconcheese 250 gr.",                                     price: 180, category: "grill", subcategory: "Burgere" },

  // Bakt Potet
  { id: 86, name: "Bakt potet m/ skinke",          price: 170, category: "bakt-potet", isNew: true },
  { id: 87, name: "Bakt potet m/ skinke og bacon", price: 180, category: "bakt-potet", isNew: true },
  { id: 88, name: "Bakt potet m/ kylling",         price: 180, category: "bakt-potet", isNew: true },
  { id: 89, name: "Bakt potet m/ døner",           price: 180, category: "bakt-potet", isNew: true },

  // Barnemeny
  { id: 90, name: "Kyllingnuggets med pommes frites", price: 100, category: "barnemeny" },
  { id: 91, name: "Hamburger med pommes frites",      price: 110, category: "barnemeny" },
  { id: 92, name: "Pommes frites med pølse",          price: 95,  category: "barnemeny" },
  { id: 93, name: "Pommes frites",                    price: 50,  category: "barnemeny" },
  { id: 94, name: "Stor pommes frites",               price: 75,  category: "barnemeny" },
  { id: 95, name: "Pizza m/ skinke",                  price: 100, category: "barnemeny" },
  { id: 96, name: "Kebab i pita",                     price: 95,  category: "barnemeny" },
  { id: 97, name: "Chilicheese",         desc: "4 stk.", price: 60,  category: "barnemeny" },
  { id: 98, name: "Søtpotetfries",                    price: 70,  category: "barnemeny" },

  // Drikke
  { id: 99,  name: "Brus 1,5 L",         price: 55, category: "drikke" },
  { id: 100, name: "Brus 0,5 L",         price: 35, category: "drikke" },
  { id: 101, name: "Energidrikk 0,5 L",  price: 45, category: "drikke" },
];

const FEATURED = [
  {
    name: "Sem Spesial",
    desc: "Vår signaturpizza – løk, pepperoni, skinke, biff, bacon og champignon",
    price: "Fra 245,–",
    image: "/images/pizza-pepperoni.jpg",
    tag: "Signaturrett",
  },
  {
    name: "Kebabrull",
    desc: "Den beste kebaben i Sem – frisk, saftig og med nydelig dressing",
    price: "150,–",
    image: "/images/kebab.jpg",
    tag: "Anbefalt",
  },
  {
    name: "Hamburger 160 gr.",
    desc: "Saftig burger – fås også som cheeseburger eller med bacon & cheese",
    price: "115,–",
    image: "/images/burger.jpg",
    tag: "Favoritt",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "amerikansk", label: "Amerikansk Pizza" },
  { id: "italiensk",  label: "Italiensk Pizza" },
  { id: "kebab",      label: "Kebab" },
  { id: "grill",      label: "Grill" },
  { id: "bakt-potet", label: "Bakt Potet" },
  { id: "barnemeny",  label: "Barnemeny" },
  { id: "drikke",     label: "Drikke" },
];

const TILLEGG: Partial<Record<Category, string>> = {
  amerikansk: "Tillegg: Hvitløksdressing 20,- · Tomatsaus 20,- · Ost 30,- · Kjøtt 30,-",
  italiensk:  "Tillegg: Hvitløksdressing 20,- · Tomatsaus 20,- · Ost 30,- · Kjøtt 30,-",
  grill:      "Tillegg: Ost 15,- · Bacon 15,-",
};

function formatPrice(item: MenuItem) {
  if (item.medium != null && item.stor != null) {
    return `${item.medium},– / ${item.stor},–`;
  }
  return `${item.price},–`;
}

export default function Menu() {
  const [active, setActive] = useState<Category>("amerikansk");

  const filtered = MENU_ITEMS.filter((item) => item.category === active);

  const hasSizes = filtered.some((i) => i.medium != null && i.stor != null);

  const grouped: { subcategory: string | null; items: MenuItem[] }[] = [];
  for (const item of filtered) {
    const key = item.subcategory ?? null;
    const last = grouped[grouped.length - 1];
    if (last && last.subcategory === key) {
      last.items.push(item);
    } else {
      grouped.push({ subcategory: key, items: [item] });
    }
  }

  return (
    <section id="meny" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <span className="text-[#FBC02D] text-xs font-semibold uppercase tracking-[0.2em]">
            Meny
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 uppercase tracking-tight">
            Noe for enhver smak
          </h2>
        </div>

        {/* Featured showcase */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 mb-20 border border-white/5">
          {FEATURED.map((item) => (
            <div key={item.name} className="relative overflow-hidden bg-[#1A1A1A] group">
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#C62828] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-2 py-1">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-white text-base">{item.name}</h3>
                  <span className="text-[#FBC02D] font-bold ml-4 whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-white/50 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-0 mb-8 border border-white/10 w-full md:w-fit">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase whitespace-nowrap transition-colors border-r border-white/10 last:border-r-0 ${
                active === cat.id
                  ? "bg-[#C62828] text-white"
                  : "bg-transparent text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Size header (only when category has medium/stor pricing) */}
        {hasSizes && (
          <div className="flex items-baseline justify-end gap-8 pb-2 px-1 text-white/35 text-[10px] font-bold uppercase tracking-[0.18em]">
            <span className="w-20 text-right">Medium</span>
            <span className="w-12 text-right">Stor</span>
          </div>
        )}

        {/* Menu list */}
        <div className="border-t border-white/10">
          {grouped.map((group, gi) => (
            <div key={gi}>
              {group.subcategory && (
                <div className="pt-8 pb-3 border-b border-white/10">
                  <span className="text-[#FBC02D] text-[11px] font-bold uppercase tracking-[0.2em]">
                    {group.subcategory}
                  </span>
                </div>
              )}
              {group.items.map((item) => {
                const hasTwoPrices = item.medium != null && item.stor != null;
                return (
                  <div
                    key={item.id}
                    className="flex items-baseline justify-between py-4 border-b border-white/5 group hover:bg-white/[0.02] px-1 transition-colors"
                  >
                    <div className="flex-1 pr-6">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-white text-sm tracking-wide">
                          {item.name}
                        </span>
                        {item.popular && (
                          <span className="text-[#FBC02D] text-[10px] font-bold uppercase tracking-wider border border-[#FBC02D]/40 px-1.5 py-0.5">
                            Populær
                          </span>
                        )}
                        {item.spicy && (
                          <span className="text-[#C62828] text-[10px] font-bold uppercase tracking-wider border border-[#C62828]/40 px-1.5 py-0.5">
                            Sterk
                          </span>
                        )}
                        {item.isNew && (
                          <span className="text-[#C62828] text-[10px] font-bold uppercase tracking-wider border border-[#C62828]/40 px-1.5 py-0.5">
                            Ny
                          </span>
                        )}
                      </div>
                      {item.desc && (
                        <p className="text-white/40 text-xs mt-1 leading-relaxed">{item.desc}</p>
                      )}
                    </div>
                    {hasTwoPrices ? (
                      <div className="flex items-baseline gap-8 text-white font-semibold text-sm tabular-nums whitespace-nowrap">
                        <span className="w-20 text-right">{item.medium},–</span>
                        <span className="w-12 text-right">{item.stor},–</span>
                      </div>
                    ) : (
                      <span className="text-white font-semibold text-sm tabular-nums whitespace-nowrap">
                        {formatPrice(item)}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Tillegg / extras note */}
        {TILLEGG[active] && (
          <p className="mt-6 text-white/40 text-xs tracking-wide">
            {TILLEGG[active]}
          </p>
        )}

        {/* Disclaimer */}
        <p className="mt-3 text-white/25 text-xs italic">
          Vær oppmerksom på at prisene kan variere ved kampanjer eller endringer hos restauranten.
        </p>

        {/* Foodora CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Levering via</p>
            <p className="text-white font-semibold">Foodora – raskt og enkelt</p>
          </div>
          <a
            href="https://www.foodora.no/restaurant/yxd5/sem-pizza-and-grill"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FBC02D] hover:bg-yellow-400 text-[#1A1A1A] font-bold text-sm uppercase tracking-[0.12em] px-8 py-3.5 transition-colors"
          >
            Bestill nå
          </a>
        </div>
      </div>
    </section>
  );
}
