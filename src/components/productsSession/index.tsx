// Componentes
import SearchProductAndContact from "../searchProductAndContact";
import ProductCard from "../productCard";

export default function ProductsSession() {
  return (
    <div className="border border-black w-full">
      <div className="border border-black">The tabs stay here</div>
      <section>
        <SearchProductAndContact />
        <div>
          <ProductCard />
        </div>
      </section>
    </div>
  );
}
