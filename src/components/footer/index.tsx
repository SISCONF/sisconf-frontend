import FooterSection from "../footer-section";

const dummyData = [
  {
    title: "Empresa",
    sectionList: [
      {
        text: "Sobre Nós",
        link: "/about",
      },
      {
        text: "Premium",
        link: "/premium",
      },
      {
        text: "Blog",
        link: "/blog",
      },
      {
        text: "Programa de Afiliação",
        link: "/affilliate-program",
      },
      {
        text: "Ganhe Cupons",
        link: "/get-coupon",
      },
    ],
  },
  {
    title: "Ajuda e Suporte",
    sectionList: [
      {
        text: "Contate-nos",
        link: "/contact",
      },
      {
        text: "FAQ",
        link: "/faq",
      },
      {
        text: "Patrocínio",
        link: "/sponsorship",
      },
    ],
  },
  {
    title: "Recursos",
    sectionList: [
      {
        text: "Ferramentas de Terceiros",
        link: "/third-party-tools",
      },
      {
        text: "Ilustrações",
        link: "/illustrations",
      },
      {
        text: "Themesberg",
        link: "/themersberg",
      },
      {
        text: "Bluehost",
        link: "/bluehost",
      },
    ],
  },
  {
    title: "Legal",
    sectionList: [
      {
        text: "Políticas de Privacidade",
        link: "/privacy-policies",
      },
      {
        text: "Termos e Condições",
        link: "/terms-and-conditions",
      },
      {
        text: "EULA",
        link: "/eula",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border border-black flex flex-col w-full py-[4.25rem] px-[4.5rem]">
      <div className="flex justify-between">
        {dummyData.map((data) => (
          <FooterSection title={data.title} sectionList={data.sectionList} />
        ))}
      </div>
      <div>area 2</div>
    </footer>
  );
}
