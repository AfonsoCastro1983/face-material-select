
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useNavigate } from "react-router-dom";

// Sample product data
const products = [
  {
    id: 1,
    name: "Batom Vermelho",
    image: "https://images.unsplash.com/photo-1590156424170-40b16013894e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Base Facial",
    image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Paleta de Sombras",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Máscara para Cílios",
    image: "https://images.unsplash.com/photo-1631730359585-53727148cb3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Creme Facial",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Perfume",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const Materials = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleSelectProduct = (id: number) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((productId) => productId !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const handleTryAgain = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Escolha seus Produtos
        </h1>
        
        <p className="mb-8 text-center text-lg text-gray-600">
          Clique nos produtos que deseja selecionar
        </p>

        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              selected={selectedProducts.includes(product.id)}
              onSelect={handleSelectProduct}
            />
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleTryAgain}
            className="rounded-lg border border-[#D3E4FD] bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
          >
            Tentar Novamente
          </button>
          <button
            className="rounded-lg bg-[#D3E4FD] px-6 py-3 font-medium text-gray-800 shadow-sm transition-colors hover:bg-[#1EAEDB] hover:text-white"
            disabled={selectedProducts.length === 0}
          >
            Confirmar Seleção
            {selectedProducts.length > 0 && ` (${selectedProducts.length})`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Materials;
