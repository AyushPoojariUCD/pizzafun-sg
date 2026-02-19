import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PartnersCarousel from "@/components/home/ParentCarousel";

export default function Home() {
  return (
    <main>
      {/*Header Compoenent*/}
      <Header />
      <PartnersCarousel />
      <Footer />
    </main>
  );
}
