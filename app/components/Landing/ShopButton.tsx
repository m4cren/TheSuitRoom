"use client";

import { useRouter } from "next/navigation";

const ShopButton = () => {
   const router = useRouter();
   return (
      <button
         onClick={() => router.push("/shop")}
         className="cursor-pointer text-[3.5vw] font-medium md:text-[1.6vw] lg:text-[1.25vw] bg-gradient-to-b from-slight-forest-green to-forest-green rounded-full text-mint-green px-[6vw] md:px-[4vw] py-[2vw] md:py-[1.35vw]  lg:py-[1vw]"
      >
         Shop Now
      </button>
   );
};

export default ShopButton;
