import useAuthHandler from "../../hooks/useAuthHandler";
import useModal from "../../hooks/useModal";
import useUserHandler from "../../hooks/useUserHandler";
import LogoutModal from "../Auth/LogoutModal";

const LogoutSection = () => {
  const {user, isLoggedIn} = useUserHandler();
  const {onLogout} = useAuthHandler();
  const {showModal, onClose, onConfirm, openModal} = useModal();

  const handleLogout = async () => {
    if (user && isLoggedIn) {
      await onLogout(user.email);
    }
  };

  return (
    <>
      <div className="sidebar__item" role="presentation" onClick={openModal}>
        <button style={{color: "white"}} className="w-100">
          <i className="icon-logout text-26" />
          <span className="ml-10">Logout</span>
        </button>
      </div>
      <LogoutModal
        showModal={showModal}
        onClose={onClose}
        onConfirm={() => onConfirm(handleLogout)}
      />
    </>
  );
};

export default LogoutSection;
