"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useCart } from "@/contexts/cart-context";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { state } = useCart();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/products" },
    { name: "Categorias", href: "/categorias" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/apenaslogo.png"
              alt="BrickStore Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain drop-shadow-md"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 mx-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 font-medium text-lg px-2 py-1 rounded transition-colors hover:text-primary-500 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <Link href="/site-em-construcao" className="relative group">
              <Heart className="h-6 w-6 text-gray-700 group-hover:text-primary-500 transition-colors" />
            </Link>
            <Link href="/checkout" className="relative group">
              <ShoppingCart
                className={`h-6 w-6 text-gray-700 group-hover:text-[#E67E22] transition-all duration-300 group-hover:scale-110 ${
                  state.isAnimating ? "cart-animate" : ""
                }`}
              />
              {state.itemCount > 0 && (
                <span
                  className={`absolute -top-2 -right-2 bg-[#E67E22] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg border-2 border-[#F39C12] transition-all duration-300 ${
                    state.isAnimating
                      ? "cart-badge-animate scale-125"
                      : "cart-badge-animate"
                  }`}
                >
                  {state.itemCount}
                </span>
              )}
            </Link>
            {session ? (
              <Link href="/site-em-construcao">
                <User className="h-6 w-6 text-gray-700 hover:text-primary-500 transition-colors" />
              </Link>
            ) : (
              <Link href="/login">
                <User className="h-6 w-6 text-gray-700 hover:text-primary-500 transition-colors" />
              </Link>
            )}
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-primary-500 transition-colors focus:outline-none"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 py-4 animate-fade-in-down">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 font-medium text-lg px-3 py-2 rounded transition-colors hover:text-primary-500 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
