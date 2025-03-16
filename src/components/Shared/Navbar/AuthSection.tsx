import {Link} from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Avatar from "../Avatar/Avatar";
import useUserHandler from "../../../hooks/useUserHandler";
import LogoutModal from "../../Auth/LogoutModal";
import useAuthHandler from "../../../hooks/useAuthHandler";
import useModal from "../../../hooks/useModal";
import {Role} from "../../../type";
import Button from "../Button/Button";
import useWindowSize from "../../../hooks/useWindowSize";

type AuthSectionProps = {
  isMobile?: boolean;
};

const AuthSection = ({isMobile = false}: AuthSectionProps) => {
  const {user, isLoggedIn, isLoading} = useUserHandler();
  const {onLogout} = useAuthHandler();
  const {showModal, onClose, onConfirm, openModal} = useModal();
  const {width} = useWindowSize();
  const [dashboardLabel, dashboardUrl] =
    user?.role === Role.admin ? ["Dashboard", "/dashboard"] : ["Profile", "/dashboard/profile"];

  const handleLogout = async () => {
    if (user && isLoggedIn) {
      await onLogout(user.email);
    }
  };

  if (isLoading) {
    return <div className="skeleton-element rounded-pill" style={{width: "80px", height: "38px"}} />;
  }

  return (
    <>
      {isLoggedIn && user ? (
        <Dropdown className="js-form-dd">
          <Dropdown.Toggle className="px-0 mx-2" dataClick="header-currency">
            {!isMobile ? (
              <>
                <Avatar type="small" string={user.email} profile={user.profile} />
                <p className="text-clamp-10 m-0">{user.firstName}</p>
                <i className="icon-chevron-down text-18" />
              </>
            ) : (
              <span className="d-flex align-items-center px-3 py-2">
                <i className="icon-person text-18 mx-0" />
              </span>
            )}
          </Dropdown.Toggle>
          <Dropdown.Content dataClick="header-currency">
            <div
              className="headerDropdown"
              style={{
                left: width <= 768 ? -36 : 25,
                top: width <= 768 ? 32 : 40,
              }}
            >
              <div className="headerDropdown__container">
                <div className="headerDropdown__item">
                  <Link to={dashboardUrl} className="text-decoration-none">
                    <i className="icon-person" /> &nbsp; {dashboardLabel}
                  </Link>
                </div>
                <div className="headerDropdown__item text-decoration-none">
                  <button className="text-danger d-flex align-items-center text-decoration-none" onClick={openModal}>
                    <i className="icon-logout text-18 text-decoration-none" /> &nbsp; Logout
                  </button>
                </div>
                <LogoutModal showModal={showModal} onClose={onClose} onConfirm={() => onConfirm(handleLogout)} />
              </div>
            </div>
          </Dropdown.Content>
        </Dropdown>
      ) : (
        <>
          {!isMobile && (
            <Link to="/signup" className="ml-10 text-nowrap">
              Sign up
            </Link>
          )}

          <Button
            to="/login"
            buttonType="link"
            showIcon={false}
            className={`text-nowrap rounded-pill px-4 ${isMobile ? "py-1 ml-5" : "py-2 ml-30"}`}
          >
            Log in
          </Button>
        </>
      )}
    </>
  );
};

export default AuthSection;
