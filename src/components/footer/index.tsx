import FooterSection from "../footer-section";
import { Typography } from "../typography";
import Image from "next/image";
import Link from "next/link";

import InstagramIcon from "/public/icons/instagram.svg";
import FacebookIcon from "/public/icons/facebook.svg";
import XIcon from "/public/icons/x.svg";

const linksSection = [
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

const socialMediaLinks = [
  {
    image: InstagramIcon,
    alt: "a black-outline camera icon from instagram",
    link: "instagram.com/rj-frutas-verduras",
  },
  {
    image: FacebookIcon,
    alt: "a F letter inside a black circle from facebook",
    link: "facebook.com/rj-frutas-verduras",
  },
  {
    image: XIcon,
    alt: "X letter icon from X social media",
    link: "x.com/frutas-e-verduras-rj",
  },
];

export default function Footer() {
  return (
    <footer className="border border-black flex flex-col w-full py-[4.25rem] px-[4.5rem] gap-[2rem]">
      <div className="flex justify-between">
        {linksSection.map((data) => (
          <FooterSection
            key={data.title}
            title={data.title}
            sectionList={data.sectionList}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-[1rem]">
        <Typography
          variant="h3"
          fontWeight="extrabold"
          className="text-[1.5rem]"
        >
          RJ Frutas<span className="text-[#237D31]">&amp;</span>Verduras
        </Typography>
        <span className="text-gray-500">
          &copy; 2025 RJ Frutas&Verduras. Todos os direitos reservados
        </span>
        <div className="flex gap-[1rem]">
          {socialMediaLinks.map((socialMedia) => (
            <Link key={socialMedia.alt} href={socialMedia.link}>
              <Image
                width={25}
                height={25}
                src={socialMedia.image}
                alt={socialMedia.alt}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
