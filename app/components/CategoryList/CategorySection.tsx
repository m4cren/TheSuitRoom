import Image from "next/image";

const categoryList = [
   {
      label: "Set Collection",
      value: "set_collection",
      img_url: "full_suit",
      quantity: 35,
   },
   {
      label: "Blazers",
      value: "blazers",
      img_url: "blazers",
      quantity: 35,
   },
   {
      label: "Slacks",
      value: "slacks",
      img_url: "slacks",
      quantity: 35,
   },
];
const CategorySection = () => {
   return (
      <section className="py-[5vw] md:py-[2vw] px-[3.5vw]">
         <h1 className="text-[6vw] text-center md:text-start md:text-[3.5vw] lg:text-[2.5vw] text-forest-green font-bold mb-[1vw]">
            Our Category List
         </h1>
         <ul className="grid grid-cols-2  md:flex md:flex-row md:items-center md:justify-center gap-[3vw] px-[3vw]">
            {categoryList.map(({ img_url, label, quantity, value }) => (
               <li
                  key={value}
                  className="relative overflow-hidden rounded-2xl md:rounded-3xl  [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] "
               >
                  <Image
                     src={`/images/categories/${img_url}.jpg`}
                     alt={label}
                     width={400}
                     height={375}
                     className="w-[45vw] h-[50vw] m-auto md:w-[27vw] md:h-[35vw] lg:w-[20vw] lg:h-[25vw] object-cover object-center"
                  />
                  <span
                     className="
                 pointer-events-none
                  absolute inset-0
                  bg-black/30 flex flex-col items-center justify-center text-mint-green font-medium          
                "
                  >
                     <h4 className="text-[3vw] md:text-[1.75vw] lg:text-[1.25vw]">
                        {label}
                     </h4>
                     <p className="text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-light">
                        {quantity} Items
                     </p>
                  </span>
               </li>
            ))}
         </ul>
      </section>
   );
};

export default CategorySection;
