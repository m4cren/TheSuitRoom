import {
   Facebook,
   IconNode,
   Instagram,
   LucideIcon,
   Twitter,
   Youtube,
} from "lucide-react";
import React from "react";

const iconMap: Record<string, LucideIcon> = {
   facebook: Facebook,
   youtube: Youtube,
   instagram: Instagram,
   twitter: Twitter,
};

const footerIcons = ["facebook", "youtube", "instagram", "twitter"];

const Footer = () => {
   return (
      <footer className="px-[3.5vw] mb-[3.5vw]">
         <div className="flex flex-row items-center justify-between px-[3.5vw] py-[2vw] rounded-xl [box-shadow:-2px_2px_4px_rgba(0,0,0,0.2)] ">
            <div className="flex flex-col gap-[1.5vw] ">
               <h1 className="text-[1.5vw] text-forest-green font-medium">
                  The Suit Room
               </h1>
               <p className="text-[0.95vw] text-forest-green/80">
                  Seamless transaction, personalized <br />
                  insights, and innovative solutions for a <br />
                  smarter tommorow
               </p>
               <div className="flex flex-row items-center gap-[1vw]">
                  {footerIcons.map((icon) => {
                     const IconComponent = iconMap[icon];
                     return (
                        <button
                           key={icon}
                           className="text-forest-green/50 rounded-full p-[0.4vw] border-2 border-forest-green/20"
                        >
                           <IconComponent />
                        </button>
                     );
                  })}
               </div>
               <p className="text-[0.8vw] text-forest-green/50 pt-[2vw]">
                  Copyright © 2025 Rainier Reyes. All Right Reserved
               </p>
            </div>
            <table className="w-[55vw] border-separate border-spacing-x-6 border-spacing-y-2">
               <thead className="">
                  <tr>
                     <td className="text-forest-green font-medium text-[1.2vw]">
                        About
                     </td>
                     <td className="text-forest-green font-medium text-[1.2vw]">
                        Help
                     </td>
                     <td className="text-forest-green font-medium text-[1.2vw]">
                        Menu
                     </td>
                     <td className="text-forest-green font-medium text-[1.2vw]">
                        Company
                     </td>
                  </tr>
               </thead>
               <tbody className="text-[0.9vw] border-4 border-amber-300 text-forest-green/80">
                  <tr>
                     <td>Company</td>
                     <td>Leadership</td>
                     <td>Press</td>
                     <td>Careers</td>
                  </tr>
                  <tr>
                     <td>Help Center</td>
                     <td>Support Team</td>
                     <td>Community</td>
                     <td>FAQs</td>
                  </tr>
                  <tr>
                     <td>Men</td>
                     <td>Women</td>
                     <td>Children</td>
                     <td>Popular</td>
                  </tr>
                  <tr>
                     <td>About Rainier</td>
                     <td>Contact</td>
                     <td>News & Blogs</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </footer>
   );
};

export default Footer;
