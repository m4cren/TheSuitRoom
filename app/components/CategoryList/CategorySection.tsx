import Image from "next/image";

const CategorySection = () => {
   return (
      <section className="py-[2vw] px-[2.5vw]">
         <h1 className="text-[2.5vw] text-forest-green font-bold mb-[1vw]">
            Our Category List
         </h1>
         <ul className="flex flex-row items-center gap-4 px-[3vw]">
            <li className="relative overflow-hidden rounded-3xl  [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] ">
               <Image
                  src={"/images/categories/full_suit.jpg"}
                  alt="full suit"
                  width={300}
                  height={275}
                  className="w-[20vw] h-[25vw] object-cover object-center"
               />
               <span
                  className="
                 pointer-events-none
                  absolute inset-0
                  bg-black/30          
                "
               />
            </li>
            <li className="relative overflow-hidden rounded-3xl  [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] ">
               <Image
                  src={"/images/categories/full_suit.jpg"}
                  alt="full suit"
                  width={300}
                  height={275}
                  className="w-[20vw] h-[25vw] object-cover object-center"
               />
               <span
                  className="
                 pointer-events-none
                  absolute inset-0
                  bg-black/30          
                "
               />
            </li>
            <li className="relative overflow-hidden rounded-3xl  [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] ">
               <Image
                  src={"/images/categories/full_suit.jpg"}
                  alt="full suit"
                  width={300}
                  height={275}
                  className="w-[20vw] h-[25vw] object-cover object-center"
               />
               <span
                  className="
                 pointer-events-none
                  absolute inset-0
                  bg-black/30          
                "
               />
            </li>
            <li className="relative overflow-hidden rounded-3xl  [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] ">
               <Image
                  src={"/images/categories/full_suit.jpg"}
                  alt="full suit"
                  width={300}
                  height={275}
                  className="w-[20vw] h-[25vw] object-cover object-center"
               />
               <span
                  className="
                 pointer-events-none
                  absolute inset-0
                  bg-black/30          
                "
               />
            </li>
         </ul>
      </section>
   );
};

export default CategorySection;
