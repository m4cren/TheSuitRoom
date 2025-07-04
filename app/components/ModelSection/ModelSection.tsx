import Image from "next/image";

const models = [
   {
      img_url: "Model1",
   },
   {
      img_url: "Model2",
   },
];

const ModelSection = () => {
   return (
      <section className="flex flex-row items-center justify-evenly py-[2vw]">
         <div className="flex flex-col items-center justify-center gap-[2vw]">
            <h1 className="text-forest-green text-[2.8vw] font-medium text-center leading-[3vw]">
               Model Wearing
               <br />
               Full Outfits
            </h1>
            <button className="md:text-[1.6vw] lg:text-[1vw] bg-gradient-to-t md:px-[3vw] md:py-[1.5vw] lg:px-[2.2vw] lg:py-[0.8vw] from-forest-green to-slight-forest-green rounded-full text-mint-green">
               Explore more
            </button>
         </div>
         <ul className="flex flex-row items-center justify-center gap-[2vw]">
            {models.map(({ img_url }) => (
               <li
                  key={img_url}
                  className="relative overflow-hidden rounded-3xl  [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)]  "
               >
                  <Image
                     src={`/images/models/${img_url}.jpg`}
                     alt="model 1"
                     width={300}
                     height={275}
                     className="md:w-[30vw] md:h-[27vw] lg:w-[22vw] lg:h-[20vw] object-cover object-top"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               </li>
            ))}
         </ul>
      </section>
   );
};

export default ModelSection;
