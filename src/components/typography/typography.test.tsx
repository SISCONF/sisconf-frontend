import { TypographyPageObjects } from "./typography.page";

const pageObjects = TypographyPageObjects();

describe("Typography component", () => {
  beforeEach(() => {
    pageObjects.render({
      children: "Hello World",
      variant: "h1",
      fontWeight: "regular",
    });
  });

  it("should render component Typography", () => {
    expect(pageObjects.getTypography()).toBeInTheDocument();
  });

  it("must contain Hello World in the value of children", () => {
    expect(pageObjects.getTypography()).toHaveTextContent("Hello World");
  });

  it("should apply correct classes for variant and fontWeight", () => {
    expect(pageObjects.getTypography()).toHaveClass("text-[64px] font-normal");
  });

  it("should apply default variant and fontWeight if not provided", () => {
    const typographyElement = pageObjects.getTypography();
    expect(typographyElement).not.toHaveClass("text-[28px]");
    expect(typographyElement).not.toHaveClass("font-bold");
  });
});
