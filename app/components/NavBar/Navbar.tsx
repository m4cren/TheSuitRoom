"use client";
import SignInProvider from "@/app/auth";
import { auth } from "@/lib/firebase/client";
import { MenuIcon, ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ProfilePopup from "./ProfilePopup";

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
   const [user, loading, error] = useAuthState(auth);
   const [isPopup, setIsPopup] = useState<boolean>(false);
   console.log(user);
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
               className={`${user ? "justify-end pr-[3vw] md:pr-0 md:justify-around" : "justify-around md:justify-evenly lg:justify-around"} items-center text-[2vw] md:text-[1.5vw] lg:text-[1vw] absolute top-0 right-0 lg:right-1/2 lg:left-1/2  lg:-translate-x-1/2 flex flex-row  text-mint-green bg-forest-green pl-[5vw] md:pl-0 h-[10vw] md:h-[6vw] lg:h-[3vw] w-[55%] md:w-[60%] lg:w-[40%] rounded-bl-full m-auto lg:rounded-b-[10rem] bg-gradient-to-b from-forest-green to-slight-forest-green [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)]`}
            >
               {links.map(({ label, value }, index) => (
                  <li key={index} className="hidden md:block">
                     <Link href={`/${value}`}>{label}</Link>
                  </li>
               ))}
               <div className=" text-forest-green lg:hidden flex flex-row items-center gap-8">
                  {loading ? (
                     <p>Loading...</p>
                  ) : user ? (
                     <>
                        <button className="text-mint-green scale-60 md:scale-100">
                           <ShoppingCart />
                        </button>
                        <button
                           onClick={() => setIsPopup(!isPopup)}
                           className="text-mint-green scale-80 md:scale-100 cursor-pointer"
                        >
                           <Image
                              src={user.photoURL!}
                              alt="user"
                              width={50}
                              height={50}
                              className="w-[9vw] h-[9vw] md:w-[4.75vw] md:h-[4.75vw] rounded-full"
                           />
                        </button>
                        <button className="block md:hidden text-mint-green scale-60 md:scale-100">
                           <MenuIcon />
                        </button>
                     </>
                  ) : (
                     <SignInProvider />
                  )}
               </div>
            </ul>
            <div className="hidden text-forest-green lg:flex flex-row items-center mt-[1.25vw] gap-8">
               {loading ? (
                  <p>Loading...</p>
               ) : user ? (
                  <>
                     <button
                        className="cursor-pointer"
                        onClick={() => setIsPopup(!isPopup)}
                     >
                        <Image
                           src={user.photoURL!}
                           alt="user"
                           width={50}
                           height={50}
                           className="rounded-full "
                        />
                     </button>
                     <button>
                        <ShoppingCart />
                     </button>
                  </>
               ) : (
                  <SignInProvider />
               )}
            </div>
         </div>
         {isPopup && (
            <ProfilePopup
               setIsPopup={setIsPopup}
               email={user?.email}
               logout={() => {
                  auth.signOut();
               }}
            />
         )}
      </nav>
   );
};

export default Navbar;
