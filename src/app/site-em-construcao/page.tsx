import Image from "next/image";

export default function SiteEmConstrucao() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      <Image
        src="/site em construcao.png"
        alt="Site em construção"
        width={400}
        height={300}
        className="mb-8 object-contain"
        unoptimized
      />
      <h1 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4 text-center">
        Olá, tudo bem?
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-xl mb-2">
        Nos desculpe, estamos construindo o site.
        <br />
        Em breve você poderá visualizar esta página!
      </p>
    </main>
  );
}
