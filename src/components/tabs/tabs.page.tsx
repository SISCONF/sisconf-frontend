import { renderPageObjects } from "@/test-utils";
import { screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import { ComponentTabs, ComponentTabsProps } from ".";
import { TABS_LIST } from "@/app/(public)/(main)/content";

const TABS_GROUP_CONTAINER_TEST_ID = "tabs-group-container";
const TABS_GROUP_OPTION_VALUE_TEST_ID = "tab-option-value";

export const initialProps: ComponentTabsProps = {
  tabList: TABS_LIST,
  defaultValue: "frutas",
  onTabChange: jest.fn(),
};

export const ComponentTabsPageObjects = () => {
  const render = (props = initialProps) => {
    return renderPageObjects({
      component: <ComponentTabs {...props} />,
    });
  };

  const getTabsGroup = () => screen.getByTestId(TABS_GROUP_CONTAINER_TEST_ID);

  const getTabValue = () =>
    screen.getAllByTestId(TABS_GROUP_OPTION_VALUE_TEST_ID);

  return {
    render,
    getTabsGroup,
    getTabValue,
  };
};
