import { create } from "zustand";
import { Product } from "./Products/columns";
import { products } from "./Products/productData";

//structure of the overall state
interface ProductState {
  allProducts: Product[];
  openDialog: boolean;
  openProductDialog: boolean;
  setOpenProductDialog: (openProductDialog: boolean) => void;
  setOpenDialog: (openDialog: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (selectedProduct: Product | null) => void;
  isLoading: boolean;
  setAllProducts: (allProducts: Product[]) => void;
  loadProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<{ success: boolean }>;
  deleteProduct: (productId: string) => Promise<{ success: boolean }>;
  updateProduct: (updatedProduct: Product) => Promise<{ success: boolean }>;
}

export const useProductStore = create<ProductState>((set) => ({
  allProducts: [],
  isLoading: false,
  openDialog: false,
  selectedProduct: null,
  openProductDialog: false,
  setOpenProductDialog: (openProductDialog) =>
    set({ openProductDialog: openProductDialog }),
  setAllProducts: (allProducts) => set({ allProducts: allProducts }),
  setOpenDialog: (openDialog) => set({ openDialog: openDialog }),
  setSelectedProduct: (product: Product | null) =>
    set({ selectedProduct: product }),
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
  updateProduct: async (updatedProduct: Product) => {
    set({ isLoading: true });
    try {
      //Stimulate the update process with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      //Update the product in the state
      set((state) => ({
        allProducts: state.allProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product,
        ),
      }));
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    } finally {
      set({ isLoading: false });
      set({ openProductDialog: false });
      set({ selectedProduct: null });
    }
  },
  deleteProduct: async (productId: string) => {
    set({ isLoading: true });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      set((state) => ({
        allProducts: state.allProducts.filter(
          (product) => product.id !== productId,
        ),
      }));
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    } finally {
      set({ isLoading: false });
      set({ openDialog: false });
      set({ selectedProduct: null });
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
