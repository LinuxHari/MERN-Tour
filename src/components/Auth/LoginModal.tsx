import { LoginSchemaType } from "../../schema/authSchema"
import { ModalProps } from "../../type"
import Modal from "../Shared/Modal/Modal"
import LoginForm from "./LoginForm"

type LoginModalProps = Omit<ModalProps, "onConfirm"> & { isLoading: boolean, onConfirm: (data: LoginSchemaType) => void }

const LoginModal = ({showModal, onClose, onConfirm, isLoading}: LoginModalProps) => {
  return (
    <Modal show={showModal} onClose={onClose} >
    <Modal.Header>
      <Modal.Title>Log In</Modal.Title>
    </Modal.Header>
    <Modal.Content>
      <LoginForm isLoading={isLoading} onLogin={onConfirm} />
    </Modal.Content>
  </Modal>
  )
}

export default LoginModal