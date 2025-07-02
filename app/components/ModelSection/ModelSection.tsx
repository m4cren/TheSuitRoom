import Image from "next/image";

const ModelSection = () => {
   return (
      <section className="flex flex-row items-center justify-evenly py-[2vw]">
         <div className="flex flex-col items-center justify-center gap-[2vw]">
            <h1 className="text-forest-green text-[2.8vw] font-medium text-center leading-[3vw]">
               Model Wearing
               <br />
               Full Outfits
            </h1>
            <button className="text-[1vw] bg-gradient-to-t px-[2.2vw] py-[0.8vw] from-forest-green to-slight-forest-green rounded-full text-mint-green">
               Explore more
            </button>
         </div>
         <ul className="flex flex-row items-center justify-center gap-[2vw]">
            <li className="relative overflow-hidden rounded-3xl  [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)]  ">
               <Image
                  src={"/images/models/Model1.jpg"}
                  alt="model 1"
                  width={300}
                  height={275}
                  className="w-[22vw] h-[20vw] object-cover object-top"
               />
               <span
                  className="
      pointer-events-none
      absolute inset-0
      bg-gradient-to-t
      from-black/60       
               
      to-transparent          
    "
               />
            </li>
            <li className="relative overflow-hidden rounded-3xl  [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] ">
               <Image
                  src={"/images/models/Model2.jpg"}
                  alt="model 2"
                  width={300}
                  height={275}
                  className="w-[22vw] h-[20vw] object-cover object-top"
               />
               <span
                  className="
     pointer-events-none
      absolute inset-0
      bg-gradient-to-t
      from-black/60      
               
      to-transparent           
    "
               />
            </li>
         </ul>
      </section>
   );
};

export default ModelSection;
