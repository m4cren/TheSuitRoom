import { ReactNode } from "react";

interface Props {
   label: string;
   children: ReactNode;
}

const FiltererTablet = ({ children, label }: Props) => {
   return (
      <div className="flex flex-col gap-2 md:gap-4">
         <h1 className="text-[4.5vw] md:text-[2.5vw] font-medium">{label}</h1>
         <ul className="flex flex-row flex-wrap gap-1 md:gap-2 max-w-[100%] md:max-w-[85%]">
            {children}
         </ul>
      </div>
   );
};

export default FiltererTablet;
