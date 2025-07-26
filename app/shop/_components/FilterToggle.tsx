import { categories, colorFamily, sizes } from "@/lib/products";
import FiltererTablet from "./FiltererTablet";

const FilterToggle = () => {
   return (
      <>
         <FiltererTablet label="Category">
            {categories["suit"].map(({ label, value }) => (
               <li
                  key={value}
                  className="text-[2.8vw] md:text-[1vw] bg-dark-mint-green px-6 md:px-10 py-2 rounded-md w-fit"
               >
                  {label}
               </li>
            ))}
         </FiltererTablet>
         <hr className="h-1 bg-forest-green/30 opacity-30 rounded-2xl" />
         <FiltererTablet label="Size">
            {sizes.map((size) => (
               <li
                  key={size}
                  className="text-[2.8vw] md:text-[1vw] bg-dark-mint-green px-6 md:px-10 py-2 rounded-md w-fit"
               >
                  {size}
               </li>
            ))}
         </FiltererTablet>
         <hr className="h-1 bg-forest-green/30 opacity-30 rounded-2xl" />
         <FiltererTablet label="Color Family">
            {colorFamily["suit"].map((color) => (
               <li
                  key={color}
                  className="text-[2.8vw] md:text-[1vw] bg-dark-mint-green px-6 md:px-10 py-2 rounded-md w-fit"
               >
                  {color}
               </li>
            ))}
         </FiltererTablet>
         <hr className="h-1 bg-forest-green/30 opacity-30 rounded-2xl" />
         <FiltererTablet label="Price">
            <div>
               <input
                  type="number"
                  className="rounded-md border-1 border-black/30 px-[2vw] w-[25vw] md:w-[14vw] py-[1vw] text-[3vw] md:text-[1.7vw] outline-none"
                  placeholder="Min $"
               />

               {" - "}
               <input
                  type="number"
                  className="rounded-md border-1 border-black/30 px-[2vw] w-[25vw] md:w-[14vw] py-[1vw] text-[3vw] md:text-[1.7vw] outline-none"
                  placeholder="Max $"
               />
            </div>
         </FiltererTablet>
      </>
   );
};

export default FilterToggle;
