import React from "react";
import { getProducts } from "../actions/products";

async function page() {
  const products = await getProducts();
  console.log(products);
  return <div>page</div>;
}

export default page;
