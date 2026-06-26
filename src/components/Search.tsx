"use client";
import { List, Search } from "lucide-react";
import { useState } from "react";

export default function PSearch() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex justify-center items-center gap-1">
      <Search size={20} color="#008ecc"/>
      <input
        className="bg-accent/70 lg:bg-accent/90 w-[40vw] lg:w-[30vw] xl:w-[40vw] rounded-sm p-1 text-md"
        type="text"
        placeholder={`Search essentials`}
        
        
      />
      
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex justify-center items-center">
          <List size={20} color="#008ecc"/>
          <span className="sr-only">Filter button</span>
        </button>

        {isOpen && (
          <div className="absolute top-full  right-0 mt-2 w-64 rounded-md border bg-white shadow-lg z-50">
            ola
          </div>
        )}
      </div>
    </div>
  );
}