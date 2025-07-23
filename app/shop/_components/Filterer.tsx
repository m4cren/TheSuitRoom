import { ReactNode } from "react";

interface Props {
   label: string;
   children: ReactNode;
}

const Filterer = ({ label, children }: Props) => {
   return (
      <div className="text-[#2c2c2c] flex flex-col gap-2">
         <h1 className="text-[1.3vw] font-medium">{label}</h1>
         <ul>{children}</ul>
      </div>
   );
};

export default Filterer;
