import { Button } from "@/components/ui/button";
import { ContentSection } from "@/components/content-section";

const CONTENT_SECTIONS = [
  {
    title: "Quem somos?",
    description:
      "A RJ Frutas&Verduras é uma empresa comprometida em oferecer produtos frescos e de alta qualidade aos nossos clientes. Para garantir a alta qualidade de nossas mercadorias, pontualidade na entrega e a máxima experiência de atendimento para nossos clientes, contamos com uma equipe de profissionais qualificados e treinados.",
    isRightImage: true,
    imageUrl: "./assets/image-content.svg",
  },
  {
    title: "Por que nos escolher?",
    description:
      "Nossa busca pela qualidade começa na origem de cada fruta e vegetal. Com uma logística impecável, garantimos que cada item chegue à sua mesa fresco e em sua melhor forma. Dessa forma, não apenas entregamos alimentos, mas sim um padrão elevado de frescor que faz a diferença em sua vida cotidiana.",
    isRightImage: false,
    imageUrl: "./assets/image-content.svg",
  },
];

export function MainContentSections() {
  return (
    <>
      {CONTENT_SECTIONS.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          description={section.description}
          isRightImage={section.isRightImage}
          actions={
            <Button className="w-[150px] h-11 bg-brand-3 hover:bg-brand-5 text-white">
              Saiba mais
            </Button>
          }
          imageUrl={section.imageUrl}
        />
      ))}
    </>
  );
}
