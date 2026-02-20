"use client";

import { useState } from "react";

import MenuSidebar from "@/components/menu/MenuSidebar";
import MenuSection from "@/components/menu/MenuSection";
import MenuFilter from "@/components/menu/MenuFilter";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { menuCategories } from "@/data/menuData";

export default function MenuPage() {

  const [filters, setFilters] = useState({
    veg: false,
    nonveg: false,
    spicy: false,
  });

  return (
    <main>

      <Header />

      <div className="relative min-h-screen text-white">

        {/* Background */}
        <div
          className="fixed inset-0 -z-10 bg-center bg-repeat"
          style={{
            backgroundImage: "url('/images/menu/menu-bg.webp')",
          }}
        />

        <div className="fixed inset-0 -z-10 bg-black/30" />

        {/* Content */}
        <div className="max-w-7xl mx-auto flex gap-10 px-6 py-20">

          <MenuSidebar categories={menuCategories} />

          <div className="flex-1">

            {/* FILTER */}
            <MenuFilter
              filters={filters}
              setFilters={setFilters}
            />

            {/* MENU */}
            {menuCategories.map(category => (
              <MenuSection
                key={category.id}
                category={category}
                filters={filters}
              />
            ))}

          </div>

        </div>

      </div>

      <Footer />

    </main>
  );
}