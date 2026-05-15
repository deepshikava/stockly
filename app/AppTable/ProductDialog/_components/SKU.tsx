import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MdError } from "react-icons/md";
import { useFormContext } from "react-hook-form";
export default function SKU() {
  return (
    <div className="mt-5 flex flex-col gap-2">
      <Label htmlFor="sku" className="text-slate-600">
        SKU
      </Label>
      <Input
        type="text"
        id="sku"
        className="h-11 shadow-none"
        placeholder="ABC001"
      />

      <div className="text-red-500 flex gap-1 items-center text-[13px]">
        <MdError />
        <p>
          <>{`SKU reference is required`}</>
        </p>
      </div>
    </div>
  );
}
