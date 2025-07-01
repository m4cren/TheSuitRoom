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
      <section className="h-fit">
         <SearchBar />
         <div className="relative px-[2.5vw] mt-4 h-[100vh] ">
            <div className="flex flex-col gap-[3.5vw]">
               <h1 className="text-[4.5vw] text-forest-green font-bold leading-[4.5vw]">
                  Look Sharp, Feel <br />
                  Sharp Tailored for <br />
                  Modern Man
               </h1>
               <div className="flex flex-row items-center gap-2">
                  <button className="font-medium text-[1.25vw] bg-gradient-to-b from-slight-forest-green to-forest-green rounded-full text-mint-green px-[4vw] py-[1vw]">
                     Shop Now
                  </button>
                  <button className=" px-[1vw] py-[1vw] bg-gradient-to-b from-slight-forest-green to-forest-green rounded-full text-mint-green">
                     <ArrowUpRight />
                  </button>
               </div>
            </div>
            <div className="absolute bottom-[2vw] right-[4vw] flex flex-row items-end justify-between w-[38vw]">
               <div className="flex flex-col gap-[0.8vw]">
                  <h1 className="text-forest-green text-[2.75vw] font-bold">
                     69 Million+
                  </h1>
                  <p className="text-forest-green text-[1vw]">
                     Trusted by fashion-foward men. <br />
                     Read real stories from customers who <br />
                     value our craftmanship and care.
                  </p>
               </div>
               <ul className="flex flex-row items-center -gap-5">
                  {loadAvatar()}
               </ul>
            </div>
            <Image
               src={"/images/Hero(Desktop).png"}
               alt="hero"
               width={"1920"}
               height={"1080"}
               className="absolute top-0 left-1/2 -translate-x-1/2 w-[95vw]"
            />
            <p className="absolute bottom-[4vw] left-[8vw] text-mint-green text-[1.15vw]">
               Discover the latest trends & express your style <br />
               effortlessly. Shop exclusive collections with premium <br />
               design. just for you!
            </p>
         </div>
      </section>
   );
};

export default Landing;
