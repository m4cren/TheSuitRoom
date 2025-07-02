import CategorySection from "./components/CategoryList/CategorySection";
import Landing from "./components/Landing/Landing";
import ModelSection from "./components/ModelSection/ModelSection";

export default function Home() {
   return (
      <main>
         <Landing />
         <ModelSection />
         <CategorySection />
      </main>
   );
}
