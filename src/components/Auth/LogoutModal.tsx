import Button from "../Shared/Button/Button";
import Modal from "../Shared/Modal/Modal";

type LogoutModalProps = {
  showModal: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const LogoutModal = ({ showModal, onClose, onConfirm }: LogoutModalProps) => (
  <Modal show={showModal} onClose={onClose}>
    <Modal.Header>
      <Modal.Title>Confirm Logout</Modal.Title>
    </Modal.Header>

    <Modal.Content>
      <p>Are you sure you want to log out?</p>
    </Modal.Content>

    <Modal.Footer className="d-flex">
      <Modal.Close className="mr-5 px-4">
        Cancel
      </Modal.Close>
      <Button
        className="py-2 px-5"
        buttonType="primary"
        onClick={onConfirm}
        showIcon={false}
      >
        Confirm
      </Button>
    </Modal.Footer>
  </Modal>
);

export default LogoutModal;
