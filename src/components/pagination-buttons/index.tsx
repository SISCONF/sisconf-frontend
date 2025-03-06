import PageNavigationButton from "../page-navigation-button";

export default function PaginationButtons() {
  return (
    <div className="text-[#434343] flex justify-end items-center py-2 gap-[0.3125rem]">
      <span className="pr-[0.5625rem] font-bold">Página 1 de 10</span>
      <PageNavigationButton batch="previous" />
      <PageNavigationButton batch="next" />
    </div>
  );
}
