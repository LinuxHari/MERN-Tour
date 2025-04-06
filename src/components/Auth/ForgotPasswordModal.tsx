import {useEffect} from "react";
import useModal from "../../hooks/Shared/useModal";
import useVerificationHandler from "../../hooks/Users/useVerificationHandler";
import {EmailSchema} from "../../schema/authSchema";
import SimpleForm from "../Shared/Forms/SimpleForm";
import Modal from "../Shared/Modal/Modal";

type SendVerificationModalProps = {
  showModal: boolean;
  onClose: () => void;
};

const ForgotPasswordModal = ({showModal: showForgotPassModal, onClose: closeModal}: SendVerificationModalProps) => {
  const fields = [{type: "email", name: "email"}] as const;
  const {sendResetMail, isSendingResetMail} = useVerificationHandler();
  const {showModal, onClose, openModal} = useModal();

  useEffect(() => {
    if (showForgotPassModal) openModal();
  }, [showForgotPassModal]);

  return (
    //Below we use and operator to keep modal state also, because when user clicks outside or close modal, modal should be closed.
    <Modal
      show={showModal && showForgotPassModal}
      onClose={() => {
        onClose();
        closeModal();
      }}
    >
      <Modal.Header>
        <Modal.Title>Reset Password</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <SimpleForm
          fields={[...fields]} // Spead operator is used here to escape from read-only as I used asserted as const above.
          schema={EmailSchema}
          buttonText={"Send Reset Email"}
          onSubmit={sendResetMail}
          className="px-2"
          isLoading={isSendingResetMail}
        />
      </Modal.Content>
    </Modal>
  );
};

export default ForgotPasswordModal;
