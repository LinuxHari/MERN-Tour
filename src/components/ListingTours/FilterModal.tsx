import {ModalProps} from "../../type";
import stringToTitle from "../../utils/stringToTitle";
import Input from "../Shared/Input/Input";
import Modal from "../Shared/Modal/Modal";

type FilterModalProps = {
  title: string;
  filter: string[] | {count: number; label: string}[];
  appliedFilterValue?: string[] | number;
  setAppliedFilters: (key: string, value: string, checked?: boolean) => void;
} & Omit<ModalProps, "onConfirm">;

const FilterModal = ({showModal, onClose, title, filter, appliedFilterValue, setAppliedFilters}: FilterModalProps) => {
  return (
    <Modal show={showModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>{stringToTitle(title)}</Modal.Title>
      </Modal.Header>
      <Modal.Content className="px-2">
        <div className="row g-3">
          {filter.map((value, index) => (
            <div key={index} className="col-6 col-xl-3">
              {typeof value === "object" ? (
                <Input
                  type="radio"
                  name={title}
                  label={value.label}
                  value={value.count}
                  onChange={(e) => setAppliedFilters(title, e.currentTarget.value)}
                  checked={value.count == appliedFilterValue}
                />
              ) : (
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
              )}
            </div>
          ))}
        </div>
      </Modal.Content>
      <Modal.Footer className="d-flex justify-content-end">
        <Modal.Close>Close</Modal.Close>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
