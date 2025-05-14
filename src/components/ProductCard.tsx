
import React from "react";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  selected: boolean;
  onSelect: (id: number) => void;
};

const ProductCard = ({ 
  id, 
  name, 
  image, 
  description, 
  price, 
  selected, 
  onSelect 
}: ProductCardProps) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className={cn(
        "flex flex-col items-center justify-between rounded-xl bg-white p-4 shadow-md transition-all cursor-pointer hover:shadow-lg",
        selected ? "ring-2 ring-[#ea384c]" : "ring-1 ring-gray-200"
      )}
    >
      <div className="relative mb-3 h-40 w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
        {selected && (
          <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#ea384c]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-white"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        )}
      </div>
      <h3 className="text-center text-lg font-medium text-gray-800">{name}</h3>
      <p className="mt-1 text-center text-sm text-gray-600">{description}</p>
      <p className="mt-2 text-center text-base font-semibold text-gray-900">{price}</p>
    </div>
  );
};

export default ProductCard;
