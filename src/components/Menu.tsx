"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "alle" | "pizza" | "kebab" | "burger" | "grill" | "barn" | "salater";

interface MenuItem {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: Exclude<Category, "alle">;
  popular?: boolean;
  spicy?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: "Sem Spesial", desc: "Tomatsaus, mozzarella, pepperoni, skinke, paprika, løk og oliven", price: 179, category: "pizza", popular: true },
  { id: 2, name: "Margherita", desc: "Tomatsaus, mozzarella og frisk basilikum", price: 139, category: "pizza" },
  { id: 3, name: "Pepperoni", desc: "Tomatsaus, mozzarella og rikelig med pepperoni", price: 155, category: "pizza" },
  { id: 4, name: "Vegetar", desc: "Tomatsaus, mozzarella, paprika, sopp, løk og oliven", price: 149, category: "pizza" },
  { id: 5, name: "Innbakt Pizza", desc: "Fyldig pizza bakt inn i sprø deig – velg ditt eget fyll", price: 169, category: "pizza", popular: true },
  { id: 6, name: "Hawaii", desc: "Tomatsaus, mozzarella, skinke og ananas", price: 149, category: "pizza" },
  { id: 7, name: "Kebab Rulle", desc: "Grillet kebabkjøtt, friske grønnsaker og kebabsaus i tynt pitabrød", price: 125, category: "kebab", popular: true },
  { id: 8, name: "Kebab Tallerken", desc: "Grillet kebabkjøtt med pommes frites, salat og kebabsaus", price: 155, category: "kebab" },
  { id: 9, name: "Kebab Pita", desc: "Saftig kebabkjøtt i varmt pitabrød med grønnsaker og saus", price: 115, category: "kebab" },
  { id: 10, name: "Spicy Kebab Rulle", desc: "Krydret kebabkjøtt med sterk saus og jalapeños", price: 130, category: "kebab", spicy: true },
  { id: 11, name: "Classic Cheeseburger", desc: "Saftig biff, cheddar, salat, tomat, løk og husetsaus i briochebrød", price: 145, category: "burger", popular: true },
  { id: 12, name: "Double Burger", desc: "To bifflapper, dobbel ost, bacon og alle klassiske tilbehør", price: 175, category: "burger" },
  { id: 13, name: "Bacon Burger", desc: "Biff, sprøstekt bacon, cheddar og BBQ-saus", price: 159, category: "burger" },
  { id: 14, name: "Grillet Kylling", desc: "Hel grillet kylling krydret med hemmelig krydderblanding", price: 189, category: "grill" },
  { id: 15, name: "Grilltallerken", desc: "Blanding av grillet kjøtt, pommes frites og saus", price: 215, category: "grill", popular: true },
  { id: 16, name: "Gresk Salat", desc: "Fetaost, oliven, tomat, agurk og rødløk", price: 109, category: "salater" },
  { id: 17, name: "Kyllingsalat", desc: "Grillet kylling, romanosalat, parmesan og Caesar-dressing", price: 129, category: "salater" },
  { id: 18, name: "Barnemeny Pizza", desc: "Liten pizza med tomatsaus og mozzarella + brus 0,33 l", price: 89, category: "barn" },
  { id: 19, name: "Barnemeny Burger", desc: "Mini burger med ost, pommes frites og brus 0,33 l", price: 89, category: "barn" },
];

const FEATURED = [
  {
    name: "Sem Spesial",
    desc: "Vår signaturpizza – pepperoni, skinke, paprika, løk og oliven",
    price: 179,
    image: "/images/pizza-pepperoni.jpg",
    tag: "Signaturrett",
  },
  {
    name: "Kebab Rulle",
    desc: "Den beste kebaben i Sem – frisk, saftig og med nydelig pitabrød",
    price: 125,
    image: "/images/kebab.jpg",
    tag: "Anbefalt",
  },
  {
    name: "Classic Cheeseburger",
    desc: "Husetsaus, cheddar og saftig biff – en burger du kommer tilbake for",
    price: 145,
    image: "/images/burger.jpg",
    tag: "Favoritt",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "pizza", label: "Pizza" },
  { id: "kebab", label: "Kebab" },
  { id: "burger", label: "Burger" },
  { id: "grill", label: "Grill" },
  { id: "salater", label: "Salater" },
  { id: "barn", label: "Barn" },
];

export default function Menu() {
  const [active, setActive] = useState<Category>("alle");

  const filtered =
    active === "alle"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === active);

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
        <div className="flex gap-0 overflow-x-auto mb-8 border border-white/10 w-fit">
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
                <div className="flex items-center gap-3">
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
                <p className="text-white/40 text-xs mt-1 leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-white font-semibold text-sm tabular-nums whitespace-nowrap">
                {item.price},–
              </span>
            </div>
          ))}
        </div>

        {/* Foodora CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
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
