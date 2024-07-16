import React, { useCallback, useState } from "react";

type TabsProps = {
  children: React.ReactNode;
};

type TabProps = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

type TabContentProps = {
  children: React.ReactNode;
  isVisible?: boolean;
};

type TabListProps = {
  children: React.ReactNode;
  selectedTab?: number;
  handleTabClick?: (index: number) => void;
};

type TabContentsProps = {
  children: React.ReactNode;
  selectedTab?: number;
};

const Tabs = ({ children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = useCallback((index: number) => {
    setSelectedTab(index);
  },[]);

  return (
    <div className="tabsMenu">
      <div className="tabsMenu__container">
        <div className="tabs js-tabs">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              if (child.type === TabList) {
                return React.cloneElement(child, {
                  selectedTab,
                  handleTabClick,
                } as TabListProps);
              } else if (child.type === TabContents) {
                return React.cloneElement(child, {
                  selectedTab,
                } as TabContentsProps);
              }
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
};

const TabList = ({ children, selectedTab, handleTabClick }: TabListProps) => {
  return (
    <div className="tabsMenu__tabs">
      <div className="tabs__controls js-tabs-controls">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              isActive: selectedTab === index,
              onClick: () => handleTabClick && handleTabClick(index),
            } as TabProps);
          }
          return child;
        })}
      </div>
    </div>
  );
};

const Tab = ({ children, isActive, onClick }: TabProps) => {
  return (
    <button
      className={`tabs__button js-tabs-button ${isActive ? "is-tab-el-active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const TabContents = ({ children, selectedTab }: TabContentsProps) => {
  return (
    <div className="tabsMenu__content">
      <div className="tabs__content js-tabs-content">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              isVisible: selectedTab === index,
            } as TabContentProps);
          }
          return child;
        })}
      </div>
    </div>
  );
};

const TabContent = ({ children, isVisible }: TabContentProps) => {
  return (
    <div className={`tabs__pane -tab-item-1 ${ isVisible ? "is-tab-el-active" : ""} `}>
      {children}
    </div>
  );
};

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabContents = TabContents;
Tabs.TabContent = TabContent;

export default Tabs;
