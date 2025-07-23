import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
   return (
      <div className="flex flex-row items-center justify-between pb-[2vw]">
         <div className="relative">
            <input
               className="text-[2.5vw] outline-none md:text-[1.4vw] lg:text-[1vw] border-forest-green/30 border-1 rounded-full px-4 text-forest-green py-[1.5vw] md:py-[0.8vw] lg:py-[0.5vw] w-[60vw]  md:w-[32vw] [box-shadow:-2px_2px_3px_rgba(0,0,0,0.2)]"
               placeholder="Search Suit"
               type="text"
            />
            <Search
               size={18}
               className="absolute top-1/2 right-4 -translate-y-1/2 text-forest-green"
            />
         </div>
         <div>
            <select
               className="text-[2.5vw] md:text-[1.4vw] lg:text-[1vw] border-forest-green/30 border-1 rounded-full pl-2 lg:pl-4 w-[30vw] md:w-[12vw] text-forest-green py-[1.5vw] md:py-[0.8vw] lg:py-[0.5vw] [box-shadow:-2px_2px_4px_rgba(0,0,0,0.2)]"
               defaultValue={"Clothing"}
            >
               <option value={"test"}>Clothing</option>
               <option value={"test"}>Clothing</option>
               <option value={"test"}>Clothing</option>
            </select>
         </div>
      </div>
   );
};

export default SearchBar;
