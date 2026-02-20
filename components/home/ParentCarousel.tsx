"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const partners = [
  "/images/partners/grabfood.jpg",
  "/images/partners/foodpanda.jpg",
  "/images/partners/deliveroo.jpg",
  "/images/partners/keralaeats.png",
  "/images/partners/foodline.png",
  "/images/partners/caterspot.png",
  "/images/partners/islandwide.png",
];

export default function PartnersCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000); // Change speed here

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-semibold mb-10 text-center">
          We are available on
        </h2>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {partners.map((logo, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div className="flex items-center justify-center p-6">
                  <Image
                    src={logo}
                    alt="Partner"
                    width={140}
                    height={80}
                    className="object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  );
}
