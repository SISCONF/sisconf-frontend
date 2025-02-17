"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "../typography";
import { ReactNode } from "react";

interface CardConainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function CardConainer({
  children,
  title,
  description,
}: CardConainerProps) {
  return (
    <Card className="flex flex-col items-center justify-center w-[35.62rem] h-[33.12rem] bg-background border-none shadow-lg">
      <CardHeader className="text-center gap-1">
        <CardTitle>
          <Typography variant="h3" fontWeight={"bold"}>
            {title}
          </Typography>
        </CardTitle>
        <CardDescription>
          <Typography
            variant={"body2"}
            className="text-[#757575] text-[0.75rem]"
          >
            {description}
          </Typography>
        </CardDescription>
      </CardHeader>
      <CardContent className="w-[23.75rem] h-fit">{children}</CardContent>
    </Card>
  );
}
