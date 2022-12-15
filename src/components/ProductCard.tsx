import * as React from "react";
import { Link } from "gatsby";
import { productCardProps } from "../types/productTypes";

export default function ProductCard({ product }: productCardProps) {
  console.log(product);
  return (
    <Link to={product.id}>
      <div className="flex-col items-center pb-4 text-center transition-all bg-gray-800 rounded w-80 hover:scale-[1.05]">
        <img className="rounded-t" src={product.image.file.url} alt="" />
        <h2 className="mt-4 text-slate-200 ">{product.title}</h2>
        <p className="text-slate-200 ">€{product.price}</p>
      </div>
    </Link>
  );
}
