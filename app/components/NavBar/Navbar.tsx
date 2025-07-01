import Link from "next/link";
import { Menu, ShoppingCart, UserRound } from "lucide-react";

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
         <div className=" h-[3vw] rounded-b-full bg-forest-green [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)]"></div>
         <div className="relative flex flex-row items-start justify-between px-[2.5vw]">
            <h1 className="text-forest-green mt-[1.25vw] text-[2vw] font-semibold">
               <span className="font-srisakdi">T</span>he{" "}
               <span className="font-srisakdi">S</span>uit{" "}
               <span className="font-srisakdi">R</span>oom
            </h1>

            <ul className="text-[1vw] absolute top-0 left-1/2  -translate-x-1/2 flex flex-row items-center justify-around text-mint-green bg-forest-green h-[3vw] w-[40%] m-auto rounded-b-[10rem] bg-gradient-to-b from-forest-green to-slight-forest-green [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)]">
               {links.map(({ label, value }, index) => (
                  <li key={index}>
                     <Link href={`/${value}`}>{label}</Link>
                  </li>
               ))}
            </ul>
            <div className="text-forest-green flex flex-row items-center mt-[1.25vw] gap-8">
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
