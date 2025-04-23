"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { StarIcon } from "@heroicons/react/24/solid";

const trendingItems = [
  {
    id: 1,
    title: "Pizza Paperoni",
    category: "Pizza",
    rating: 4,
    image: "/pizza-peperoni.svg",
    bg: "bg-[var(--color-secondary-light)]",
  },
  {
    id: 2,
    title: "Pizza Meat",
    category: "Pizza",
    rating: 3,
    image: "/pizza-meat.svg",
    bg: "bg-[var(--color-secondary-light)]",
  },
  {
    id: 3,
    title: "Doner Kebab",
    category: "Kebab",
    rating: 5,
    image: "/doner-kebab.svg",
    bg: "bg-[var(--color-accent-light)]",
  },
  {
    id: 4,
    title: "Salmon Roll",
    category: "Salmon",
    rating: 4,
    image: "/salmon-roll.svg",
    bg: "bg-[var(--color-wine-light)]",
  },
  {
    id: 5,
    title: "Cupcake Choco",
    category: "Cupcake",
    rating: 4,
    image: "/cupcake-choco.svg",
    bg: "bg-[var(--color-primary-light)]",
  },
  {
    id: 6,
    title: "Doughnut Milk",
    category: "Doughnut",
    rating: 5,
    image: "/doughnut-milk.svg",
    bg: "bg-[var(--color-lime-light)]",
  },
  {
    id: 7,
    title: "Doughnut Unicorn",
    category: "Doughnut",
    rating: 4,
    image: "/doughnut-unicorn.svg",
    bg: "bg-[var(--color-lime-light)]",
  },
  {
    id: 8,
    title: "Kathi Kebab",
    category: "Kebab",
    rating: 4,
    image: "/kathi-kebab.svg",
    bg: "bg-[var(--color-accent-light)]",
  },
];

export default function Trending() {
  return (
    <section className="w-full bg-white py-10 sm:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-2">
          Browser Our Trending
        </h2>
        <p className="text-3xl md:text-4xl font-medium text-[var(--color-primary)] mb-10">
          Receipt
        </p>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingItems.map((item) => (
            <div
              key={item.id}
              className={`relative w-full h-[290px] rounded-2xl flex flex-col items-start text-left py-8 px-6 ${item.bg} group cursor-pointer`}>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition duration-300 rounded-2xl"
                style={{
                  backgroundImage: `url('/bg-hero.svg')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="rounded-md z-10 mb-4 object-cover"
              />

              <h4 className="font-medium text-2xl text-gray-800 z-10 mb-1">
                {item.title}
              </h4>

              <p className="text-xl text-[var(--color-primary)] z-10 mb-2">
                {item.category}
              </p>

              <div className="flex justify-center gap-1 z-10">
                {Array.from({ length: 5 }, (_, i) => {
                  const getStarIcon = () => {
                    if (item.rating === 0)
                      return (
                        <StarIcon className="text-gray-300 opacity-100 w-3 h-3" />
                      );
                    if (i + 1 <= Math.floor(item.rating))
                      return (
                        <StarIcon className="text-orange-400 opacity-100 w-3 h-3" />
                      );
                    if (i + 0.5 === item.rating)
                      return (
                        <StarIcon className="text-orange-400 opacity-50 w-3 h-3" />
                      );
                    return <StarIcon className="text-gray-300 w-3 h-3" />;
                  };

                  return (
                    <span key={i} className="text-sm">
                      {getStarIcon()}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/receipt" variant="primary" size="default">
            All Receipt
          </Button>
        </div>
      </div>
    </section>
  );
}
