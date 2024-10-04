import React from "react";
import Accordion from "../Shared/Accordion/Accordion";
import Input from "../Shared/Input/Input";

type Props = {
  title: string;
  filter: string[] | { count: number; label: string }[];
  appliedFilterValue?: string[] | number;
  setAppliedFilters: (key: string, value: string, checked?: boolean) => void;
  index: number
};

const CheckboxRadioFilters = ({ title, filter, appliedFilterValue, setAppliedFilters, index }: Props) => {
  const keyToTile = (key: string) => {
    return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
  }

  return (
    <div className="sidebar__item">
        <Accordion.Item index={index}>
          <Accordion.Button isShowIcon={true}>
            <h5 className="text-18 fw-500">{keyToTile(title)}</h5>
          </Accordion.Button>
          <Accordion.Content index={index}>
            <div className="pt-15">
              <div className="d-flex flex-column y-gap-15">
                {filter.map((value, index) =>
                  typeof value === "object" ? (
                    <div key={index}>
                      <Input
                        type="radio"
                        name={title}
                        label={value.label}
                        value={value.count}
                        onChange={(e) => setAppliedFilters(title, e.currentTarget.value)}
                        checked={value.count == appliedFilterValue}
                      />
                    </div>
                  ) : (
                    <div key={index}>
                      <Input
                        type="checkbox"
                        label={value}
                        value={value}
                        onChange={(e) => setAppliedFilters(title, e.currentTarget.value, e.target.checked)}
                        
                        checked={
                          appliedFilterValue && typeof appliedFilterValue === "object"
                            ? appliedFilterValue.includes(value as string)
                            : false
                        }
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
    </div>
  );
};

const MemoizedCheckboxRadioFilters = React.memo(CheckboxRadioFilters);

export default MemoizedCheckboxRadioFilters;
