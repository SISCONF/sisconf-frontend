import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

type PageNavigationButtonProps = {
  batch: "next" | "previous";
};

export default function PageNavigationButton({
  batch,
}: PageNavigationButtonProps) {
  return (
    <button className="p-[0.4375rem] rounded-full flex justify-center items-center shadow-lg">
      {batch === "next" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </button>
  );
}
