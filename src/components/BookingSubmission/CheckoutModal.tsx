import { ModalProps } from "../../type";
import Modal from "../Shared/Modal/Modal";

type CheckoutModal = Omit<ModalProps, "onConfirm"> & {
  title: string
  content: string
  closeText: string
}

const CheckoutModal = ({ showModal, onClose, title, content, closeText }: CheckoutModal) => (
  <Modal show={showModal} onClose={onClose}>
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Content>
      <p>{content}</p>
    </Modal.Content>
    <Modal.Footer className="d-flex">
      <Modal.Close className="mr-5 px-4">{closeText}</Modal.Close>
    </Modal.Footer>
  </Modal>
);

export default CheckoutModal;
