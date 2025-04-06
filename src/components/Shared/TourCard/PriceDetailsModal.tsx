import {TourSchemaType} from "../../../schema/tourSchema";
import getAgeRange from "../../../utils/getAgeRange";
import Modal from "../Modal/Modal";
import Price from "../Price/Price";

type PriceDetailsProps = {
  showModal: boolean;
  onClose: () => void;
  price: TourSchemaType["price"];
};

const PriceDetailsModal = ({showModal, onClose, price}: PriceDetailsProps) => {
  const {ageRanges, getLabel} = getAgeRange();

  return (
    <Modal show={showModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Price Details</Modal.Title>
      </Modal.Header>
      <Modal.Content className="px-3">
        {ageRanges.map(({category, minAge, maxAge}) =>
          price?.[category] ? (
            <p key={category}>
              <span className="fw-500">
                <Price price={price[category]} />
              </span>{" "}
              per {getLabel(category, minAge, maxAge)}
            </p>
          ) : null,
        )}
      </Modal.Content>
      <Modal.Footer>
        <Modal.Close className="w-100">Close</Modal.Close>
      </Modal.Footer>
    </Modal>
  );
};

export default PriceDetailsModal;
