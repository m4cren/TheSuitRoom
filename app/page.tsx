import CategorySection from "./components/CategoryList/CategorySection";
import DiscountSection from "./components/DiscountSection/DiscountSection";
import FeaturedSection from "./components/FeaturedCollections/FeaturedSection";
import Landing from "./components/Landing/Landing";
import ModelSection from "./components/ModelSection/ModelSection";
import ProductSection from "./components/products/ProductSection";

export default function Home() {
   return (
      <main>
         <Landing />
         <ModelSection />
         <CategorySection />
         <ProductSection />
         <DiscountSection />
         <FeaturedSection />
      </main>
   );
}
