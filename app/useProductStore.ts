import { create } from "zustand";
import { Product } from "./Products/columns";
import { products } from "./Products/productData";

//structure of the overall state
interface ProductState {
  allProducts: Product[];
  setAllProducts: (allProducts: Product[]) => void;
  loadProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  allProducts: [],
  setAllProducts: (allProducts) => set({ allProducts: allProducts }),
  loadProducts: async () => {
    const fetchedProducts = await fetchProducts();
    set({ allProducts: fetchedProducts });
  },
}));

function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1200);
  });
}
