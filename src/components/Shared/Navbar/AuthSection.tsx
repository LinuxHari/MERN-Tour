import {Link} from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Avatar from "../Avatar/Avatar";
import useUserHandler from "../../../hooks/useUserHandler";
import LogoutModal from "../../Auth/LogoutModal";
import useAuthHandler from "../../../hooks/useAuthHandler";
import useModal from "../../../hooks/useModal";

const AuthSection = () => {
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
      {isLoggedIn && user ? (
        <Dropdown className="js-form-dd">
          <Dropdown.Toggle className="px-0" dataClick="header-currency">
            <Avatar type="small" string={user.email} profile={user.profile} />
            <p className="text-clamp-10 m-0">{user.firstName}</p>
            <i className="icon-chevron-down text-18" />
          </Dropdown.Toggle>
          <Dropdown.Content dataClick="header-currency">
            <div className="headerDropdown">
              <div className="headerDropdown__container">
                <div className="headerDropdown__item">
                  <Link to="/dashboard" className="text-decoration-none">
                    <i className="icon-person" /> &nbsp; Profile
                  </Link>
                </div>
                <div className="headerDropdown__item text-decoration-none">
                  <button
                    className="text-danger d-flex align-items-center text-decoration-none"
                    onClick={openModal}
                  >
                    <i className="icon-logout text-18 text-decoration-none" />{" "}
                    &nbsp; Logout
                  </button>
                </div>
                <LogoutModal
                  showModal={showModal}
                  onClose={onClose}
                  onConfirm={() => onConfirm(handleLogout)}
                />
              </div>
            </div>
          </Dropdown.Content>
        </Dropdown>
      ) : (
        <>
          <Link to="/signup" className="ml-10 text-nowrap">
            Sign up
          </Link>

          <Link
            to="/login"
            className="button -sm -dark-1 bg-accent-1 rounded-200 text-white ml-30 text-nowrap"
          >
            Log in
          </Link>
        </>
      )}
    </>
  );
};

export default AuthSection;
