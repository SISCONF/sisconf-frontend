import Image from "next/image";
import { Typography } from "../typography";
import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  title: string;
  description: string;
  isRightImage?: boolean;
  imageUrl: string;
  actions?: ReactNode;
}

export function ContentSection({
  title,
  description,
  isRightImage,
  actions,
  imageUrl,
}: ContentSectionProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between w-full h-fit max-h-[33.75rem] gap-20 py-6"
      )}
    >
      {!isRightImage && (
        <Image
          src={imageUrl}
          alt="Content info"
          width={500}
          height={500}
          className="object-cover"
        />
      )}

      <div className="flex flex-col items-start w-[600px] h-fit gap-6">
        <Typography
          variant={"h2"}
          fontWeight={"bold"}
          textColor={"primary"}
          className="leading-5"
        >
          {title}
        </Typography>

        <Typography variant={"h6"} className="text-[#6B7280]">
          {description}
        </Typography>

        {actions}
      </div>

      {isRightImage && (
        <Image
          src={imageUrl}
          alt="Circular arrangement of fruits and vegetables"
          width={500}
          height={500}
          className="object-cover"
        />
      )}
    </div>
  );
}
