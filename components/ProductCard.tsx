import React from "react";

import Link from "next/link";
function ProductCard({ product }:any) {
  // console.log(product);
  return (
    <Link
      href={`http://localhost:3000/product/${product.id}`}
      className="border bg-white border-gray-100 shadow-2xl flex items-center flex-col justify-center gap-1 py-9 px-4 rounded-md"
    >
      <img
        className="w-[100px] h-[100px] object-cover rounded-full"
        src={product.images[0]}
        alt=""
      />
      <h2 className="font-bold">{product.category.name}</h2>
      <h2 className="text-[.8rem]"> {product.title}</h2>
      <p className="">${product.price}</p>
      <div className=" relative mb-0">
        <button className="bg-slate-400 hover:bg-slate-800  text-white py-1 px-3 rounded-md">
          Add to cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
