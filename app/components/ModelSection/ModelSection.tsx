import Image from "next/image";

const models = [
   {
      img_url: "Model1",
      display: "Tablet",
   },
   {
      img_url: "Model2",
      display: "Both",
   },
];

const ModelSection = () => {
   return (
      <section className="flex flex-col md:flex-row items-center justify-evenly py-[5vw] md:py-[2vw] gap-[4vw] md:gap-0">
         <div className="flex flex-col items-center justify-center gap-[2vw]">
            <h1 className="text-forest-green text-[5.5vw] md:text-[2.8vw] font-medium text-center leading-[6vw] md:leading-[3vw]">
               Model Wearing
               <br />
               Full Outfits
            </h1>
            <button className="text-[3.5vw] md:text-[1.6vw] lg:text-[1vw] bg-gradient-to-t px-[6vw] md:px-[3vw] py-[2vw] md:py-[1.5vw] lg:px-[2.2vw] lg:py-[0.8vw] from-forest-green to-slight-forest-green rounded-full text-mint-green">
               Explore more
            </button>
         </div>
         <ul className="flex flex-row items-center justify-center gap-[2vw]">
            {models.map(({ img_url, display }) => (
               <li
                  key={img_url}
                  className={`${display === "Both" ? "block" : "hidden md:block"} relative overflow-hidden rounded-2xl md:rounded-3xl  [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)]  `}
               >
                  <Image
                     src={`/images/models/${img_url}.jpg`}
                     alt="model 1"
                     width={300}
                     height={275}
                     className="w-[60vw] h-[60vw] md:w-[30vw] md:h-[27vw] lg:w-[22vw] lg:h-[20vw] object-cover object-top"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               </li>
            ))}
         </ul>
      </section>
   );
};

export default ModelSection;
