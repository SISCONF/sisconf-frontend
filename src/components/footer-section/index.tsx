import { Typography } from "../typography";
import Link from "next/link";

type FooterSectionProps = {
  title: string;
  sectionList: { text: string; link: string }[];
};

export default function FooterSection({
  title,
  sectionList,
}: FooterSectionProps) {
  return (
    <div className="flex flex-col gap-[1rem]">
      <Typography
        variant="h3"
        className="font-bold text-[1.125rem] dark:text-brand-3"
      >
        {title}
      </Typography>
      {sectionList.map((sectionItem) => (
        <Link
          key={sectionItem.text}
          href={sectionItem.link}
          className="text-gray-500 dark:text-white"
        >
          {sectionItem.text}
        </Link>
      ))}
    </div>
  );
}
