
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
        "group relative flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all cursor-pointer hover:shadow-xl",
        selected ? "ring-2 ring-[#ea384c]" : "ring-1 ring-gray-200"
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {selected && (
          <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#ea384c] shadow-md">
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
        
        {/* Price tag */}
        <div className="absolute bottom-0 right-0 bg-[#1EAEDB] px-3 py-1 text-white font-semibold rounded-tl-lg shadow-md">
          {price}
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-xl font-medium text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
