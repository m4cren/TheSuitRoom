import Image from "next/image";

interface Props {
   label: string;
   img: string;
   price: number;
   old_price: number;
   category: string;
}

const ProductCard = ({ category, img, label, old_price, price }: Props) => {
   return (
      <li className="flex flex-col p-4 bg-[#FFFFFF] items-center w-fit h-fit rounded-xl text-[#2c2c2c] gap-3">
         <Image
            src={`/images/products/${img}.jpg`}
            width={200}
            height={275}
            alt={label}
            className="w-[20rem] h-[15rem] object-contain"
         />
         <div>
            <h4 className="text-[1.4vw] font-medium">{label}</h4>
            <p className="text-[0.9vw] opacity-70">{category}</p>
            <div className="flex items-center gap-2">
               {" "}
               <h4 className="text-[1.4vw] font-medium">${price}</h4>
               <p className="text-[0.9vw] opacity-70">
                  Typical price: <s>${old_price}</s>
               </p>
            </div>
            <p className="text-[1vw] opacity-70">Free Delivery</p>
         </div>
      </li>
   );
};

export default ProductCard;
