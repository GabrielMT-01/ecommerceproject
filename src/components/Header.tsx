import Filter from "@/components/Filter";
import SheetMenu from "./SheetMenu";
import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b-1 border-gray-300/30 p-3">
        <div className="flex items-center justify-between">
          <Link href="/home" className="text-[#008ecc] font-[family-name:var(--font-carter)] ">GS MegaMart</Link>
          <SheetMenu />
        </div>
    </div>
  );
}