import { ReactNode } from "react";

interface Props {
   label: string;
   children: ReactNode;
}

const FiltererTablet = ({ children, label }: Props) => {
   return (
      <div className="flex flex-col gap-4">
         <h1 className="text-[2.5vw] font-medium">{label}</h1>
         <ul className="flex flex-row flex-wrap gap-2 max-w-[85%]">
            {children}
         </ul>
      </div>
   );
};

export default FiltererTablet;
