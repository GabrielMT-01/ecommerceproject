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
import Filter from "./Filter"
import Settings from "./Settings"


export default function SheetMenu() {

  return (
    <Sheet>
      <SheetTrigger asChild>      
        <div className="flex items-center gap-1">
            Menu
            <Button variant="outline"><Menu /></Button>
        </div>
      </SheetTrigger>
      
      <SheetContent>
        <div className="flex items-center justify-between px-3 py-5">
          <span className="text-[#008ecc] text-lg font-[family-name:var(--font-carter)] ">GS MegaMart</span>
          <SheetClose asChild>
            <Button variant="outline" className="w-fit text-">x</Button>
          </SheetClose>
        </div>


        <Filter />
        <SignOutin />
        <Cart />
        <Settings />

      </SheetContent>
    </Sheet>
  )
}