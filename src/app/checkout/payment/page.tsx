"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/cart-context";
import {
  ArrowLeft,
  CreditCard,
  QrCode,
  FileText,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

type PaymentMethod = "pix" | "credit" | "boleto";

interface CheckoutData {
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
}

export default function PaymentPage() {
  const router = useRouter();
  const { state } = useCart();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null
  );
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Recuperar dados do checkout do localStorage
    const savedData = localStorage.getItem("checkout-data");
    if (savedData) {
      setCheckoutData(JSON.parse(savedData));
    }
  }, []);

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.9;
  const total = subtotal + shipping;

  const handlePayment = async () => {
    if (!selectedMethod) return;

    setIsProcessing(true);

    // Simular processamento
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Salvar pedido fake no localStorage
    const order = {
      id: `ORDER-${Date.now()}`,
      items: state.items,
      total,
      paymentMethod: selectedMethod,
      customerData: checkoutData,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // Redirecionar para página "Site em Construção"
    router.push("/checkout/construction");
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF3E0] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold text-[#2C2C2C] mb-4">
            Carrinho Vazio
          </h1>
          <p className="text-gray-600 mb-6">
            Adicione produtos ao carrinho para continuar com a compra.
          </p>
          <Link
            href="/products"
            className="bg-[#E67E22] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#F39C12] transition"
          >
            Ver Produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF3E0] py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/checkout"
            className="inline-flex items-center text-[#E67E22] hover:text-[#F39C12] font-semibold mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Checkout
          </Link>
          <h1 className="text-3xl font-bold text-[#2C2C2C]">
            Método de Pagamento
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Métodos de Pagamento */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#E67E22]">
              <h2 className="text-xl font-bold text-[#2C2C2C] mb-6">
                Escolha como pagar
              </h2>

              <div className="space-y-4">
                {/* PIX */}
                <div
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedMethod === "pix"
                      ? "border-[#E67E22] bg-[#FAF3E0]"
                      : "border-gray-300 hover:border-[#F39C12]"
                  }`}
                  onClick={() => setSelectedMethod("pix")}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        selectedMethod === "pix"
                          ? "bg-[#E67E22]"
                          : "bg-gray-100"
                      }`}
                    >
                      <QrCode
                        className={`h-6 w-6 ${
                          selectedMethod === "pix"
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">PIX</h3>
                      <p className="text-gray-600">
                        Pagamento instantâneo via PIX
                      </p>
                    </div>
                    {selectedMethod === "pix" && (
                      <CheckCircle className="h-6 w-6 text-[#E67E22]" />
                    )}
                  </div>
                </div>

                {/* Cartão de Crédito */}
                <div
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedMethod === "credit"
                      ? "border-[#E67E22] bg-[#FAF3E0]"
                      : "border-gray-300 hover:border-[#F39C12]"
                  }`}
                  onClick={() => setSelectedMethod("credit")}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        selectedMethod === "credit"
                          ? "bg-[#E67E22]"
                          : "bg-gray-100"
                      }`}
                    >
                      <CreditCard
                        className={`h-6 w-6 ${
                          selectedMethod === "credit"
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">Cartão de Crédito</h3>
                      <p className="text-gray-600">
                        Visa, Mastercard, Elo e outros
                      </p>
                    </div>
                    {selectedMethod === "credit" && (
                      <CheckCircle className="h-6 w-6 text-[#E67E22]" />
                    )}
                  </div>
                </div>

                {/* Boleto */}
                <div
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedMethod === "boleto"
                      ? "border-[#E67E22] bg-[#FAF3E0]"
                      : "border-gray-300 hover:border-[#F39C12]"
                  }`}
                  onClick={() => setSelectedMethod("boleto")}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        selectedMethod === "boleto"
                          ? "bg-[#E67E22]"
                          : "bg-gray-100"
                      }`}
                    >
                      <FileText
                        className={`h-6 w-6 ${
                          selectedMethod === "boleto"
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">Boleto Bancário</h3>
                      <p className="text-gray-600">
                        Vencimento em 3 dias úteis
                      </p>
                    </div>
                    {selectedMethod === "boleto" && (
                      <CheckCircle className="h-6 w-6 text-[#E67E22]" />
                    )}
                  </div>
                </div>
              </div>

              {/* Botão Finalizar */}
              <button
                onClick={handlePayment}
                className={`w-full bg-[#E67E22] text-white py-3 px-6 rounded-xl font-bold shadow hover:bg-[#F39C12] hover:scale-105 transition-all text-lg mt-4 border-2 border-[#A04000] ${
                  !selectedMethod || isProcessing
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                disabled={!selectedMethod || isProcessing}
              >
                {isProcessing ? "Processando..." : "Finalizar Pedido"}
              </button>
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#E67E22] sticky top-8">
              <h2 className="text-xl font-bold text-[#2C2C2C] mb-4">
                Resumo do Pedido
              </h2>

              {/* Produtos */}
              <div className="space-y-3 mb-6">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-gray-600 text-sm">
                        Qtd: {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold text-[#E67E22]">
                      R$ {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totais */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">
                    R$ {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete:</span>
                  <span className="font-semibold">
                    R$ {formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold text-[#E67E22] border-t pt-2">
                  <span>Total:</span>
                  <span>R$ {formatPrice(total)}</span>
                </div>
              </div>

              {/* Dados do Cliente */}
              {checkoutData && (
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-semibold text-[#2C2C2C] mb-2">
                    Dados de Entrega
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      {checkoutData.firstName} {checkoutData.lastName}
                    </p>
                    <p>
                      {checkoutData.street}, {checkoutData.number}
                    </p>
                    <p>
                      {checkoutData.neighborhood}, {checkoutData.city} -{" "}
                      {checkoutData.state}
                    </p>
                    <p>CEP: {checkoutData.cep}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
