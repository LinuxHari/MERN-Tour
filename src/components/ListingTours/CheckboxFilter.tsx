import React from "react";
import Accordion from "../Shared/Accordion/Accordion";
import Input from "../Shared/Input/Input";

type Props = {
  title: string
  filters: string[]
}

const CheckboxFilter = ({title, filters}: Props) => {

  return (
    <div className="sidebar__item">
      <Accordion>
        <Accordion.Item>
          <Accordion.Button isShowIcon={true}>
            <h5 className="text-18 fw-500">{title}</h5>
          </Accordion.Button>

          <Accordion.Content>
            <div className="pt-15">
              <div className="d-flex flex-column y-gap-15">
                {filters.map((type, index) => (
                  <div key={index}>
                    <Input type="checkbox" label={type} />
                  </div>
                ))}
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

const MemoizedCheckboxFilter = React.memo(CheckboxFilter)

export default MemoizedCheckboxFilter;