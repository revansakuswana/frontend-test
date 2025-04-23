"use client";

import Image from "next/image";
import Link from "next/link";
import logoElemes from "@/public/logo.svg";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="w-full lg:fixed top-0 z-50 bg-transparent border-b border-gray-200 lg:border-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-7 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={logoElemes}
            alt="Elemes Logo"
            className="w-[150px] sm:w-[207px]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-black transition">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-black transition">
            About
          </Link>
          <Link
            href="/promotions"
            className="text-gray-700 hover:text-black transition relative">
            <div className="relative inline-block">
              Promotions
              <Badge>HOT</Badge>
            </div>
          </Link>
          <Link
            href="/blogs"
            className="text-gray-700 hover:text-black transition">
            Blogs
          </Link>
          <Link
            href="/contacts"
            className="text-gray-700 hover:text-black transition">
            Contacts
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button href="/login" variant="secondary" size="default">
            Masuk
          </Button>
          <Button href="/register" variant="primary" size="default">
            Daftar Sekarang
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Button href="/register" variant="primary" size="default">
            Daftar Sekarang
          </Button>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex justify-around items-center py-2 lg:hidden">
        <Link
          href="/"
          className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <Bars3Icon className="h-6 w-6" />
          <span className="text-sm mt-1">Home</span>
        </Link>
        <Link
          href="/promotions"
          className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <Bars3Icon className="h-6 w-6" />
          <span className="text-sm mt-1">Promotions</span>
        </Link>
        <Link
          href="/others"
          className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <Bars3Icon className="h-6 w-6" />
          <span className="text-sm mt-1">Others</span>
        </Link>
      </nav>
    </header>
  );
}
