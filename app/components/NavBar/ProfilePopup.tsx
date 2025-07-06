import { XIcon } from "lucide-react";

const ProfilePopup = ({
   email,
   logout,
   setIsPopup,
}: {
   email: string | undefined | null;
   logout: () => void;
   setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
   return (
      <div className="absolute rounded-md md:rounded-xl [box-shadow:-2px_2px_4px_rgba(0,0,0,0.2)] right-[2%] top-[50%] p-[4vw] md:p-[2.5vw] flex flex-col gap-[2vw] bg-mint-green w-[50vw] md:w-[30vw] z-10">
         <button
            onClick={() => setIsPopup(false)}
            className="absolute top-1 right-1 md:top-2  md:right-2 cursor-pointer"
         >
            <XIcon className="scale-50 md:scale-80 lg:scale-100" />
         </button>
         <h1 className="text-[2.5vw] md:text-[1vw]">{email}</h1>
         <p
            className="cursor-pointer text-[2.5vw] md:text-[1vw]"
            onClick={() => {
               logout();
               setIsPopup(false);
            }}
         >
            Logout
         </p>
      </div>
   );
};

export default ProfilePopup;
