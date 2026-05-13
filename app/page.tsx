"use client";

import { Card } from "@/components/ui/card";
import AppHeader from "./AppHeader/AppHeader";

export default function Home() {
  return (
    <div className="p-3">
      <Card className="flex flex-col shadow-none p-2">
        <AppHeader />
      </Card>
    </div>
  );
}
