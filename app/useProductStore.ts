import { create } from "zustand";
import { Product } from "./Products/columns";
import { products } from "./Products/productData";

//structure of the overall state
interface ProductState {
  allProducts: Product[];
  isLoading: boolean;
  setAllProducts: (allProducts: Product[]) => void;
  loadProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<{ success: boolean }>;
}

export const useProductStore = create<ProductState>((set) => ({
  allProducts: [],
  isLoading: false,
  setAllProducts: (allProducts) => set({ allProducts: allProducts }),
  loadProducts: async () => {
    const fetchedProducts = await fetchProducts();
    set({ allProducts: fetchedProducts });
  },
  addProduct: async (product: Product) => {
    set({ isLoading: true });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      set((state) => ({
        allProducts: [...state.allProducts, product],
      }));
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    } finally {
      set({ isLoading: false });
    }
  },
}));

function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1200);
  });
}
