import {ModalProps} from "../../../type";
import Button from "../../Shared/Button/Button";
import Modal from "../../Shared/Modal/Modal";

type DeletionModalProps = Omit<ModalProps, "onConfirm"> & {
  onConfirm: (email: string) => void;
  email: string;
  isDeleting: boolean;
};

const DeletionModal = ({showModal, onClose, onConfirm, email, isDeleting}: DeletionModalProps) => {
  return (
    <Modal show={showModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>

      <Modal.Content>
        <p>
          Are you sure you want to delete the user with{" "}
          <span className="d-block">
            email <span className="fw-600">{email}</span>?
          </span>
        </p>
      </Modal.Content>

      <Modal.Footer className="d-flex justify-content-center">
        <Modal.Close className="mr-5 px-4">Close</Modal.Close>
        <Button
          className="py-2 px-5"
          buttonType="primary"
          onClick={() => onConfirm(email)}
          showIcon={false}
          disabled={isDeleting}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletionModal;
