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
      <Typography variant="h3" className="font-bold text-[1.125rem]">
        {title}
      </Typography>
      {sectionList.map((sectionItem) => (
        <Link href={sectionItem.link} className="text-gray-500">
          {sectionItem.text}
        </Link>
      ))}
    </div>
  );
}
