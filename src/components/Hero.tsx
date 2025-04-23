import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <div>
      <section className="inset-0 z-0 relative w-full md:min-h-screen flex items-center bg-white">
        <div
          className="absolute inset-0 z-[-1] w-full h-full bg-cover bg-center opacity-[0.02]"
          style={{
            backgroundImage: `url('/bg-hero.svg')`,
          }}></div>

        <div className="container mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center md:gap-20">
          <div className="order-1 md:order-1 text-left">
            <h1 className="text-left text-5xl md:text-6xl font-medium text-[var(--color-primary)] leading-tight sm:leading-[64px] mb-14 md:mb-6">
              Good Food Us <br /> Good Mood
            </h1>

            <div className="relative w-fit md:hidden mb-6 left-6">
              <Image
                src="/hero.svg"
                alt="Salad"
                width={200}
                height={200}
                priority
                className="rounded-full mb-20 shadow-[0_0_0_20px_rgba(0,0,0,0.03)] object-cover"
              />
              <div className="absolute -bottom-6 sm:-bottom-2 left-20 sm:-right-2 transform bg-white/60 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 w-60 flex items-center gap-3">
                <Image
                  src="/hero.svg"
                  alt="thumb"
                  width={45}
                  height={45}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-sm">Green Salad Tomato</h4>
                  <p className="text-xs text-gray-500">Tomato</p>
                  <div className="flex text-orange-400">
                    {Array.from({ length: 5 }, (_, i) => {
                      const rating = 4;

                      if (i < Math.floor(rating)) {
                        return <StarIcon key={i} className="w-3 h-3" />;
                      }
                      if (i === Math.floor(rating) && rating % 1 !== 0) {
                        return (
                          <StarIcon className="w-3 h-3 opacity-50" key={i} />
                        );
                      }
                      return (
                        <StarIcon
                          key={i}
                          className="text-gray-300 w-3 h-3 opacity-50"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed font-normal">
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>

            <div className="flex flex-row sm:flex-row gap-4 justify-start">
              <Button href="/register" variant="primary" size="default">
                Daftar Sekarang
              </Button>
              <Button href="/about" variant="third" size="default">
                About Us
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block order-2 justify-items-center">
            <Image
              src="/hero.svg"
              alt="Salad"
              width={414}
              height={414}
              priority
              className="rounded-full shadow-[0_0_0_60px_rgba(0,0,0,0.03)] object-cover"
            />
            <div className="absolute -bottom-4 left-1/4 transform -translate-x-1/2 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 w-[292px] flex items-center gap-3">
              <Image
                src="/hero.svg"
                alt="thumb"
                width={45}
                height={45}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium text-sm">Green Salad Tomato</h4>
                <p className="text-sm text-gray-500">Tomato</p>
                <div className="flex text-orange-400">
                  {Array.from({ length: 5 }, (_, i) => {
                    const rating = 4;

                    if (i < Math.floor(rating)) {
                      return <StarIcon key={i} className="w-5 h-5" />;
                    }
                    if (i === Math.floor(rating) && rating % 1 !== 0) {
                      return (
                        <StarIcon className="w-5 h-5 opacity-50" key={i} />
                      );
                    }
                    return (
                      <StarIcon
                        key={i}
                        className="text-gray-300 w-5 h-5 opacity-50"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
