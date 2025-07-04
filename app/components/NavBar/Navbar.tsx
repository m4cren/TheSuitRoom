import Link from "next/link";
import { Menu, MenuIcon, ShoppingCart, UserRound } from "lucide-react";

const links: { label: string; value: string }[] = [
   {
      label: "About Us",
      value: "about_us",
   },
   {
      label: "Blog",
      value: "blog",
   },
   {
      label: "FAQ",
      value: "faq",
   },
];

const Navbar = () => {
   const isLogin = false;
   return (
      <nav className="relative">
         <div className="h-[10vw] md:h-[5vw] lg:h-[3vw] rounded-bl-full lg:rounded-b-full bg-forest-green [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)]"></div>
         <div className="relative flex flex-row items-start justify-between px-[3.5vw]">
            <h1 className="text-forest-green mt-[2.5vw] md:mt-[1.25vw] text-[5vw] md:text-[3vw] lg:text-[2vw] font-semibold">
               <span className="font-srisakdi">T</span>he{" "}
               <span className="font-srisakdi">S</span>uit{" "}
               <span className="font-srisakdi">R</span>oom
            </h1>

            <ul
               className={`${isLogin ? "justify-end pr-[3vw] md:pr-0 md:justify-around" : "justify-around md:justify-evenly lg:justify-around"} items-center text-[2vw] md:text-[1.5vw] lg:text-[1vw] absolute top-0 right-0 lg:right-1/2 lg:left-1/2  lg:-translate-x-1/2 flex flex-row  text-mint-green bg-forest-green pl-[5vw] md:pl-0 h-[10vw] md:h-[6vw] lg:h-[3vw] w-[55%] md:w-[60%] lg:w-[40%] rounded-bl-full m-auto lg:rounded-b-[10rem] bg-gradient-to-b from-forest-green to-slight-forest-green [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)]`}
            >
               {links.map(({ label, value }, index) => (
                  <li key={index} className="hidden md:block">
                     <Link href={`/${value}`}>{label}</Link>
                  </li>
               ))}
               <div className=" text-forest-green lg:hidden flex flex-row items-center gap-8">
                  {!isLogin ? (
                     <>
                        <button className="text-mint-green scale-80 md:scale-100">
                           <ShoppingCart />
                        </button>
                        <button className="text-mint-green scale-80 md:scale-100">
                           <UserRound />
                        </button>
                        <button className="block md:hidden text-mint-green scale-80 md:scale-100">
                           <MenuIcon />
                        </button>
                     </>
                  ) : (
                     <button className="text-[3vw] md:text-[1.35vw] cursor-pointer bg-mint-green rounded-lg px-[2vw] py-[1.5vw] md:py-[0.75vw] text-forest-green">
                        Login / Signup
                     </button>
                  )}
               </div>
            </ul>
            <div className="hidden text-forest-green lg:flex flex-row items-center mt-[1.25vw] gap-8">
               {isLogin ? (
                  <>
                     <button>
                        <UserRound />
                     </button>
                     <button>
                        <ShoppingCart />
                     </button>
                  </>
               ) : (
                  <button className="text-[1vw] cursor-pointer bg-gradient-to-b from-slight-forest-green to-forest-green rounded-lg px-[2vw] py-[0.75vw] text-mint-green">
                     Login / Signup
                  </button>
               )}
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
