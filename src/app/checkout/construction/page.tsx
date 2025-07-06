"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/contexts/cart-context";
import {
  Construction,
  Home,
  ShoppingCart,
  CheckCircle,
  CreditCard,
  QrCode,
  FileText,
  Mail,
  Phone,
  MapPin,
  User,
} from "lucide-react";
import Link from "next/link";

interface OrderData {
  id: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  }>;
  total: number;
  paymentMethod: string;
  customerData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cpf: string;
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  status: string;
  createdAt: string;
}

export default function ConstructionPage() {
  const { clearCart } = useCart();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    // Recuperar o último pedido do localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    if (orders.length > 0) {
      setOrderData(orders[orders.length - 1]);
    }
    // Limpar carrinho ao finalizar compra
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case "pix":
        return <QrCode className="h-5 w-5" />;
      case "credit":
        return <CreditCard className="h-5 w-5" />;
      case "boleto":
        return <FileText className="h-5 w-5" />;
      default:
        return <CreditCard className="h-5 w-5" />;
    }
  };

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case "pix":
        return "PIX";
      case "credit":
        return "Cartão de Crédito";
      case "boleto":
        return "Boleto Bancário";
      default:
        return "Pagamento";
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF3E0] py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header com ícone de construção */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E67E22] rounded-full mb-4">
            <Construction className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            🚧 Site em Construção 🚧
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Este é um projeto demonstrativo para portfolio. O sistema de
            pagamentos não está implementado.
          </p>
        </div>

        {/* Mensagem Principal */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#E67E22] mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4">
              Obrigado por testar o BrickStore! 🎉
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Você acabou de experimentar um fluxo completo de e-commerce, desde
              a seleção de produtos até o checkout.
            </p>

            <div className="bg-[#FAF3E0] rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-[#E67E22] mb-3">
                Em um projeto real, aqui seria integrado:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>MercadoPago</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>PagSeguro</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>PayPal</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Stripe</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Outros gateways</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Webhooks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detalhes do Pedido Simulado */}
        {orderData && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#E67E22] mb-8">
            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
              Pedido Simulado #{orderData.id}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Produtos */}
              <div>
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-4">
                  Produtos Selecionados
                </h3>
                <div className="space-y-3">
                  {orderData.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          Qtd: {item.quantity}
                        </p>
                      </div>
                      <p className="font-bold text-[#E67E22]">
                        R$ {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-lg font-bold text-[#E67E22]">
                    <span>Total:</span>
                    <span>R$ {formatPrice(orderData.total)}</span>
                  </div>
                </div>
              </div>

              {/* Dados do Cliente */}
              <div>
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-4">
                  Dados do Cliente
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-[#E67E22] mr-2" />
                    <span>
                      {orderData.customerData?.firstName}{" "}
                      {orderData.customerData?.lastName}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-[#E67E22] mr-2" />
                    <span>{orderData.customerData?.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-[#E67E22] mr-2" />
                    <span>{orderData.customerData?.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-[#E67E22] mr-2 mt-1" />
                    <div className="text-sm">
                      <p>
                        {orderData.customerData?.street},{" "}
                        {orderData.customerData?.number}
                      </p>
                      <p>
                        {orderData.customerData?.neighborhood},{" "}
                        {orderData.customerData?.city} -{" "}
                        {orderData.customerData?.state}
                      </p>
                      <p>CEP: {orderData.customerData?.cep}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {getPaymentMethodIcon(orderData.paymentMethod)}
                    <span className="ml-2">
                      {getPaymentMethodText(orderData.paymentMethod)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Botões de Ação */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <Link
            href="/"
            className="bg-[#E67E22] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#F39C12] transition cursor-pointer flex items-center gap-2 justify-center text-base"
          >
            <Home className="h-5 w-5" />
            <span>Voltar ao Início</span>
          </Link>
          <Link
            href="/products"
            className="bg-white border-2 border-[#E67E22] text-[#E67E22] px-6 py-3 rounded-lg font-bold hover:bg-[#FAF3E0] transition cursor-pointer flex items-center gap-2 justify-center text-base"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Continuar Comprando</span>
          </Link>
        </div>

        {/* Informações do Desenvolvedor */}
        <div className="flex justify-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#E67E22] max-w-2xl mx-auto w-full text-center">
            <div className="mb-2 font-bold text-lg text-[#2C2C2C]">
              Desenvolvido por Gabriel Carvalho
            </div>
            <div className="mb-4 text-gray-700">
              Este projeto demonstra habilidades em desenvolvimento full-stack
              com Next.js, TypeScript, Prisma, PostgreSQL e design responsivo.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-[#E67E22]">
              <a
                href="mailto:cttbiel@gmail.com"
                className="underline hover:text-[#F39C12]"
              >
                cttbiel@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/cttbiel/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#F39C12]"
              >
                LinkedIn
              </a>
              <a
                href="https://gabrielcarvalho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#F39C12]"
              >
                Portfólio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
