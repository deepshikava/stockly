import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductTable from "../Products/ProductTable";
import { columns } from "../Products/columns";
import ProductDialog from "./ProductDialog/ProductDialog";
import { useProductStore } from "../useProductStore";
import { useEffect } from "react";

export default function AppTable() {
  const { allProducts, loadProducts } = useProductStore();

  useEffect(() => {
    loadProducts();
  }, []);

  if (!allProducts.length) return <div>Loading...</div>;

  return (
    <Card className="mt-12 flex flex-col border-none shadow-none ring-0 poppins">
      <CardHeader className=" flex justify-between">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="font-bold text-[23px]">Products</CardTitle>
            <p className=" text-sm text-slate-600">
              {allProducts.length} products
            </p>
          </div>
        </div>
        <ProductDialog />
      </CardHeader>
      <CardContent>
        <ProductTable columns={columns} data={allProducts} />
      </CardContent>
    </Card>
  );
}
