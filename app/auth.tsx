"use client";
import {
   GithubAuthProvider,
   signInWithPopup,
   FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useAuthState, useSignInWithFacebook } from "react-firebase-hooks/auth";
import { useState } from "react";
import { Facebook, Github, LucideIcon, XIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
   Facebook: Facebook,
   Github: Github,
};

const SignInProvider = () => {
   const [isClick, setIsClick] = useState<boolean>(false);

   const signInWithGithub = async () => {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
   };
   const signInWithFacebook = async () => {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
   };

   const providers = [
      { label: "Github", action: () => signInWithGithub() },
      { label: "Facebook", action: () => signInWithFacebook() },
   ];
   return (
      <>
         <button
            className="text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] cursor-pointer bg-mint-green lg:bg-gradient-to-b from-slight-forest-green to-forest-green rounded-sm md:rounded-lg px-[2vw] py-[0.75vw] text-forest-green lg:text-mint-green"
            onClick={() => setIsClick(true)}
         >
            Sign in
         </button>
         {isClick && (
            <div className="fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-black/40 z-10">
               <div className="relative flex flex-col items-center md:py-[5vw] lg:py-[2vw] bg-mint-green rounded-xl w-[60vw] h-[40vw] md:w-[40vw] md:h-[28vw] lg:w-[30vw] lg:h-[20vw]">
                  <button
                     onClick={() => setIsClick(false)}
                     className="absolute scale-60 md:scale-100 right-1 top-1 md:right-3 md:top-3 cursor-pointer"
                  >
                     <XIcon />
                  </button>
                  <h1 className="text-[4vw] md:text-[3vw] lg:text-[2vw] font-medium text-center py-[3vw] md:py-[1vw]">
                     Sign in with
                  </h1>
                  <hr className="w-[90%] opacity-30 text-center" />
                  <ul className="flex flex-col gap-[2vw] md:gap-[1vw] py-[3vw] lg:py-[2.5vw]">
                     {providers.map(({ action, label }) => {
                        const IconComponent = iconMap[label];

                        return (
                           <li
                              key={label}
                              className=" border-1 rounded-md md:rounded-xl border-forest-green/30 px-[8vw] md:px-[4vw] py-[0.25vw] md:py-[0.5vw] "
                           >
                              <button
                                 onClick={() => {
                                    action();
                                    setIsClick(false);
                                 }}
                                 className="text-[2.5vw] md:text-[2vw] flex flex-row items-center justify-center gap-[2vw] cursor-pointer"
                              >
                                 <IconComponent className="scale-60 md:scale-100" />{" "}
                                 {label}
                              </button>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
         )}
      </>
   );
};

export default SignInProvider;
