import ProductCard from "./ProductCard";

const products = {
   suits: {
      business_suits: [
         {
            label: "Carbon Cut",
            value: "carbon_cut",
            img: "carbon_cut",
            price: 54.99,
            old_price: 89.79,
            category: "Business Suit",
         },
         {
            label: "Crimson Command",
            value: "crimson_command",
            img: "crimson_command",
            price: 54.99,
            old_price: 89.79,
            category: "Business Suit",
         },
         {
            label: "Oxford Navy",
            value: "oxford_navy",
            img: "oxford_navy",
            price: 44.99,
            old_price: 79.79,
            category: "Business Suit",
         },
         {
            label: "Regent Blue",
            value: "regent_blue",
            img: "regent_blue",
            price: 64.99,
            old_price: 79.79,
            category: "Business Suit",
         },
         {
            label: "Savile Cut",
            value: "savile_cut",
            img: "savile_cut",
            price: 64.99,
            old_price: 79.79,
            category: "Business Suit",
         },
         {
            label: "Windsor Gray",
            value: "windsor_gray",
            img: "windsor_gray",
            price: 64.99,
            old_price: 79.79,
            category: "Business Suit",
         },
      ],
   },
};

const ProductList = () => {
   return (
      <ul className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
         {products.suits["business_suits"].map(
            ({ category, img, label, old_price, price, value }) => (
               <ProductCard
                  key={value}
                  category={category}
                  img={img}
                  label={label}
                  price={price}
                  old_price={old_price}
               />
            ),
         )}
      </ul>
   );
};

export default ProductList;
