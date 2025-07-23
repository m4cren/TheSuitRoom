import React from "react";
import Filterer from "./Filterer";
const categories: Record<string, { label: string; value: string }[]> = {
   suit: [
      { label: "Business / Formal Wear", value: "business suits" },
      { label: "Wedding Suits", value: "wedding suits" },
      { label: "Prom Suits", value: "prom suits" },
      { label: "Casual Suits", value: "casual suits" },
      { label: "Funeral Suits", value: "funeral suits" },
      { label: "Party/Event Suits", value: "party suits" },
   ],
};
const sizes: string[] = ["XS", "S", "M", "XL", "XXL"];
const colorFamily = {
   suit: ["Black", "Maroon", "Emerald Green", "Pink", "Grey"],
};

const SideBar = () => {
   return (
      <aside className="flex flex-col gap-8">
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
