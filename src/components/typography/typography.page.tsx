import { renderPageObjects } from "@/test-utils";
import { screen } from "@testing-library/react";

import { Typography, TypographyGroupProps } from ".";

export const initialProps: TypographyGroupProps = {
  title: "Hello World",
  children: "Hello World",
  variant: "h1",
  fontWeight: "bold",
};

const TYPOGRAPHY_CONTAINER_TEST_ID = "typography-container";

export const TypographyPageObjects = () => {
  const render = (props = initialProps) => {
    return renderPageObjects({
      component: <Typography {...props} />,
    });
  };

  const getTypography = () => screen.getByTestId(TYPOGRAPHY_CONTAINER_TEST_ID);

  return {
    render,
    getTypography,
  };
};
