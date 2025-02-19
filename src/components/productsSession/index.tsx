// Components
import SearchProductAndContact from "../searchProductAndContact";
import ProductCard from "../productCard";

// Images
import FoodPlaceholder from "/public/assets/food-placeholder.jpg";

export default function ProductsSession() {
  return (
    <div className="w-[860px]">
      <div>The tabs stay here</div>
      <section>
        <SearchProductAndContact />
        <div className="py-[1rem] border border-black flex flex-wrap gap-[0.38rem]">
          <ProductCard image={FoodPlaceholder} name="Morango" price={12.0} />
          <ProductCard image={FoodPlaceholder} name="Morango" price={12.0} />
          <ProductCard image={FoodPlaceholder} name="Morango" price={12.0} />
          <ProductCard image={FoodPlaceholder} name="Morango" price={12.0} />
          <ProductCard image={FoodPlaceholder} name="Morango" price={12.0} />
          <ProductCard image={FoodPlaceholder} name="Morango" price={12.0} />
          <ProductCard image={FoodPlaceholder} name="Morango" price={12.0} />
          <ProductCard image={FoodPlaceholder} name="Morango" price={12.0} />
          <ProductCard image={FoodPlaceholder} name="Morango" price={12.0} />
        </div>
      </section>
    </div>
  );
}
