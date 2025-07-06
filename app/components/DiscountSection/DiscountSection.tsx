import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const models = {
   left: [
      {
         img_url: "2",
         width: { desktop: 12, tablet: 30 },
         display: ["desktop"],
      },
      {
         img_url: "3",
         width: { desktop: 22, tablet: 35 },
         display: ["desktop", "tablet"],
      },
   ],
   right: [
      {
         img_url: "4",
         width: { desktop: 22, tablet: 35 },
         display: ["desktop", "tablet"],
      },
      {
         img_url: "1",
         width: { desktop: 12, tablet: 30 },
         display: ["desktop"],
      },
   ],
};

const DiscountSection = () => {
   return (
      <section className="flex flex-row items-center justify-center py-[14vw] md:py-[2vw]">
         <div className="flex flex-row items-center gap-[2vw]">
            {models.left.map(({ img_url, width, display }) => (
               <Image
                  key={img_url}
                  src={`/images/models/model_discount_${img_url}.jpg`}
                  alt="model_discount"
                  width={175}
                  height={275}
                  className={`  ${display.includes("tablet") ? `block lg:w-[${width.desktop}vw] md:w-[${width.tablet}vw]` : `hidden lg:block `} hidden md:block`}
               />
            ))}
         </div>
         <div className="flex flex-col gap-[4vw] md:gap-[1.5vw] items-center">
            <h1 className="text-[10vw] md:text-[4.5vw] lg:text-[2.75vw] font-bold text-forest-green">
               Get 69% Off
            </h1>
            <p className="md:text-[1.75vw] lg:text-[1vw] text-center text-forest-green">
               for all new product purchases <br />
               min. purchase $450
            </p>
            <div>
               <button className="text-[4vw] md:text-[2vw] lg:text-[1vw] flex flex-row items-center gap-[2vw] bg-gradient-to-b from-slight-forest-green to-forest-green rounded-full px-[8vw] md:px-[3.5vw]  lg:px-[2vw] py-[2vw] md:py-[1.5vw] lg:py-[1vw] text-mint-green font-medium">
                  Shop Now <ArrowUpRight />
               </button>
            </div>
         </div>
         <div className="flex flex-row items-center gap-[2vw]">
            {models.right.map(({ img_url, width, display }) => (
               <Image
                  key={img_url}
                  src={`/images/models/model_discount_${img_url}.jpg`}
                  alt="model_discount"
                  width={175}
                  height={275}
                  className={`  ${display.includes("tablet") ? `block lg:w-[${width.desktop}vw] md:w-[${width.tablet}vw]` : `hidden lg:block `} hidden md:block`}
               />
            ))}
         </div>
      </section>
   );
};

export default DiscountSection;
