import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import ProductName from "./_components/ProductName";
import SKU from "./_components/SKU";
import Supplier from "./_components/Supplier";
import { ProductCategory } from "./_components/ProductCategory";
import Status from "./_components/Status";
import Quantity from "./_components/Quantity";
import Price from "./_components/Price";
import { ReactNode, useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/app/Products/columns";
import { nanoid } from "nanoid";
import { useProductStore } from "@/app/useProductStore";
import { toast } from "sonner";
import { icons } from "./Icons";

const ProductSchema = z.object({
  productName: z
    .string()
    .min(1, "Product Name is required")
    .max(100, "Product Name must be 100 characters or less"),
  sku: z
    .string()
    .min(1, "SKU is required")
    .regex(/^[a-zA-Z0-9-_]+$/, "SKU must be alphanumeric"),
  supplier: z
    .string()
    .min(1, "Supplier is required")
    .max(100, "Supplier name must be 100 characters or less"),

  quantity: z
    .number()
    .refine((val) => (typeof val === "number" ? val !== 0 : val !== ""), {
      message: "Quantity is required",
    })
    .int("Quantity must be an integer")
    .nonnegative("Quantity cannot be negative"),
  price: z
    .union([z.string(), z.number()])
    .refine((val) => (typeof val === "number" ? val !== 0 : val !== ""), {
      message: "Price is required",
    })
    .transform((val) => {
      // If it's an empty string, this will fail validation
      if (val === "") return undefined;
      // Convert to number and fix to 2 decimal places
      const num = Number(val);
      return Number(num.toFixed(2));
    })
    .pipe(
      z
        .number({ message: "Price must be a number" })
        .nonnegative("Price cannot be negative"),
    ),
});

type ProductFormValues = z.input<typeof ProductSchema>;
type ProductFormData = z.output<typeof ProductSchema>;

const defaultFormValues: ProductFormValues = {
  productName: "",
  sku: "",
  supplier: "",
  quantity: 0,
  price: 0,
};

const defaultStatus: Product["status"] = "Published";
const defaultCategory: Product["category"] = "Electronics";

export default function ProductDialog() {
  const [open, setOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const methods = useForm<ProductFormValues, unknown, ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues: defaultFormValues,
  });

  const { reset } = methods;

  const [selectedTab, setSelectedTab] =
    useState<Product["status"]>(defaultStatus);

  const [selectedCategory, setSelectedCategory] =
    useState<Product["category"]>(defaultCategory);

  const [selectedIcon, setSelectedIcon] = useState<null | ReactNode>(
    icons.find((icon) => icon.isSelected === true)?.icon || null,
  );

  const {
    addProduct,
    isLoading,
    openProductDialog,
    setOpenProductDialog,
    setSelectedProduct,
    selectedProduct,
    updateProduct,
  } = useProductStore();
  const dialogCloseRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      //update form with the selected product details ehrn dialog opens
      reset({
        productName: selectedProduct.name,
        sku: selectedProduct.sku,
        supplier: selectedProduct.supplier,
        quantity: selectedProduct.quantityInStock,
        price: selectedProduct.price,
      });
      setSelectedTab(selectedProduct.status);
      setSelectedCategory(selectedProduct.category);
      setSelectedIcon(selectedProduct.icon);
    } else {
      //Reset form values if no product is selected
      reset(defaultFormValues);
      setSelectedTab(defaultStatus);
      setSelectedCategory(defaultCategory);
      setSelectedIcon(null);
    }
  }, [selectedProduct, openProductDialog]);

  const onSubmit = async (data: ProductFormData) => {
    if (!selectedProduct) {
      //add new product

      const newProduct: Product = {
        id: nanoid(),
        supplier: data.supplier,
        name: data.productName,
        price: data.price,
        quantityInStock: data.quantity,
        sku: data.sku,
        status: selectedTab,
        category: selectedCategory,
        icon: selectedIcon,
        createdAt: new Date(),
      };

      const result = await addProduct(newProduct);

      console.log(result);

      if (result.success) {
        toast.success("Success", {
          description: "Product added successfully",
        });

        console.log(result);

        if (dialogCloseRef.current) {
          dialogCloseRef.current.click();
        }
      }
    } else {
      //update existing product

      const productToUpdate: Product = {
        id: selectedProduct.id,
        supplier: data.supplier,
        name: data.productName,
        price: data.price,
        quantityInStock: data.quantity,
        sku: data.sku,
        status: selectedTab,
        category: selectedCategory,
        icon: selectedIcon,
        createdAt: selectedProduct.createdAt,
      };

      const result = await updateProduct(productToUpdate);

      if (result.success) {
        toast.success("Success", {
          description: "Product updated successfully",
        });
      } else {
        toast.error("Error", {
          description: "Something went wrong while updating the product",
        });
      }
    }
  };

  function handleReset() {
    reset(defaultFormValues);
    setSelectedTab(defaultStatus);
    setSelectedCategory(defaultCategory);
    setSelectedIcon(null);
    setSelectedProduct(null);
    setOpenProductDialog(false);
    setFormKey((key) => key + 1);
  }

  function onSelectedIcon(icon: ReactNode) {
    console.log(icon);

    // Ensuring that the state update happens outside of render flow
    setTimeout(() => {
      setSelectedIcon(icon);
    }, 0);
  }
  return (
    <Dialog open={openProductDialog} onOpenChange={setOpenProductDialog}>
      <DialogTrigger asChild>
        <Button className="h-10">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="poppins max-h-[min(90vh,calc(100dvh-2rem))] w-full min-w-0 overflow-y-auto p-7 px-8 sm:max-w-xl md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-[22px]">
            {selectedProduct ? "Edit Product" : "Add Product"}
          </DialogTitle>
          <DialogDescription>
            Fill in the form to add a new product.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        {/*  */}
        <FormProvider {...methods}>
          <form key={formKey} onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 mt-1">
              <div className="grid grid-cols-2 gap-7">
                <ProductName onSelectedIcon={onSelectedIcon} />
                <SKU />
              </div>

              <div className="grid grid-cols-2 gap-5 items-center">
                <Supplier />
                <ProductCategory
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-7 items-center max-lg:grid-cols-2 max-lg:gap-1 max-sm:grid-cols-1">
                <Status
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                />
                <Quantity />
                <Price />
              </div>
            </div>
            <DialogFooter className="mt-5  flex items-center gap-4 bg-white">
              <DialogClose ref={dialogCloseRef} onClick={handleReset} asChild>
                <Button
                  type="button"
                  variant="secondary"
                  className="h-11 px-11"
                >
                  Cancel
                </Button>
              </DialogClose>

              <Button className="h-11 px-11">Add Product</Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
