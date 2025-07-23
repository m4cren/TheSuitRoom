import React from "react";
import Filterer from "./Filterer";
import { categories, colorFamily, sizes } from "@/lib/products";

const SideBar = () => {
   return (
      <aside className="hidden lg:flex flex-col gap-8">
         <Filterer label="Category">
            {categories.suit.map(({ label, value }) => (
               <li key={value}>
                  <label className="flex items-center gap-2 text-[1vw]">
                     <input type="checkbox" value={value} />
                     {label}
                  </label>
               </li>
            ))}
         </Filterer>
         <Filterer label="Size">
            {sizes.map((size) => (
               <li key={size}>
                  <label className="flex items-center gap-2 text-[1vw]">
                     <input type="radio" value={size} id="size" name="size" />
                     {size}
                  </label>
               </li>
            ))}
         </Filterer>
         <Filterer label="Color Family">
            {colorFamily.suit.map((color) => (
               <li key={color}>
                  <label className="flex items-center gap-2 text-[1vw]">
                     <input
                        type="radio"
                        value={color}
                        id="color"
                        name="color"
                     />
                     {color}
                  </label>
               </li>
            ))}
         </Filterer>
         <Filterer label="Price">
            <div>
               <input
                  type="number"
                  className="rounded-md border-1 border-black/30 px-[1vw] w-[7vw] py-[0.7vw] text-[0.9vw] outline-none"
                  placeholder="Min $"
               />

               {" - "}
               <input
                  type="number"
                  className="rounded-md border-1 border-black/30 px-[1vw] w-[7vw] py-[0.7vw] text-[0.9vw] outline-none"
                  placeholder="Max $"
               />
            </div>
         </Filterer>
      </aside>
   );
};

export default SideBar;
