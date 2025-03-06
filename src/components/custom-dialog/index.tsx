import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type CustomDialog = {
  triggeringComponent: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
};

export function CustomDialog({
  triggeringComponent,
  title,
  description,
  children,
}: CustomDialog) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggeringComponent}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
