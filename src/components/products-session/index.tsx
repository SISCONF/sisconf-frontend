// Components
import SearchProductAndContact from "../search-product-and-contact";
import ProductCard from "../product-card";
import PaginationButtons from "../pagination-buttons";

// Images
import FoodPlaceholder from "/public/assets/food-placeholder.jpg";

export default function ProductsSession() {
  return (
    <div className="w-[860px]">
      <div>The tabs stay here</div>
      <section>
        <SearchProductAndContact />
        <div className="py-[1rem] flex flex-wrap gap-[4.32rem]">
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
        <PaginationButtons />
      </section>
    </div>
  );
}
