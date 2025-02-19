import userEvent from "@testing-library/user-event";
import { ComponentTabsPageObjects, initialProps } from "./tabs.page";
import { TABS_LIST } from "@/app/(main)/content";

const pageObjects = ComponentTabsPageObjects();

describe("ComponentTabs", () => {
  beforeEach(() => {
    pageObjects.render();
  });

  it("should render the component with the correct tabs", () => {
    expect(pageObjects.getTabsGroup()).toBeInTheDocument();
    expect(pageObjects.getTabValue()).toHaveLength(initialProps.tabList.length);
  });

  it("should render all tab options", () => {
    expect(pageObjects.getTabValue()).toHaveLength(initialProps.tabList.length);
  });

  it("should change active tab when clicked", async () => {
    const user = userEvent.setup();

    const tabOptions = pageObjects.getTabValue();

    await user.click(tabOptions[1]);

    expect(initialProps.onTabChange).toHaveBeenCalledTimes(1);
    expect(initialProps.onTabChange).toHaveBeenCalledWith(TABS_LIST[1].id);
  });

  it("should apply active styles to the selected tab", async () => {
    const user = userEvent.setup();
    const tabOptions = pageObjects.getTabValue();

    await user.click(tabOptions[1]);

    expect(tabOptions[1]).toHaveAttribute("data-state", "active");
    expect(tabOptions[0]).toHaveAttribute("data-state", "inactive");
  });

  it("should ensure only one tab is active at a time", async () => {
    const user = userEvent.setup();
    const tabOptions = pageObjects.getTabValue();

    for (let i = 0; i < tabOptions.length; i++) {
      await user.click(tabOptions[i]);

      tabOptions.forEach((tab, index) => {
        if (index === i) {
          expect(tab).toHaveAttribute("data-state", "active");
        } else {
          expect(tab).toHaveAttribute("data-state", "inactive");
        }
      });
    }
  });
});
