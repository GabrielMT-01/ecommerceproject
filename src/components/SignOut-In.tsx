import { User } from "lucide-react";
import Link from "next/link";

export default function SignOutin() {
  return (
    <div>
        <Link href="/" className="flex items-center justify-center lg:rounded-sm lg:hover:bg-gray-200/30 gap-1 transition-all duration-400  p-2 text-gray-600/80 font-bold">
            <User size={18} color="#008ecc"/>
            Sign Up / Sign In
        </Link>
    </div>
  );
}