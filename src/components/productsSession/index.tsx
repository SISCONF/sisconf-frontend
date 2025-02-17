// Componentes
import SearchProductAndContact from "../searchProductAndContact";

export default function ProductsSession() {
  return (
    <div className="w-[820px]">
      <div>The tabs stay here</div>
      <section>
        <SearchProductAndContact />
        <div className="py-[1rem] border border-black flex flex-wrap items-start gap-[0.9rem]"></div>
      </section>
    </div>
  );
}
