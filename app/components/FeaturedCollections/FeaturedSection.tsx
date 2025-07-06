import Image from "next/image";
import React from "react";

const featuredCollections = {
   left: [
      {
         img_url: "waistcoat",
         img_position: "center",
         label: "Waistcoat",
         sub_lable: "series",
      },
      {
         img_url: "footwear",
         img_position: "center",
         label: "Footwear",
         sub_lable: "series",
      },
   ],
   middle: {
      img_url: "full_set",
      img_position: "center",
      label: "Full Set",
      sub_lable: "series",
   },
   right: [
      {
         img_url: "blazers",
         img_position: "top",
         label: "Blazers",
         sub_lable: "series",
      },
      {
         img_url: "suit_pants",
         img_position: "top",
         label: "Suit Pants",
         sub_lable: "series",
      },
   ],
};

const FeaturedSection = () => {
   return (
      <section className="flex flex-col py-[2vw] items-center">
         <div className="flex flex-col  items-center py-[2vw]">
            <h1 className="text-forest-green text-[5.5vw] md:text-[3.5vw] lg:text-[2.5vw] font-bold">
               Our Featured Collections
            </h1>
            <p className="text-[3.5vw] md:text-[1.5vw] lg:text-[1vw] text-forest-green">
               Recently added items!
            </p>
         </div>
         <ul className="hidden md:grid grid-cols-3 items-center justify-center  w-[90vw]  lg:w-[75vw] gap-[1vw] p-[1vw]">
            <div className="flex flex-col items-center justify-between gap-[1vw]">
               {featuredCollections.left.map(
                  ({ img_position, img_url, label, sub_lable }) => (
                     <li
                        className="relative rounded-2xl overflow-hidden"
                        key={img_url}
                     >
                        <Image
                           src={`/images/featured/${img_url}.jpg`}
                           alt="full_set"
                           width={250}
                           height={190}
                           className={`rounded-xl overflow-hidden md:w-[30vw] md:h-[22vw] lg:w-[25vw] lg:h-[17vw] object-cover  object-${img_position}`}
                        />
                        <span
                           className="
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80               
                      to-transparent  
                      text-mint-green flex flex-col justify-end p-[1.5vw]        
                    "
                        >
                           <h4 className=" md:text-[1.8vw] lg:text-[1.2vw]">
                              {label}
                           </h4>
                           <p className="font-light md:text-[1.5vw] lg:text-[1vw]">
                              {sub_lable}
                           </p>
                        </span>
                     </li>
                  ),
               )}
            </div>
            <div className="flex justify-center">
               <li className="relative rounded-2xl overflow-hidden">
                  <Image
                     src={`/images/featured/${featuredCollections.middle.img_url}.jpg`}
                     alt="full_set"
                     width={250}
                     height={375}
                     className={`rounded-xl overflow-hidden  md:w-[35vw] md:h-[45vw] lg:w-[25vw]  lg:h-[35vw] object-fill object-${featuredCollections.middle.img_position}`}
                  />
                  <span
                     className="
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80               
                      to-transparent  
                      text-mint-green flex flex-col justify-end p-[1.5vw]        
                    "
                  >
                     <h4 className=" md:text-[1.8vw] lg:text-[1.2vw]">
                        {featuredCollections.middle.label}
                     </h4>
                     <p className="font-light md:text-[1.5vw] lg:text-[1vw]">
                        {featuredCollections.middle.sub_lable}
                     </p>
                  </span>
               </li>
            </div>
            <div className="flex flex-col items-center justify-between gap-[1vw]">
               {featuredCollections.right.map(
                  ({ img_position, img_url, label, sub_lable }) => (
                     <li
                        className="relative rounded-2xl overflow-hidden"
                        key={img_url}
                     >
                        <Image
                           src={`/images/featured/${img_url}.jpg`}
                           alt="full_set"
                           width={250}
                           height={190}
                           className={`rounded-xl overflow-hidden md:w-[30vw] md:h-[22vw] lg:w-[25vw] lg:h-[17vw] object-cover  object-${img_position}`}
                        />
                        <span
                           className="
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80               
                      to-transparent  
                      text-mint-green flex flex-col justify-end p-[1.5vw]        
                    "
                        >
                           <h4 className=" md:text-[1.8vw] lg:text-[1.2vw]">
                              {label}
                           </h4>
                           <p className="font-light md:text-[1.5vw] lg:text-[1vw]">
                              {sub_lable}
                           </p>
                        </span>
                     </li>
                  ),
               )}
            </div>
         </ul>
         <ul className="grid md:hidden grid-cols-2 items-center justify-center  w-[85vw]  p-[1vw]">
            <div className="flex justify-center">
               <li className="relative rounded-xl overflow-hidden">
                  <Image
                     src={`/images/featured/${featuredCollections.middle.img_url}.jpg`}
                     alt="full_set"
                     width={250}
                     height={375}
                     className={`rounded-xl overflow-hidden  w-[40vw] h-[61vw]  object-fill object-${featuredCollections.middle.img_position}`}
                  />
                  <span
                     className="
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80               
                      to-transparent  
                      text-mint-green flex flex-col justify-end p-[3vw]        
                    "
                  >
                     <h4 className=" text-[3.5vw]">
                        {featuredCollections.middle.label}
                     </h4>
                     <p className="font-light text-[2.5vw]">
                        {featuredCollections.middle.sub_lable}
                     </p>
                  </span>
               </li>
            </div>
            <div className="flex flex-col items-center justify-between gap-[1vw]">
               {featuredCollections.right.map(
                  ({ img_position, img_url, label, sub_lable }) => (
                     <li
                        className="relative rounded-xl overflow-hidden"
                        key={img_url}
                     >
                        <Image
                           src={`/images/featured/${img_url}.jpg`}
                           alt="full_set"
                           width={250}
                           height={190}
                           className={`rounded-xl overflow-hidden w-[40vw] h-[30vw]  object-cover  object-${img_position}`}
                        />
                        <span
                           className="
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80               
                      to-transparent  
                      text-mint-green flex flex-col justify-end p-[3vw]        
                    "
                        >
                           <h4 className=" text-[3.5vw]">{label}</h4>
                           <p className="font-light text-[2.5vw]">
                              {sub_lable}
                           </p>
                        </span>
                     </li>
                  ),
               )}
            </div>
         </ul>
      </section>
   );
};

export default FeaturedSection;
