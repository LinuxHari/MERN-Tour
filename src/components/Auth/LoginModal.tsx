import {LoginSchemaType} from "../../schema/authSchema";
import {ModalProps} from "../../type";
import Modal from "../Shared/Modal/Modal";
import LoginForm from "./LoginForm";

type LoginModalProps = Omit<ModalProps, "onConfirm"> & {
  isLoading: boolean;
  onConfirm: (data: LoginSchemaType) => void;
  isVerificationError: boolean;
};

const LoginModal = ({showModal, onClose, onConfirm, isLoading, isVerificationError}: LoginModalProps) => {
  return (
    <Modal show={showModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <LoginForm
          isLoading={isLoading}
          onLogin={onConfirm}
          isModal={true}
          modalClassName="px-2 py-10"
          isVerificationError={isVerificationError}
        />
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;
