import { cva } from "class-variance-authority";

export const typographyVariants = cva("dark:text-foreground teleading-4", {
  variants: {
    variant: {
      h1: "text-[4rem]",
      h2: "text-[2.75rem]",
      h3: "text-[2rem]",
      h4: "text-[1.75rem]",
      h5: "text-[1.5rem]",
      h6: "text-[1.25rem]",
      body1: "text-[1.12rem]",
      body2: "text-[1rem]",
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
    textColor: {
      white: "text-[#ffffff]",
      black: "text-[#000000]",
      primary: "text-[#43A046]",
      secondary: "text-[#263238]",
    },
  },
  defaultVariants: {
    variant: "h4",
    fontWeight: "regular",
    textColor: "black",
  },
});
