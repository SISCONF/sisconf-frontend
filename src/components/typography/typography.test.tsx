import { TypographyPageObjects } from "./typography.page";

const pageObjects = TypographyPageObjects();

describe("Typography component", () => {
  beforeEach(() => {
    pageObjects.render();
  });

  it("should render component Typography", () => {
    expect(pageObjects.getTypography()).toBeInTheDocument();
  });

  it("must contain Hello World in the value of children", () => {
    expect(pageObjects.getTypography()).toHaveTextContent("Hello World");
  });

  it("should apply correct classes for variant and fontWeight", () => {
    expect(pageObjects.getTypography()).toHaveClass(
      "text-[4rem] font-normal text-[#43A046]"
    );
  });

  it("should apply default variant and fontWeight if not provided", () => {
    const typographyElement = pageObjects.getTypography();
    expect(typographyElement).not.toHaveClass("text-[1.75rem]");
    expect(typographyElement).not.toHaveClass("font-bold");
  });
});
