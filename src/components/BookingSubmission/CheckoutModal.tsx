import {ModalProps} from "../../type";
import Button from "../Shared/Button/Button";
import Modal from "../Shared/Modal/Modal";

type CheckoutModal = ModalProps & {
  title: string;
  content: string;
  closeText: string;
};

const CheckoutModal = ({showModal, onClose, onConfirm, title, content, closeText}: CheckoutModal) => (
  <Modal show={showModal} onClose={onClose}>
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Content>
      <p>{content}</p>
    </Modal.Content>
    <Modal.Footer className="d-flex justify-content-end">
      <Button type="button" buttonType="primary" className="px-4 py-2 rounded-10" onClick={onConfirm}>
        {closeText}
      </Button>
    </Modal.Footer>
  </Modal>
);

export default CheckoutModal;
