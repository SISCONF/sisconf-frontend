import { CardInfo } from "@/components/card-info";

const MAIN_BENEFITS = [
  {
    id: 1,
    name: "VARIEDADES",
    description:
      "Temos todos os tipos de frutas, verduras e legumes selecionados direto do mercado do produtor.",
  },
  {
    id: 2,
    name: "TRANSPORTE EXCLUSIVO",
    description:
      "Possuímos veículos próprios e entregadores treinados, garantindo a pontualidade das entregas.",
  },
  {
    id: 3,
    name: "PREÇO ACESSÍVEL",
    description:
      "Com nosso abastecimento semanal, temos condições de oferecer os melhores valores.",
  },
];

export function MainBenefits() {
  return (
    <div className="flex items-center w-fit gap-4">
      {MAIN_BENEFITS.map((item) => (
        <CardInfo
          key={item.id}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
}
