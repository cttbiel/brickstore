"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/cart-context";
import { ArrowLeft, MapPin, User, Trash2 } from "lucide-react";
import Link from "next/link";

interface CheckoutForm {
  // Dados pessoais
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cpf: string;

  // Endereço de entrega
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { state, clearCart } = useCart();
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cpf: "",
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });
  const [cepLoading, setCepLoading] = useState(false);
  const [cepError, setCepError] = useState("");
  const cepTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para buscar endereço pelo CEP
  const fetchAddressByCep = async (cep: string) => {
    setCepLoading(true);
    setCepError("");
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setFormData((prev) => ({
          ...prev,
          street: data.logradouro || "",
          neighborhood: data.bairro || "",
          city: data.localidade || "",
          state: data.uf || "",
        }));
        setCepError("");
      } else {
        setCepError("CEP não encontrado.");
      }
    } catch {
      setCepError("Erro ao buscar CEP.");
    } finally {
      setCepLoading(false);
    }
  };

  // Detecta CEP válido e busca endereço (com debounce)
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cep = value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, cep: value }));
    setCepError("");
    if (cepTimeout.current) clearTimeout(cepTimeout.current);
    if (cep.length === 8) {
      cepTimeout.current = setTimeout(() => {
        fetchAddressByCep(cep);
      }, 400);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Salvar dados no localStorage para usar na próxima página
    localStorage.setItem("checkout-data", JSON.stringify(formData));

    // Redirecionar para seleção de método de pagamento
    router.push("/checkout/payment");
  };

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.9; // Frete fixo
  const total = subtotal + shipping;

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
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-[#E67E22] hover:text-[#F39C12] font-semibold mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos Produtos
          </Link>
          <h1 className="text-3xl font-bold text-[#2C2C2C]">
            Finalizar Compra
          </h1>
        </div>

        {/* Botão Limpar Carrinho */}
        {state.items.length > 0 && (
          <div className="flex justify-end mb-4">
            <button
              onClick={clearCart}
              className="flex items-center gap-2 text-[#E67E22] hover:text-[#F39C12] border border-[#E67E22] hover:border-[#F39C12] rounded-lg px-4 py-2 text-sm font-bold transition cursor-pointer"
              title="Limpar Carrinho"
            >
              <Trash2 className="h-5 w-5" />
              Limpar Carrinho
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Dados Pessoais */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#E67E22]">
                <div className="flex items-center mb-4">
                  <User className="h-5 w-5 text-[#E67E22] mr-2" />
                  <h2 className="text-xl font-bold text-[#2C2C2C]">
                    Dados Pessoais
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sobrenome *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                      placeholder="Seu sobrenome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CPF *
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                      placeholder="000.000.000-00"
                    />
                  </div>
                </div>
              </div>

              {/* Endereço de Entrega */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#E67E22]">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-[#E67E22] mr-2" />
                  <h2 className="text-xl font-bold text-[#2C2C2C]">
                    Endereço de Entrega
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CEP *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleCepChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none pr-20"
                        placeholder="00000-000"
                      />
                      {cepLoading && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#E67E22] animate-pulse">
                          Buscando...
                        </span>
                      )}
                    </div>
                    {cepError && (
                      <div className="text-red-600 text-xs mt-1">
                        {cepError}
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Rua *
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                      placeholder="Nome da rua"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Número *
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                      placeholder="123"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Complemento
                    </label>
                    <input
                      type="text"
                      name="complement"
                      value={formData.complement}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                      placeholder="Apartamento, bloco, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Bairro *
                    </label>
                    <input
                      type="text"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                      placeholder="Nome do bairro"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                      placeholder="Nome da cidade"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Estado *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          state: e.target.value,
                        }))
                      }
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E67E22] focus:outline-none"
                    >
                      <option value="">Selecione...</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Botão Continuar */}
              <button
                type="submit"
                className="w-full bg-[#E67E22] text-white py-3 px-6 rounded-xl font-bold shadow hover:bg-[#F39C12] hover:scale-105 transition-all text-lg mt-2 border-2 border-[#A04000] cursor-pointer"
              >
                Próximo: Pagamento
              </button>
            </form>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
