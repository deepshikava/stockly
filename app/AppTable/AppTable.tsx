import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductTable from "../Products/ProductTable";
import { products } from "../Products/productData";
import { columns } from "../Products/columns";
import ProductDialog from "./ProductDialog/ProductDialog";

export default function AppTable() {
  return (
    <Card className="mt-12 flex flex-col border-none shadow-none ring-0 poppins">
      <CardHeader className=" flex justify-between">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="font-bold text-[23px]">Products</CardTitle>
            <p className=" text-sm text-slate-600">34 products</p>
          </div>
        </div>
        <ProductDialog />
      </CardHeader>
      <CardContent>
        <ProductTable columns={columns} data={products} />
      </CardContent>
    </Card>
  );
}
