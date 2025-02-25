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
  isContainer?: boolean;
}

export function ContentSection({
  title,
  description,
  isRightImage,
  actions,
  imageUrl,
  isContainer = false,
}: ContentSectionProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between w-full h-fit max-h-[33.75rem] gap-20 py-6",
        isContainer && "container"
      )}
    >
      {!isRightImage && (
        <Image
          src={imageUrl}
          alt="Content info"
          width={400}
          height={400}
          className="object-cover"
        />
      )}

      <div className="flex flex-col items-start w-[600px] h-fit gap-6">
        <Typography
          variant={"h2"}
          fontWeight={"bold"}
          textColor={"primary"}
          className="leading-5 dark:text-brand-1"
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
          width={400}
          height={400}
          className="object-cover"
        />
      )}
    </div>
  );
}
