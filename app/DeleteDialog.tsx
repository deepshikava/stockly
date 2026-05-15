import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useProductStore } from "./useProductStore";
import { toast } from "sonner";

export default function DeleteDialog() {
  const {
    openDialog,
    setOpenDialog,
    setSelectedProduct,
    selectedProduct,
    isLoading,
    deleteProduct,
  } = useProductStore();

  async function deleteProductFx() {
    if (selectedProduct) {
      const result = await deleteProduct(selectedProduct.id);
      if (result.success) {
        toast.success(
          `the product - ${selectedProduct.name} has been deleted successfully`,
        );
        setOpenDialog(false);
        setSelectedProduct(null);
      } else {
        toast.error(`Failed to delete product - ${selectedProduct.name}`);
      }
    }
  }

  return (
    <AlertDialog open={openDialog} onOpenChange={(open) => setOpenDialog(open)}>
      <AlertDialogContent className="p-8">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-8">
            This action cannot be undone. This will permanently delete your
            product.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-8 bg-white">
          <AlertDialogCancel
            onClick={() => {
              setOpenDialog(false);
              setSelectedProduct(null);
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={deleteProductFx}>
            {isLoading ? "deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
