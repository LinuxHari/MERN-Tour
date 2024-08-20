import React, { useState } from "react";
import { TabContext, useTabContext } from "../../../context/TabContext";

type TabsProps = {
  children: React.ReactNode;
  className?: string;
};

type TabProps = TabsProps & {
  index: number;
};

const Tabs = ({ children, className = "" }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (index: number) => setActiveIndex(index);

  return (
    <TabContext.Provider
      value={{ activeTab: activeIndex, setActiveTab: handleTabChange }}
    >
      <div className={`tabs js-tabs ${className}`}>{children}</div>
    </TabContext.Provider>
  );
};

const TabList = ({ children, className = "" }: TabsProps) => (
  <div className={`tabs__controls js-tabs-controls ${className}`}>
    {children}
  </div>
);

const Tab = ({ children, className = "", index }: TabProps) => {
  const { activeTab, setActiveTab } = useTabContext();
  const isActive = index === activeTab;

  return (
    <button
      className={`tabs__button js-tabs-button ${
        isActive ? "is-tab-el-active" : ""
      } ${className}`}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </button>
  );
};

const TabContents = ({ children, className = "" }: TabsProps) => (
  <div className={`tabs__content js-tabs-content ${className}`}>{children}</div>
);

const TabContent = ({ children, className = "", index }: TabProps) => {
  const { activeTab } = useTabContext();

  const isVisible = index === activeTab;

  return (
    <div
      className={`tabs__pane -tab-item-1 ${
        isVisible ? "is-tab-el-active" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabContents = TabContents;
Tabs.TabContent = TabContent;

export default Tabs;
