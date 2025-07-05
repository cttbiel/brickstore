import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Globe, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b-4 border-primary-400 pb-10 mb-8">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/apenaslogo.png"
                alt="BrickStore Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain drop-shadow"
              />
              <span className="text-2xl font-extrabold tracking-tight">
                BrickStore
              </span>
            </Link>
            <p className="text-primary-100 text-sm max-w-xs">
              Sua loja de confiança para materiais de construção. Qualidade,
              preço justo e entrega rápida.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com/cttbiel"
                target="_blank"
                rel="noopener"
                className="hover:text-primary-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/cttbiel/"
                target="_blank"
                rel="noopener"
                className="hover:text-primary-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://gabrielcarvalho.vercel.app/"
                target="_blank"
                rel="noopener"
                className="hover:text-primary-300 transition-colors"
                aria-label="Portfólio"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary-200 transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias"
                  className="hover:text-primary-200 transition-colors"
                >
                  Categorias
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-primary-200 transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-primary-200 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-2">Atendimento</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/site-em-construcao"
                  className="hover:text-primary-200 transition-colors"
                >
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link
                  href="/site-em-construcao"
                  className="hover:text-primary-200 transition-colors"
                >
                  Política de Entrega
                </Link>
              </li>
              <li>
                <Link
                  href="/site-em-construcao"
                  className="hover:text-primary-200 transition-colors"
                >
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link
                  href="/site-em-construcao"
                  className="hover:text-primary-200 transition-colors"
                >
                  Garantia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-2">Contato</h3>
            <div className="space-y-3 text-primary-100 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-200" />
                Rua das Construções, Belo Horizonte, MG
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary-200" />
                (31) 9 9999-9999
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary-200" />
                cttbiel@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-100 text-xs mt-8">
          <p>© 2025 BrickStore. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link
              href="/site-em-construcao"
              className="hover:text-primary-300 transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/site-em-construcao"
              className="hover:text-primary-300 transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
