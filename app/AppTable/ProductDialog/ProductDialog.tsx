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

export default function ProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="poppins max-h-[min(90vh,calc(100dvh-2rem))] w-full min-w-0 overflow-y-auto p-7 px-8 sm:max-w-xl md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-[22px]">Add Product</DialogTitle>
          <DialogDescription>
            Fill in the form to add a new product.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex flex-col gap-2 mt-1">
          <div className="grid grid-cols-2 gap-7">
            <ProductName />
            <SKU />
          </div>

          <div className="grid grid-cols-2 gap-5 items-center">
            <Supplier />
            <ProductCategory />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-7 items-center max-lg:grid-cols-2 max-lg:gap-1 max-sm:grid-cols-1">
            <Status />
            <Quantity />
            <Price />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button asChild variant={"secondary"} className="h-11 px-11">
              Cancel
            </Button>
          </DialogClose>

          <Button className="h-11 px-11">Add Product</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
