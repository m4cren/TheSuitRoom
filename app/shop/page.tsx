import ProductList from "./_components/ProductList";
import SearchBar from "./_components/SearchBar";
import SideBar from "./_components/SideBar";

const page = () => {
   return (
      <main className="grid grid-cols-[20vw_1fr] h-fit px-[3.5vw] my-[2vw]">
         <SideBar />
         <div>
            <div>
               <SearchBar />
            </div>
            <ProductList />
         </div>
      </main>
   );
};

export default page;
