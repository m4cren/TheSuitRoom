import {
   Facebook,
   Instagram,
   LucideIcon,
   Twitter,
   Youtube,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
   facebook: Facebook,
   youtube: Youtube,
   instagram: Instagram,
   twitter: Twitter,
};

const footerIcons = ["facebook", "youtube", "instagram", "twitter"];

const Footer = () => {
   return (
      <footer className="md:px-[6vw] lg:px-[3.5vw] mb-[3.5vw]">
         <div className="flex flex-row items-center justify-between px-[3.5vw] md:py-[4vw] lg:py-[2vw] rounded-xl [box-shadow:-2px_2px_4px_rgba(0,0,0,0.2)] ">
            <div className="flex flex-col gap-[1.5vw] ">
               <h1 className="md:text-[2.vw] lg:text-[1.5vw] text-forest-green font-medium">
                  The Suit Room
               </h1>
               <p className="md:text-[1.45vw] lg:text-[0.95vw] text-forest-green/80">
                  Seamless transaction, personalized <br />
                  insights, and innovative solutions for a <br />
                  smarter tommorow
               </p>
               <div className="flex flex-row items-center md:gap-[1.5vw] lg:gap-[1vw]">
                  {footerIcons.map((icon) => {
                     const IconComponent = iconMap[icon];
                     return (
                        <button
                           key={icon}
                           className="text-forest-green/50 rounded-full md:scale-80 lg:scale-100 p-[0.8vw] lg:p-[0.4vw] border-2 border-forest-green/20"
                        >
                           <IconComponent />
                        </button>
                     );
                  })}
               </div>
               <p className="md:text-[1.3vw] lg:text-[0.8vw] text-forest-green/50 pt-[2vw]">
                  Copyright © 2025 Rainier Reyes. All Right Reserved
               </p>
            </div>
            <table className="md:w-[35vw] lg:w-[55vw] border-separate border-spacing-x-6 border-spacing-y-2">
               <thead className="text-forest-green font-medium md:text-[2vw] lg:text-[1.2vw]">
                  <tr>
                     <td>About</td>
                     <td>Help</td>
                     <td className="hidden lg:table-cell">Menu</td>
                     <td className="hidden lg:table-cell">Company</td>
                  </tr>
               </thead>
               <tbody className="md:text-[1.4vw] lg:text-[0.9vw] text-forest-green/80">
                  <tr>
                     <td>Company</td>
                     <td>Leadership</td>
                     <td className="hidden lg:table-cell">Press</td>
                     <td className="hidden lg:table-cell">Careers</td>
                  </tr>
                  <tr>
                     <td>Help Center</td>
                     <td>Support Team</td>
                     <td className="hidden lg:table-cell">Community</td>
                     <td className="hidden lg:table-cell">FAQs</td>
                  </tr>
                  <tr>
                     <td>Men</td>
                     <td>Women</td>
                     <td className="hidden lg:table-cell">Children</td>
                     <td className="hidden lg:table-cell">Popular</td>
                  </tr>
                  <tr>
                     <td>About Rainier</td>
                     <td>Contact</td>
                     <td className="hidden lg:table-cell">News & Blogs</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </footer>
   );
};

export default Footer;
