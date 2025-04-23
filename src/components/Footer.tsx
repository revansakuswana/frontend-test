import Image from "next/image";
import { Mail, Phone, Instagram } from "lucide-react";

const socialIcons = [
  { id: "mail", icon: Mail },
  { id: "phone", icon: Phone },
  { id: "instagram", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="text-gray-700 pt-10 sm:pt-16">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-primary-verylight)] flex flex-col lg:flex-row gap-8 p-8 rounded-2xl">
          <div className="flex-1 basis-[35%]">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Elemes Logo"
                width={210}
                height={50}
              />
            </div>
            <p className="text-sm leading-relaxed">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>
            <div className="flex gap-4 mt-6">
              {socialIcons.map(({ id, icon: Icon }) => (
                <div
                  key={id}
                  className="bg-white rounded-full p-3 text-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-primary)] hover:text-white transition ease-in-out duration-300">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 basis-[21.6%]">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Cupcake</li>
              <li>Pizza</li>
              <li>Kebab</li>
              <li>Salmon</li>
              <li>Dougnut</li>
            </ul>
          </div>

          <div className="flex-1 basis-[21.6%]">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>About Us</li>
              <li>FAQ</li>
              <li>Report Problem</li>
            </ul>
          </div>

          <div className="flex-1 basis-[21.6%]">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4">
              Get now free 50% discount for all products on your first order
            </p>
            <div className="flex rounded-md shadow-sm mb-4 max-w-full">
              <input
                type="text"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 text-sm outline-none border border-r-0 rounded-l-md"
              />
              <button className="bg-[var(--color-primary)] text-white px-4 py-2 text-sm font-semibold rounded-r-md whitespace-nowrap">
                SEND
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <Mail size={16} className="text-[var(--color-primary)]" />
              <span>elemesid@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Phone size={16} className="text-[var(--color-primary)]" />
              <span>0888 1111 2222</span>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 my-10">
          © {new Date().getFullYear()} ELEMES ID. ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
