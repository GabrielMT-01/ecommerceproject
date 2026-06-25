import { User } from "lucide-react";
import Link from "next/link";

export default function SignOutin() {
  return (
    <div>
        <Link href="/" className="flex items-center justify-center gap-1 bg-accent/70 p-2 text-gray-600/80 font-bold ">
            <User size={18} color="#008ecc"/>
            Sign Up / Sign In
        </Link>
    </div>
  );
}