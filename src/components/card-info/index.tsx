import Image from "next/image";
import { Typography } from "../typography";

interface CardInfoProps {
  name: string;
  description: string;
}

export function CardInfo({ name, description }: CardInfoProps) {
  return (
    <div className="flex flex-col items-center w-[18.75rem] h-fit p-2 gap-6">
      <Image
        src="./assets/icon.svg"
        alt="icone do card"
        width={60}
        height={60}
      />

      <div className="flex flex-col w-full h-fit gap-6 text-center">
        <Typography
          variant={"h5"}
          fontWeight={"bold"}
          textColor={"primary"}
          className="line-clamp-1 dark:text-brand-1"
        >
          {name}
        </Typography>
        <Typography variant={"body1"} className="leading-5">
          {description}
        </Typography>
      </div>
    </div>
  );
}
