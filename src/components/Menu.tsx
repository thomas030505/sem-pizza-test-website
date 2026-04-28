"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "pizza" | "kebab" | "grill" | "bakt-potet" | "salat" | "barnemeny" | "drikke";

interface MenuItem {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: Category;
  popular?: boolean;
  spicy?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  // Amerikansk Pizza
  { id: 1,  name: "Hawaii",              desc: "Tomatsaus, ost, pepperoni, skinke og ananas",                                                             price: 220, category: "pizza" },
  { id: 2,  name: "Kebabpizza",          desc: "Tomatsaus, ost, kebabkjøtt, løk, champignon, mais, paprika og jalapenos",                                 price: 290, category: "pizza", spicy: true },
  { id: 3,  name: "Kylling Pizza",       desc: "Tomatsaus, ost, løk, kylling, paprika og ananas",                                                         price: 290, category: "pizza" },
  { id: 4,  name: "City Pizza",          desc: "Ost, tomat, løk, pepperoni, biff, champignon, paprika, jalapenos og ananas",                              price: 320, category: "pizza", spicy: true },
  { id: 5,  name: "Taco",               desc: "Tomatsaus, ost, tacokjøtt, løk, mais, paprika og jalapenos",                                              price: 270, category: "pizza", spicy: true },
  { id: 6,  name: "Barca Spesiale",     desc: "Tomatsaus, ost, purreløk, skinke, kjøttdeig, bacon og paprika",                                           price: 290, category: "pizza" },
  { id: 7,  name: "Sem Spesial",        desc: "Tomatsaus, ost, løk, pepperoni, skinke, biff, bacon og champignon",                                       price: 320, category: "pizza", popular: true },
  { id: 8,  name: "Husets Spesial",     desc: "Tomatsaus, ost, purreløk, kylling, biff, taco kjøttdeig, champignon, mais og paprika",                    price: 320, category: "pizza", popular: true },
  { id: 9,  name: "Mexicana",           desc: "Tomatsaus, ost, kebabkjøtt, kylling, løk og paprika",                                                     price: 320, category: "pizza" },
  { id: 10, name: "Milano",             desc: "Tomatsaus, ost, løk, pepperoni, skinke, biff og paprika",                                                 price: 320, category: "pizza" },
  { id: 11, name: "Klassisk Biff",      desc: "Ost, tomatsaus, løk, biff, champignon og oliven",                                                         price: 320, category: "pizza" },
  { id: 12, name: "Ozmana",             desc: "Tomatsaus, ost, purreløk, pepperoni, kylling og paprika",                                                 price: 320, category: "pizza" },
  { id: 13, name: "Døner Pizza",        desc: "Tomatsaus, ost, døner kebabkjøtt, løk, tomat, mais og sopp. Toppet med pommes frites",                    price: 320, category: "pizza", popular: true },
  { id: 14, name: "Vegetar",            desc: "Tomatsaus, ost, løk, champignon, paprika, tomat, mais, ananas og oliven",                                 price: 250, category: "pizza" },

  // Kebab
  { id: 15, name: "Kebab i Pita",                  desc: "Kebab i pitabrød med salat og dressing",                             price: 120, category: "kebab" },
  { id: 16, name: "Kyllingkebab i Pita",           desc: "Kyllingkebab i pitabrød med salat og dressing",                     price: 160, category: "kebab" },
  { id: 17, name: "Dönerkebab i Pita",             desc: "Dönerkebab i pitabrød med salat og dressing",                       price: 170, category: "kebab" },
  { id: 18, name: "Kebabrull",                     desc: "Kebabrull med salat og dressing",                                   price: 152, category: "kebab", popular: true },
  { id: 19, name: "Kyllingkebabrull",              desc: "Kyllingkebabrull med salat og dressing",                            price: 200, category: "kebab" },
  { id: 20, name: "Dönerkebabrull",                desc: "Dönerkebabrull med salat og dressing",                              price: 210, category: "kebab" },
  { id: 21, name: "Kebabtallerken",                desc: "Kebabtallerken med salat og pommes frites",                         price: 220, category: "kebab" },
  { id: 22, name: "Kyllingkebabtallerken",         desc: "Kyllingkebabtallerken med salat og pommes frites",                  price: 230, category: "kebab" },
  { id: 23, name: "Kylling & Kebab Mix",           desc: "Kylling og kebab i pitabrød med salat og dressing",                 price: 190, category: "kebab" },
  { id: 24, name: "Kylling & Kebab Mix Tallerken", desc: "Kylling og kebabtallerken med salat og pommes frites",              price: 240, category: "kebab" },
  { id: 25, name: "Dönerkebabtallerken",           desc: "Dönerkebabtallerken med salat og pommes frites",                    price: 250, category: "kebab" },

  // Grill
  { id: 26, name: "Hamburger",                 desc: "Med salat og dressing",                          price: 130, category: "grill", popular: true },
  { id: 27, name: "Cheeseburger",              desc: "Med salat og dressing",                          price: 145, category: "grill" },
  { id: 28, name: "Burger m/Bacon & Cheese",   desc: "Med salat og dressing",                          price: 160, category: "grill" },
  { id: 29, name: "Løvstekburger",             desc: "Løvstekburger med salat og dressing",            price: 150, category: "grill" },
  { id: 30, name: "Kyllingburger",             desc: "Kyllingburger med salat og dressing",            price: 150, category: "grill" },
  { id: 31, name: "Hamburgertallerken",        desc: "Med salat og pommes frites",                     price: 210, category: "grill" },
  { id: 32, name: "Kyllingburgertallerken",    desc: "Med salat og pommes frites",                     price: 200, category: "grill" },
  { id: 33, name: "Kyllingtallerken",          desc: "1/2 kylling med salat og pommes frites",         price: 220, category: "grill" },
  { id: 34, name: "Løvstektallerken",          desc: "Med salat og pommes frites",                     price: 200, category: "grill" },
  { id: 35, name: "Kylling Nuggets Tallerken", desc: "Kylling nuggets med salat og pommes frites",     price: 195, category: "grill" },
  { id: 36, name: "Biffsnaddertallerken",      desc: "Med salat og pommes frites",                     price: 280, category: "grill" },

  // Bakt Potet
  { id: 37, name: "Bakt Potet m/Skinke",          desc: "", price: 150, category: "bakt-potet" },
  { id: 38, name: "Bakt Potet m/Kylling",         desc: "", price: 200, category: "bakt-potet" },
  { id: 39, name: "Bakt Potet m/Døner",           desc: "", price: 210, category: "bakt-potet" },
  { id: 40, name: "Bakt Potet m/Skinke og Bacon", desc: "", price: 215, category: "bakt-potet" },

  // Salat
  { id: 41, name: "Kyllingsalat",       desc: "Salat med kylling, serveres med dressing",       price: 150, category: "salat" },
  { id: 42, name: "Ost & Skinke Salat", desc: "Salat med ost og skinke, serveres med dressing", price: 150, category: "salat" },

  // Barnemeny & Tilbehør
  { id: 43, name: "Pommes Frites",                    desc: "",                           price: 50,  category: "barnemeny" },
  { id: 44, name: "Chilicheese",                      desc: "4 stk.",                     price: 60,  category: "barnemeny" },
  { id: 45, name: "Søtpotet Pommes Frites",           desc: "",                           price: 80,  category: "barnemeny" },
  { id: 46, name: "Kebab i Pita Barnemeny",           desc: "",                           price: 120, category: "barnemeny" },
  { id: 47, name: "Pizza m/Skinke",                   desc: "Barnemeny",                  price: 130, category: "barnemeny" },
  { id: 48, name: "Kyllingnuggets m/Pommes Frites",   desc: "",                           price: 130, category: "barnemeny" },
  { id: 49, name: "Hamburger Barnemeny",              desc: "Med pommes frites",          price: 130, category: "barnemeny" },

  // Drikke
  { id: 50, name: "Coca Cola",      desc: "", price: 35, category: "drikke" },
  { id: 51, name: "Cola Zero",      desc: "", price: 35, category: "drikke" },
  { id: 52, name: "Pepsi Max",      desc: "", price: 35, category: "drikke" },
  { id: 53, name: "Fanta",          desc: "", price: 35, category: "drikke" },
  { id: 54, name: "Fanta Exotic",   desc: "", price: 35, category: "drikke" },
  { id: 55, name: "Sprite",         desc: "", price: 35, category: "drikke" },
  { id: 56, name: "Villa",          desc: "", price: 35, category: "drikke" },
  { id: 57, name: "Urge",           desc: "", price: 35, category: "drikke" },
  { id: 58, name: "Telemark Vann",  desc: "Med og uten kullsyre/sitron", price: 35, category: "drikke" },
];

const FEATURED = [
  {
    name: "Sem Spesial",
    desc: "Vår signaturpizza – løk, pepperoni, skinke, biff, bacon og champignon",
    price: 320,
    image: "/images/pizza-pepperoni.jpg",
    tag: "Signaturrett",
  },
  {
    name: "Kebabrull",
    desc: "Den beste kebaben i Sem – frisk, saftig og med nydelig dressing",
    price: 152,
    image: "/images/kebab.jpg",
    tag: "Anbefalt",
  },
  {
    name: "Hamburger",
    desc: "Saftig burger med salat og dressing – fås også som cheeseburger eller med bacon & cheese",
    price: 130,
    image: "/images/burger.jpg",
    tag: "Favoritt",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "pizza",      label: "Amerikansk Pizza" },
  { id: "kebab",      label: "Kebab" },
  { id: "grill",      label: "Grill" },
  { id: "bakt-potet", label: "Bakt Potet" },
  { id: "salat",      label: "Salat" },
  { id: "barnemeny",  label: "Barnemeny & Tilbehør" },
  { id: "drikke",     label: "Drikke" },
];

export default function Menu() {
  const [active, setActive] = useState<Category>("pizza");

  const filtered = MENU_ITEMS.filter((item) => item.category === active);

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
                  <span className="text-[#FBC02D] font-bold ml-4 whitespace-nowrap">{item.price},–</span>
                </div>
                <p className="text-white/50 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-0 overflow-x-auto mb-8 border border-white/10 w-full md:w-fit">
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

        {/* Menu list */}
        <div className="border-t border-white/10">
          {filtered.map((item) => (
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
                </div>
                {item.desc && (
                  <p className="text-white/40 text-xs mt-1 leading-relaxed">{item.desc}</p>
                )}
              </div>
              <span className="text-white font-semibold text-sm tabular-nums whitespace-nowrap">
                {item.price},–
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-white/25 text-xs italic">
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
