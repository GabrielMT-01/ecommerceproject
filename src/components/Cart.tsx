import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Cart() {
  return (
    <div>
        <Link href="/cart" className="flex items-center justify-center lg:rounded-sm lg:hover:bg-gray-200/30 gap-1 transition-all duration-400  p-2 text-gray-600/80 font-bold">
            <ShoppingCart color="#008ecc" size={18}/>
            Cart
        </Link>
    </div>
  );
}