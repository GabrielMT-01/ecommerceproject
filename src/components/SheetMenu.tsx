import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from "lucide-react"
import SignOutin from "./SignOut-In"
import Cart from "./Cart"
import PSearch from "./Search"
import Settings from "./Settings"


export default function SheetMenu() {

  return (
    <>
      {/* Mobile */}
      
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex items-center gap-1">
                Menu
                <Button variant="outline"><Menu /></Button>
            </div>
          </SheetTrigger>
      
          <SheetContent>
            <div className="flex items-center justify-between px-3 py-5">
              <span className="text-[#008ecc] text-xl font-[family-name:var(--font-carter)] ">GS MegaMart</span>
              <span className="sr-only">GS MegaMart Logo</span>

              <SheetClose asChild>
                <Button variant="outline" className="w-fit">x</Button>
              </SheetClose>
            </div>
            <PSearch />
            <SignOutin />
            <Cart />
            <Settings />
          </SheetContent>
        </Sheet>
      
    </>
  )
}