import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Cart() {
  return (
    <div>
        <Link href="/cart" className="flex items-center justify-center gap-1 bg-accent/70 p-2 text-gray-600/80 font-bold">
            <ShoppingCart color="#008ecc" size={18}/>
            Cart
        </Link>
    </div>
  );
}