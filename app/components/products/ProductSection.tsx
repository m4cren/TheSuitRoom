import Image from "next/image";

const productLists = [
   {
      label: "Oxford Navy",
      value: "oxford_navy",

      price: 29.0,
   },
   {
      label: "Windsor Gray",
      value: "windsor_gray",

      price: 29.0,
   },
   {
      label: "Savile Cut",
      value: "savile_cut",

      price: 29.0,
   },
   {
      label: "Crimson Command",
      value: "crimson_command",

      price: 29.0,
   },

   {
      label: "Regent Blue",
      value: "regent_blue",

      price: 29.0,
   },
   {
      label: "Carbon Cut",
      value: "carbon_cut",

      price: 29.0,
   },
];

const ProductSection = () => {
   return (
      <section className="flex flex-col items-center justify-center pb-[2vw]">
         <div className="flex flex-col  items-center py-[2vw]">
            <h1 className="text-forest-green text-[3.5vw] lg:text-[2.5vw] font-bold">
               Our Products
            </h1>
            <p className="text-[1.5vw] lg:text-[1vw] text-forest-green">
               Recently added items!
            </p>
         </div>
         <ul className="grid grid-cols-3 gap-[2vw]">
            {productLists.map(({ label, price, value }) => (
               <li
                  key={value}
                  className="relative overflow-hidden rounded-3xl  [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)]  "
               >
                  <Image
                     src={`/images/products/${value}.jpg`}
                     alt="model 1"
                     width={300}
                     height={275}
                     className=" md:w-[27vw]  md:h-[34vw] lg:w-[20vw]  lg:h-[25vw] object-cover object-top"
                  />
                  <span
                     className="
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80               
                      to-transparent  
                      text-mint-green flex flex-col justify-end p-[2vw] lg:p-[1.5vw]        
                    "
                  >
                     <h4 className=" md:text-[1.75vw] lg:text-[1.2vw]">
                        The {label}
                     </h4>
                     <p className="font-light md:text-[1.5vw] lg:text-[1vw]">
                        ${price}.00
                     </p>
                  </span>
               </li>
            ))}
         </ul>
      </section>
   );
};

export default ProductSection;
