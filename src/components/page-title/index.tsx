"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Typography } from "../typography";

interface PageTitleProps {
  icon?: React.ReactNode;
  text: string;
}

export function PageTitle({ icon, text }: PageTitleProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="flex items-center bg-transparent hover:bg-transparent gap-2 text-[#237D31] mb-12"
    >
      {icon}

      <Typography
        variant={"h2"}
        textColor={"primary"}
        className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0"
      >
        {text}
      </Typography>
    </Button>
  );
}
