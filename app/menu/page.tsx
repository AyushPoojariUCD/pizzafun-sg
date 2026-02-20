import MenuSidebar from "@/components/menu/MenuSidebar";
import MenuSection from "@/components/menu/MenuSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";    
import { menuCategories } from "@/data/menuData";

export default function MenuPage() {
  return (
    <main>
    <Header />
    <div className="relative min-h-screen text-white">

      {/* Background image */}
      <div
        className="fixed inset-0 -z-10 bg-center bg-repeat"
        style={{
          backgroundImage: "url('/images/menu/menu-bg.webp')",
          backgroundColor: "#000",
        }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 -z-10 bg-black/30" />
      {/* Content */}
      <div className="max-w-7xl mx-auto flex gap-10 px-6 py-20">

        <MenuSidebar categories={menuCategories} />

        <div className="flex-1">

          {menuCategories.map((category) => (
            <MenuSection
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </div>

    </div>
    <Footer />
    </main>
  );
}