import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { FaCheck, FaInbox } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuGitPullRequestDraft } from "react-icons/lu";

type Status = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

const statuses: Status[] = [
  {
    value: "published",
    label: "Published",
    icon: <FaCheck />,
  },
  {
    value: "inactive",
    label: "Inactive",
    icon: <IoClose />,
  },
  {
    value: "draft",
    label: "Draft",
    icon: <FaInbox />,
  },
];

export function StatusDropDown() {
  const [open, setOpen] = useState(false);

  function returnColor(status: string) {
    switch (status) {
      case "Published":
        return "text-green-600 bg-green-100";
      case "Inactive":
        return "text-red-600 bg-red-100";
      case "Draft":
        return "text-gray-600 bg-gray-100";
      default:
        return "";
    }
  }

  return (
    <div className="flex items-center space-x-4 poppins">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant={"secondary"} className="h-10">
            <LuGitPullRequestDraft />
            Status
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 w-48 poppins"
          side="bottom"
          align="center"
        >
          <Command className="p-1">
            <CommandList>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    className="h-10 mb-2"
                    key={status.value}
                    value={status.value}
                  >
                    <Checkbox className="size-4 rounded-[4px]" />
                    <div
                      className={`flex items-center gap-1 ${returnColor(status.label)} p-1 rounded-lg px-4 text-[13px]`}
                    >
                      {status.icon}
                      {status.label}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <div className="flex flex-col gap-2 text-[23px]">
              <Separator />
              <Button variant={"ghost"} className="text-[12px] mb-1">
                Clear Filters
              </Button>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
