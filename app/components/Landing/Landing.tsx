import Image from "next/image";
import SearchBar from "./SearchBar";
import { ArrowUpRight } from "lucide-react";

const loadAvatar = () => {
   const items = [];

   for (let i = 1; i <= 4; i++) {
      items.push(
         <li
            key={i}
            className={` border-2 rounded-full border-mint-green overflow-hidden -ml-[1.25vw]`}
         >
            <Image
               src={`/images/avatars/avatar${i}.png`}
               alt={`Avatar ${i}`}
               width={50}
               height={50}
               className="w-[4vw] h-[4vw] "
            />
         </li>,
      );
   }

   return items;
};

const Landing = () => {
   return (
      <section className="">
         <SearchBar />
         <div className="relative px-[3.5vw] mt-4 pb-[2vw]">
            <div className="flex flex-col gap-[2vw] md:gap-[3.5vw]">
               <h1 className="text-[5.75vw] md:text-[4.5vw] text-forest-green font-bold leading-[7vw] md:leading-[4.5vw]">
                  Look Sharp, Feel <br />
                  Sharp Tailored for <br />
                  Modern Man
               </h1>
               <div className="flex flex-row items-center gap-1 md:gap-2">
                  <button className="text-[3.5vw] font-medium md:text-[1.6vw] lg:text-[1.25vw] bg-gradient-to-b from-slight-forest-green to-forest-green rounded-full text-mint-green px-[6vw] md:px-[4vw] py-[2vw] md:py-[1.35vw]  lg:py-[1vw]">
                     Shop Now
                  </button>
                  <button className=" px-[1vw] py-[1vw] bg-gradient-to-b from-slight-forest-green to-forest-green rounded-full text-mint-green">
                     <ArrowUpRight />
                  </button>
               </div>
            </div>

            <div className="relative -mt-[32vw] md:-mt-[21vw] w-full">
               <Image
                  src={"/images/Hero(Desktop).png"}
                  alt="hero"
                  width={"1920"}
                  height={"1080"}
                  className="hidden md:block w-[95vw]"
               />
               <Image
                  src={"/images/Hero(Mobile).png"}
                  alt="hero"
                  width={"1920"}
                  height={"1080"}
                  className="block md:hidden w-[95vw]"
               />
               <div>
                  <p className="absolute bottom-[5vw] md:bottom-[3vw] left-[4vw] text-mint-green text-[2.25vw] md:text-[1.5vw] lg:text-[1.15vw]">
                     Discover the latest trends & express{" "}
                     <br className="block md:hidden" /> your style{" "}
                     <br className="hidden md:block" />
                     effortlessly. Shop exclusive{" "}
                     <br className="block md:hidden" /> collections with premium{" "}
                     <br className="hidden md:block" />
                     design. <br className="block md:hidden" />
                     just for you!
                  </p>
                  <div className="absolute bottom-[4vw] md:bottom-0 lg:bottom-[1vw] right-0 md:right-[2vw] flex flex-row items-end justify-between w-[38vw]">
                     <div className="flex flex-col md:gap-0 lg:gap-[0.8vw]">
                        <h1 className="text-forest-green text-[5vw] md:text-[2.75vw] font-bold">
                           69 Million+
                        </h1>
                        <p className="text-forest-green text-[2vw] md:text-[1.5vw] lg:text-[1vw]">
                           Trusted by fashion-foward men.{" "}
                           <br className="hidden lg:block" />
                           Read real stories from customers who{" "}
                           <br className="hidden lg:block" />
                           value our craftmanship and care.
                        </p>
                     </div>
                     <ul className="hidden lg:flex flex-row items-center -gap-5">
                        {loadAvatar()}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Landing;
