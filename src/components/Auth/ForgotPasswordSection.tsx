import {useState} from "react";
import ForgotPasswordModal from "./ForgotPasswordModal";

const ForgotPasswordSection = () => {
  const [showForgotPassModal, setShowForgotPassModal] = useState(false);

  return (
    <>
      <button
        type="button"
        className="text-15 text-center w-100 fw-500 text-accent-2"
        onClick={() => setShowForgotPassModal(true)}
      >
        Forgot password?
      </button>
      <ForgotPasswordModal showModal={showForgotPassModal} onClose={() => setShowForgotPassModal(false)} />
    </>
  );
};

export default ForgotPasswordSection;
