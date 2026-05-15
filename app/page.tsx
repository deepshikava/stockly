"use client";

import { Card } from "@/components/ui/card";
import AppHeader from "./AppHeader/AppHeader";
import AppTable from "./AppTable/AppTable";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DeleteDialog from "./DeleteDialog";

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-50";

  useEffect(() => {
    setTimeout(() => {
      setIsClient(true);
    }, 100);
  }, []);

  if (!isClient) return null;

  return (
    <div className={`poppins p-8 ${bgColor} border w-full min-h-screen`}>
      <Card className="flex flex-col shadow-none p-8">
        <DeleteDialog />
        <AppHeader />
        <AppTable />
      </Card>
    </div>
  );
}
