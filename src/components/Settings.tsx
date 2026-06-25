import { Settings2 } from "lucide-react";
import Link from "next/link";

export default function Settings() {
  return (
    <Link href="/settings" className="flex items-center justify-center gap-1 bg-accent/70 p-2 text-gray-600/80 font-bold">
        <Settings2 size={20} color="#008ecc"/>
        Settings
    </Link>
  );
}