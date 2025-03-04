import { CardInfo } from "@/components/card-info";
import { Typography } from "@/components/typography";

const MAIN_BENEFITS = [
  {
    id: 1,
    name: "VARIEDADE",
    description:
      "Temos todos os tipos de frutas e legumes selecionados direto do mercado do produtor.",
  },
  {
    id: 2,
    name: "PONTUALIDADE",
    description:
      "Possuímos veículos próprios e entregadores treinados, garantindo a pontualidade das entregas.",
  },
  {
    id: 3,
    name: "PREÇO ACESSÍVEL",
    description:
      "Com nosso abastecimento semanal e fornecedores de primeira linha, temos condições de oferecer os melhores valores.",
  },
];

export function MainBenefits() {
  return (
    <div className="flex flex-col items-center gap-10">
      <Typography
        variant={"h2"}
        fontWeight={"bold"}
        textColor={"primary"}
        className="dark:text-brand-1"
      >
        BENEFÍCIOS DE COMPRAR CONOSCO
      </Typography>
      <div className="flex items-center w-fit gap-10">
        {MAIN_BENEFITS.map((item) => (
          <CardInfo
            key={item.id}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
