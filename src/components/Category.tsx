"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const categories = [
  {
    id: 1,
    label: "Cupcake",
    count: 22,
    bg: "bg-[var(--color-primary-light)]",
    img: "/cupcake.svg",
  },
  {
    id: 2,
    label: "Pizza",
    count: 25,
    bg: "bg-[var(--color-secondary-light)]",
    img: "/pizza.svg",
  },
  {
    id: 3,
    label: "Kebab",
    count: 12,
    bg: "bg-[var(--color-accent-light)]",
    img: "/kebab.svg",
  },
  {
    id: 4,
    label: "Salmon",
    count: 22,
    bg: "bg-[var(--color-wine-light)]",
    img: "/salmon.svg",
  },
  {
    id: 5,
    label: "Doughnut",
    count: 11,
    bg: "bg-[var(--color-lime-light)]",
    img: "/doughnut.svg",
  },
  {
    id: 6,
    label: "Cupcakes",
    count: 22,
    bg: "bg-[var(--color-primary-light)]",
    img: "/cupcake.svg",
  },
];

export default function Category() {
  return (
    <section className="w-full bg-white py-10 sm:py-16 overflow-visible">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-1 sm:mb-2">
          Browse Our Category
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--color-primary)] mb-8 sm:mb-10">
          Receipt
        </p>
      </div>

      <div className="relative overflow-visible">
        <div className="sm:pl-6 lg:pl-8 xl:pl-28 pr-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.5}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            breakpoints={{
              390: { slidesPerView: 2.4 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5.4 },
            }}>
            {categories.map((item) => (
              <SwiperSlide
                key={item.id}
                className="overflow-hidden w-[180px] sm:w-[200px]">
                <div className="h-[200px]">
                  <div
                    className={`relative h-[150px] hover:h-[170px] rounded-xl flex flex-col justify-center items-center transition-all duration-300 cursor-pointer group ${item.bg}`}>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-xl"
                      style={{
                        backgroundImage: `url('/bg-hero.svg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <Image
                      src={item.img}
                      alt={item.label}
                      width={50}
                      height={50}
                      className="z-10 mb-4 sm:mb-6"
                    />
                    <h4 className="font-semibold text-gray-800 z-10 text-sm sm:text-base">
                      {item.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 z-10">
                      {item.count} Items
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container max-w-screen-xl mx-auto hidden sm:flex justify-end gap-4 px-4 sm:px-6 lg:px-8">
          <button className="custom-prev flex items-center gap-2 bg-[var(--color-primary)] text-white font-medium px-3 py-3 rounded-full">
            <div className="w-10 h-10 bg-white text-[var(--color-primary)] rounded-full flex items-center justify-center">
              <ChevronLeftIcon className="w-6 h-6" />
            </div>
            <span>PREV</span>
          </button>
          <button className="custom-next flex items-center gap-2 bg-[var(--color-primary)] text-white font-medium px-3 py-3 rounded-full">
            <span>NEXT</span>
            <div className="w-10 h-10 bg-white text-[var(--color-primary)] rounded-full flex items-center justify-center">
              <ChevronRightIcon className="w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
