// Components
import SearchProductAndContact from "../searchProductAndContact";
import ProductCard from "../productCard";

// Images
import FoodPlaceholder from "/public/assets/food-placeholder.jpg";

export default function ProductsSession() {
  return (
    <div className="w-[820px]">
      <div>The tabs stay here</div>
      <section>
        <SearchProductAndContact />
        <div className="py-[1rem] border border-black flex flex-wrap gap-[0.38rem]">
          <ProductCard image={FoodPlaceholder} name="Maçã" price={4.99} />
          <ProductCard image={FoodPlaceholder} name="Maçã" price={4.99} />
          <ProductCard image={FoodPlaceholder} name="Maçã" price={4.99} />
          <ProductCard image={FoodPlaceholder} name="Maçã" price={4.99} />
          <ProductCard image={FoodPlaceholder} name="Maçã" price={4.99} />
          <ProductCard image={FoodPlaceholder} name="Maçã" price={4.99} />
        </div>
      </section>
    </div>
  );
}
