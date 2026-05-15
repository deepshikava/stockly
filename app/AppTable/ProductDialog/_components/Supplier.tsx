import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MdError } from "react-icons/md";
import { useFormContext } from "react-hook-form";

export default function Supplier() {
  return (
    <div className=" flex flex-col gap-2">
      <Label htmlFor="supplier-name" className="text-slate-600">
        {`Supplier's name`}
      </Label>
      <Input
        type="text"
        id="supplier-name"
        className="h-11 shadow-none"
        placeholder="TechWorld..."
      />

      <div className="text-red-500 flex gap-1 items-center text-[13px]">
        <MdError />
        <p>
          <>{`Supplier's name is required`}</>
        </p>
      </div>
    </div>
  );
}
