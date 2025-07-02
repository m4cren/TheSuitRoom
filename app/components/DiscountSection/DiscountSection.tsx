import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const models = {
   left: [
      {
         img_url: "2",
         width: 12,
      },
      {
         img_url: "3",
         width: 22,
      },
   ],
   right: [
      {
         img_url: "4",
         width: 22,
      },
      {
         img_url: "1",
         width: 12,
      },
   ],
};

const DiscountSection = () => {
   return (
      <section className="flex flex-row items-center justify-center py-[2vw]">
         <div className="flex flex-row items-center gap-[2vw]">
            {models.left.map(({ img_url, width }) => (
               <Image
                  key={img_url}
                  src={`/images/models/model_discount_${img_url}.jpg`}
                  alt="model_discount"
                  width={175}
                  height={275}
                  className={`w-[${width}vw]`}
               />
            ))}
         </div>
         <div className="flex flex-col gap-[1.5vw] items-center">
            <h1 className="text-[2.75vw] font-bold text-forest-green">
               Get 69% Off
            </h1>
            <p className="text-[1vw] text-center text-forest-green">
               for all new product purchases <br />
               min. purchase $450
            </p>
            <div>
               <button className="text-[1vw] flex flex-row items-center gap-[2vw] bg-gradient-to-b from-slight-forest-green to-forest-green rounded-full px-[2vw] py-[1vw] text-mint-green font-medium">
                  Shop Now <ArrowUpRight />
               </button>
            </div>
         </div>
         <div className="flex flex-row items-center gap-[2vw]">
            {models.right.map(({ img_url, width }) => (
               <Image
                  key={img_url}
                  src={`/images/models/model_discount_${img_url}.jpg`}
                  alt="model_discount"
                  width={175}
                  height={275}
                  className={`w-[${width}vw]`}
               />
            ))}
         </div>
      </section>
   );
};

export default DiscountSection;
