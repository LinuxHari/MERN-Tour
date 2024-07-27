import React from "react";

type TabsProps = {
  children: React.ReactNode;
  className?: string;
};

type TabProps = TabsProps & {
  isActive: boolean;
  onClick: () => void;
};

type TabContentProps = TabsProps & {
  isVisible: boolean;
};

const Tabs = ({ children, className = "" }: TabsProps) => {
  return <div className={`tabs js-tabs ${className}`}>{children}</div>;
};

const TabList = ({ children, className = "" }: TabsProps) => (
  <div className={`tabs__controls js-tabs-controls ${className}`}>
    {children}
  </div>
);

const Tab = ({ children, isActive, onClick, className = "" }: TabProps) => (
  <button
    className={`tabs__button js-tabs-button ${
      isActive ? "is-tab-el-active" : ""
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TabContents = ({ children, className = "" }: TabsProps) => (
  <div className={`tabs__content js-tabs-content ${className}`}>{children}</div>
);

const TabContent = ({
  children,
  isVisible,
  className = "",
}: TabContentProps) => (
  <div
    className={`tabs__pane -tab-item-1 ${
      isVisible ? "is-tab-el-active" : ""
    } ${className}`}
  >
    {children}
  </div>
);

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabContents = TabContents;
Tabs.TabContent = TabContent;

export default Tabs;
