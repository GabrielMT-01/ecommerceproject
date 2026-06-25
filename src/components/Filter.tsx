import {Search} from "lucide-react";

export default function Filter() {
  return (
    <div className="flex justify-center items-center gap-1">
      <Search size={20} color="#008ecc"/>
      <input
          className="bg-accent/70 border w-[60vw]  rounded-sm p-1 text-md "
          type="text"
          placeholder={`Search essentials`}
      />
      
    </div>
  );
}