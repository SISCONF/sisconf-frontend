import { ContentSection } from "@/components/content-section";
import { Button } from "@/components/ui/button";

export function MainHeroSection() {
  return (
    <ContentSection
      title="RJ Frutas e Legumes"
      description="Somos a maior distribuidora de hortifruti do Altoeste Potiguar. Receba nossos produtos naturais selecionados com cuidado para você e surpreenda-se com a qualidade e variedade incomparável."
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
