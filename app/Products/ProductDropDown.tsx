import type { ReactElement } from "react";
import { Row } from "@tanstack/react-table";
import { FaRegEdit } from "react-icons/fa";
import { MdContentCopy, MdOutlineDelete } from "react-icons/md";
import { Product } from "./columns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

type MenuItem = {
  icon: ReactElement;
  label: string;
  className: string;
  separator?: undefined;
};

export default function ProductDropDown({ row }: { row: Row<Product> }) {
  const menuItems: MenuItem[] = [
    { icon: <MdContentCopy />, label: "Copy", className: "" },
    { icon: <FaRegEdit />, label: "Edit", className: "" },

    {
      icon: <MdOutlineDelete className="text-lg" />,
      label: "Delete",
      className: "text-red-600",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="poppins">
        {menuItems.map((item, index) =>
          item.separator ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownMenuItem
              key={index}
              className={`flex items-center gap-1 p-[10px] ${item.className}`}
            >
              {item.icon}
              <span> {item.label}</span>
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
