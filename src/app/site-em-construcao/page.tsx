import Image from "next/image";
import Link from "next/link";

export default function SiteEmConstrucao() {
  return (
    <main className="flex flex-col items-center w-full bg-[#FAF3E0] min-h-screen py-8 md:pt-20 md:pb-4">
      <div className="bg-white border-2 border-[#E67E22] rounded-2xl shadow-xl flex flex-col items-center p-10 max-w-lg w-full mx-auto">
        <Image
          src="/site em construcao.png"
          alt="Site em construção"
          width={320}
          height={220}
          className="mb-6 object-contain drop-shadow-lg"
          unoptimized
        />
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2C] mb-4 text-center font-serif">
          Página em Construção
        </h1>
        <p className="text-lg text-[#E67E22] text-center max-w-xl mb-6 font-semibold">
          Nos desculpe, estamos construindo o site.
          <br />
          Em breve você poderá visualizar esta página!
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 bg-[#E67E22] text-white font-bold rounded-lg shadow-lg border-2 border-[#A04000] hover:bg-[#F39C12] hover:text-white transition-all text-lg"
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
