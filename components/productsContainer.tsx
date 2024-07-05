import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

function Products({ data }: any) {
  const sortedPdts: any[] = data.slice(14, 22);
  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-medium">Top Products</h2>
          <p className="text-base">Choose your desired products</p>
        </div>

        <Link
          href="/products"
          className="flex items-center gap-2 text-gray-400 hover:text-gray-900 duration-300 transition-all"
        >
          <span className="">All Products</span>

          <ChevronRight />
        </Link>
      </div>
      {/* Products */}
      <div className="py-8 gap-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {/* Product card */}
        {sortedPdts.map((sortedPdt, i) => {
          return <ProductCard product={sortedPdt} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Products;
