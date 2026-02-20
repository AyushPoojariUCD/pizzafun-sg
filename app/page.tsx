import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryCards from "@/components/home/DiscountBanner";
import DiscountBanner from "@/components/home/CategoryCards";
import VideoCarousel from "@/components/home/VideoCarousel";
import PizzaPromoSection from "@/components/home/PizzaPromoSection";
import PromoSection from "@/components/home/PromoSection";

export default function Home() {
  return (
    <main>
      <Header />
      <VideoCarousel/>
      <CategoryCards/>
      <DiscountBanner/>
      <PizzaPromoSection />
      <PromoSection />
      <Footer />
    </main>
  );
}
