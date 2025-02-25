import { Button } from "@/components/ui/button";
import { ContentSection } from "@/components/content-section";

const CONTENT_SECTIONS = [
  {
    title: "Quem somos?",
    description:
      "A empresa RJ Frutas e Legumes tem como propósito oferecer produtos de alta qualidade aos nossos clientes, assim como pontualidade na entrega. Proporcionamos para vocês uma equipe de profissionais qualificados e treinados, visando um melhor atendimento.",
    isRightImage: true,
    imageUrl: "/assets/logo.png",
  },
  {
    title: "Por que nos escolher?",
    description:
      "Além de oferecermos o melhor preço da região, também buscamos por produtos de alto padrão, a começar na seleção a dedo de cada item. Com uma logística impecável, garantimos que nossas mercadorias cheguem à sua mesa nas melhores condições para um consumo saudável. Dessa forma, não apenas entregamos alimentos, mas sim qualidade elevada, a qual, portanto, justifica o seu destaque dentre as demais opções no mercado.",
    isRightImage: false,
    imageUrl: "/assets/fruit-2.svg",
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
          isContainer
        />
      ))}
    </>
  );
}
