import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MdError } from "react-icons/md";
import { useFormContext } from "react-hook-form";

export default function Quantity() {
  return (
    <div className=" flex flex-col gap-2 pt-[6px]">
      <Label htmlFor="quantity" className="text-slate-600">
        {`Quantity`}
      </Label>
      <Input
        type="text"
        id="quantity"
        className="h-11 shadow-none"
        placeholder="34"
      />

      <div className="text-red-500 flex gap-1 items-center text-[13px]">
        <MdError />
        <p>
          <>The quantity is required</>
        </p>
      </div>
    </div>
  );
}
