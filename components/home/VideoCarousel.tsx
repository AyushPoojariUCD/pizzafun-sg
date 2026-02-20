"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const videos = [
  { src: "/videos/cluckin-pizza.mp4" },
  { src: "/videos/bundle-of-joy-burger.mp4" },
  { src: "/videos/rollin-with-flavour.mp4" },
  { src: "/videos/grab-and-gobble.mp4" },
];

export default function VideoCarousel() {
  return (
    <section className="relative w-full overflow-hidden">

      <Carousel
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>

          {videos.map((video, index) => (
            <CarouselItem key={index}>

              {/* Responsive 16:9 container */}
              <div className="relative w-full aspect-video">

                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                  "
                />

              </div>

            </CarouselItem>
          ))}

        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="left-4 md:left-8" />
        <CarouselNext className="right-4 md:right-8" />

      </Carousel>

    </section>
  );
}