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
import { cn } from "@/lib/utils";

interface CardConainerProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export function CardConainer({
  children,
  title,
  className,
  description,
}: CardConainerProps) {
  return (
    <Card className="flex flex-col items-center justify-center w-[35.62rem] min-h-[33.12rem] bg-background border-none shadow-lg">
      <CardHeader className="text-center gap-1">
        <CardTitle>
          <Typography variant="h3" fontWeight={"bold"}>
            {title}
          </Typography>
        </CardTitle>
        <CardDescription>
          <Typography variant={"body2"} className="text-[#757575]">
            {description}
          </Typography>
        </CardDescription>
      </CardHeader>

      <CardContent className={cn(["w-[23.75rem] h-fit", className])}>
        {children}
      </CardContent>
    </Card>
  );
}
