import {useEffect} from "react";
import useModal from "../../hooks/Shared/useModal";
import useVerificationHandler from "../../hooks/Users/useVerificationHandler";
import {EmailSchema} from "../../schema/authSchema";
import SimpleForm from "../Shared/Forms/SimpleForm";
import Modal from "../Shared/Modal/Modal";

type SendVerificationModalProps = {
  showModal: boolean;
};

const SendVerificationModal = ({showModal: showVerificationModal}: SendVerificationModalProps) => {
  const fields = [{type: "email", name: "email"}] as const;
  const {sendMail, isSendingMail} = useVerificationHandler();
  const {showModal, onClose, openModal} = useModal();

  useEffect(() => {
    if (showVerificationModal) openModal();
  }, [showVerificationModal]);

  return (
    //Below we use and operator to keep modal state also, because when user clicks outside or close modal, modal should be closed.
    <Modal show={showModal && showVerificationModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Verify Email</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <SimpleForm
          fields={[...fields]} // Spead operator is used here to escape from read-only as I used asserted as const above.
          schema={EmailSchema}
          buttonText={"Send Verification Email"}
          onSubmit={sendMail}
          className="px-2"
          isLoading={isSendingMail}
        />
      </Modal.Content>
    </Modal>
  );
};

export default SendVerificationModal;
