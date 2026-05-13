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

export default function AppTable() {
  return (
    <Card className="mt-5 flex flex-col border-none shadow-none ring-0 poppins">
      <CardHeader className="p-2">
        <div>
          <CardTitle className="font-bold text-[23px]">Products</CardTitle>
          <CardDescription>34 products</CardDescription>
        </div>
        <CardAction>
          <Button>Add Product</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ProductTable />
      </CardContent>
    </Card>
  );
}
