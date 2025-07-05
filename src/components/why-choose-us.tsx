import { Truck, Shield, Clock, Star, Users, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description:
      "Entregamos em até 24h na região metropolitana e em até 48h para outras localidades.",
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description:
      "Pagamento seguro com Mercado Pago e garantia de satisfação em todos os produtos.",
  },
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description:
      "Nossa equipe está disponível 24 horas por dia para atender suas necessidades.",
  },
  {
    icon: Star,
    title: "Qualidade Garantida",
    description:
      "Todos os nossos produtos passam por rigoroso controle de qualidade antes da venda.",
  },
  {
    icon: Users,
    title: "Suporte Especializado",
    description:
      "Equipe técnica especializada para orientar na escolha dos melhores materiais.",
  },
  {
    icon: Award,
    title: "Melhor Preço",
    description:
      "Garantimos os melhores preços do mercado com qualidade superior.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Por que Escolher a BrickStore?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos especialistas em materiais de construção e oferecemos a melhor
            experiência de compra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-200"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors">
                <feature.icon className="h-8 w-8 text-primary-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Produtos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10k+</div>
              <div className="text-primary-100">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-primary-100">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9</div>
              <div className="text-primary-100">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
