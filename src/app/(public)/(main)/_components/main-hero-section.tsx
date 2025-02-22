import { ContentSection } from "@/components/content-section";
import { Button } from "@/components/ui/button";

export function MainHeroSection() {
  return (
    <ContentSection
      title="RJ Frutas&Verduras"
      description="A maior distribuidora de hortifruti do Altoeste Potiguar! Receba frutas e legumes selecionados com cuidado para você e surpreenda-se com a frescura, o sabor e a qualidade incomparável."
      isRightImage={true}
      actions={
        <Button className="w-[150px] h-11 bg-brand-3 hover:bg-brand-5">
          Faça seu pedido
        </Button>
      }
      imageUrl={"./assets/hero-image.svg"}
    />
  );
}
