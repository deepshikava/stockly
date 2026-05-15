"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MdError } from "react-icons/md";
import { NumericFormat } from "react-number-format";
import { useFormContext, Controller } from "react-hook-form";

export default function Price() {
  return (
    <div className="flex flex-col gap-2 pt-[6px]">
      <Label htmlFor="price" className="text-slate-600">
        Price
      </Label>
      <NumericFormat
        value={0}
        customInput={Input}
        thousandSeparator
        placeholder="Price..."
        className="h-11"
        decimalScale={2}
        allowNegative={false}
      />

      <div className="text-red-500 flex gap-1 items-center text-[13px]">
        <MdError />
        <p>{`Price is required`}</p>
      </div>
    </div>
  );
}
