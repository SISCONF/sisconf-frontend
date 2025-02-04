import { cva } from "class-variance-authority";

export const typographyVariants = cva("text-foreground teleading-4", {
  variants: {
    variant: {
      h1: "text-[64px]",
      h2: "text-[44px]",
      h3: "text-[36px]",
      h4: "text-[28px]",
      h5: "text-[24px]",
      h6: "text-[20px]",
      body1: "text-[18px]",
      body2: "text-[16px]",
    },
    fontWeight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    colorText: {
      white: "text-[#ffffff]",
      black: "text-[#000000]",
      primary: "text-[#43A046]",
      secondary: "text-[#263238]",
    },
  },
  defaultVariants: {
    variant: "h4",
    fontWeight: "regular",
    colorText: "black",
  },
});
