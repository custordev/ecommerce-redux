"use server";
export async function getProducts() {
  const API = "https://api.escuelajs.co/api/v1/products";
  try {
    const response = await fetch(API);
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.log(error);
  }
}
export async function getCategories() {
  const API = "https://api.escuelajs.co/api/v1/categories";
  try {
    const response = await fetch(API);
    const categories = await response.json();
    console.log(categories);
  } catch (error) {
    console.log(error);
  }
}
