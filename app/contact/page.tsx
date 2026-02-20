"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import StoreLocator from "@/components/contact/StoreLocater";

export default function ContactPage() {

  return (
    <main>

      <Header />

      <div
        className="min-h-screen text-white bg-fixed bg-center bg-repeat"
        style={{
          backgroundImage: "url('/images/menu/menu-bg.webp')",
        }}
      >

        <div className="bg-white/10 min-h-screen py-20">

          <div className="max-w-7xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">

                <h1
                    className="
                        text-4xl md:text-5xl font-bold text-white
                        transition-all duration-300 ease-out
                        hover:text-yellow-400
                        hover:scale-[1.02]
                        hover:drop-shadow-[0_0_12px_rgba(255,200,0,0.6)]
                        cursor-default
                    "
                    >
                    WE WOULD LOVE TO HEAR FROM YOU
                    </h1>

                    <p
                    className="
                        text-2xl text-gray-300 mt-3
                        transition-all duration-300 ease-out
                        hover:text-white
                        hover:translate-y-[-2px]
                    "
                    >
                    Drop us a line to say hello
                    </p>
            </div>

            {/* Cards */}
            <ContactCards />

            {/* Form */}
            <ContactForm />

            

          </div>

        </div>

      </div>

      <StoreLocator/>

      <Footer />

    </main>
  );
}