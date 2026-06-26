import SheetMenu from "./SheetMenu";
import Link from "next/link";
import SignOutin from "./SignOut-In";
import Cart from "./Cart";
import Settings from "./Settings";
import PSearch from "./Search";

export default function Header() {
  return (
    <>
      {/*Desktop*/}

      <div className="hidden lg:flex items-center justify-center gap-10 border-b-1 border-gray-300/30 p-3">
        <Link href="/home" className="text-[#008ecc] text-2xl font-[family-name:var(--font-carter)] ">GS MegaMart</Link>
        <PSearch />
        <SignOutin />
        <Cart />
        <Settings />
      </div>
      
      
      
      {/*Mobile */}

      <div className="border-b-1 border-gray-300/30 p-3 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/home" className="text-[#008ecc] text-2xl font-[family-name:var(--font-carter)] ">GS MegaMart</Link>
            <SheetMenu />
          </div>
      </div>
    </>
  );
}