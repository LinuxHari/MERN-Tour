import useModal from "../../hooks/Shared/useModal";
import Accordion from "../Shared/Accordion/Accordion";
import Input from "../Shared/Input/Input";
import FilterModal from "./FilterModal";

type Props = {
  title: string;
  filter: string[] | {count: number; label: string}[];
  appliedFilterValue?: string[] | number;
  setAppliedFilters: (key: string, value: string, checked?: boolean) => void;
  index: number;
};

const CheckboxRadioFilters = ({title, filter, appliedFilterValue, setAppliedFilters, index}: Props) => {
  const keyToTile = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  const showFilter =
    Array.isArray(filter) &&
    (((title === "tourTypes" || title === "languages") && filter.length > 1) ||
      (title !== "tourTypes" && title !== "languages" && filter.length > 0));

  const {showModal, openModal, onClose} = useModal();

  return (
    <>
      {showFilter ? (
        <div className={`order-${index}`}>
          <div className="sidebar__item">
            <Accordion.Item index={index}>
              <Accordion.Button isShowIcon={true}>
                <h5 className="text-18 fw-500">{keyToTile(title)}</h5>
              </Accordion.Button>
              <Accordion.Content index={index}>
                <div className="pt-15">
                  <div className="d-flex flex-column y-gap-15">
                    {filter.slice(0, 6).map((value, index) =>
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
                      ),
                    )}
                    {filter.length > 6 && (
                      <>
                        <button className="d-flex text-15 fw-500 text-accent-2" onClick={openModal}>
                          See more
                        </button>

                        <FilterModal
                          title={title}
                          filter={filter}
                          setAppliedFilters={setAppliedFilters}
                          appliedFilterValue={appliedFilterValue}
                          showModal={showModal}
                          onClose={onClose}
                        />
                      </>
                    )}
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CheckboxRadioFilters;
