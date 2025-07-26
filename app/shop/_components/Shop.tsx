"use client";
import { XIcon } from "lucide-react";
import { useState } from "react";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import FilterToggle from "./FilterToggle";

const Shop = () => {
   const [isFilter, setIsFilter] = useState<boolean>(false);
   const [isClosing, setIsClosing] = useState<boolean>(false);

   const handleClosing = () => {
      setIsClosing(true);
      setTimeout(() => {
         setIsClosing(false);
         setIsFilter(false);
      }, 450);
   };

   return (
      <main className="text-forest-green grid grid-cols-1 lg:grid-cols-[20vw_1fr] h-fit px-[3.5vw] my-[2vw]">
         <SideBar />
         {isFilter && (
            <div className="bg-black/40  fixed z-10 top-0 left-0 right-0 bottom-0 flex items-end">
               <div
                  className={`${isClosing && "toggle-filter-close"} flex flex-col gap-8 p-[6vw] md:p-[4vw] toggle-filter-open relative rounded-t-2xl  md:rounded-t-4xl bg-mint-green h-[85vh] md:h-[75vh] w-full`}
               >
                  <button
                     className="absolute top-4 right-4 md:top-6  md:right-6 cursor-pointer"
                     onClick={handleClosing}
                  >
                     <XIcon />
                  </button>
                  <FilterToggle />
                  <div className="mx-auto ">
                     <button className="rounded-l-xl md:rounded-l-2xl w-[8rem] cursor-pointer py-2 border-1 border-forest-green text-forest-green">
                        Reset
                     </button>
                     <button className="rounded-r-xl md:rounded-r-2xl w-[8rem] cursor-pointer py-2 bg-forest-green border-1 border-forest-green text-mint-green">
                        Done
                     </button>
                  </div>
               </div>
            </div>
         )}
         <div>
            <div>
               <SearchBar setIsFilter={setIsFilter} />
            </div>
            <ProductList />
         </div>
      </main>
   );
};

export default Shop;
