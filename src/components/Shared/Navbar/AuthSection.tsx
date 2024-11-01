import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Avatar from "../Avatar/Avatar";
import useUserHandler from "../../../hooks/useUserHandler";
import { useState } from "react";
import LogoutModal from "../../Auth/LogoutModal";
import useAuthHandler from "../../../hooks/useAuthHandler";


const AuthSection = () => {
  const {data, isLoggedIn} = useUserHandler()
  const { onLogout } = useAuthHandler();
  const [showLogoutModal, setShowModal] = useState(false)

  const handleLogout = async() => {
    if(data && isLoggedIn){
      setShowModal(false)
      await onLogout(data.email) 
    }
  }
  return (
    <>
      {isLoggedIn && data ? (
         <Dropdown className="js-form-dd">
         <Dropdown.Toggle className="px-0" dataClick="header-currency">
          <Avatar type="small" email={data.email} profile={data.profile} />
          <p className="text-clamp-10 m-0">{data.firstName}</p>
          <i className="icon-chevron-down text-18"></i>
         </Dropdown.Toggle>
         <Dropdown.Content dataClick="header-currency">
           <div className="headerDropdown">
             <div className="headerDropdown__container">
                 <div className="headerDropdown__item">
                  <Link to="/dashboard" className="text-decoration-none"><i className="icon-person"/> &nbsp; Profile</Link>
                 </div>
                 <div className="headerDropdown__item text-decoration-none">
                   <button className="text-danger d-flex align-items-center text-decoration-none" onClick={() => setShowModal(true)}><i className="icon-logout text-18 text-decoration-none"/> &nbsp; Logout</button>
                 </div>
                 <LogoutModal showModal={showLogoutModal} onClose={() => setShowModal(false)} onConfirm={handleLogout}/>
             </div>
           </div>
         </Dropdown.Content>
       </Dropdown>
      ) : (
        <>
          <Link to="/signup" className="ml-10">
            Sign up
          </Link>

          <Link to="/login" className="button -sm -dark-1 bg-accent-1 rounded-200 text-white ml-30">
            Log in
          </Link>
        </>
      )}
    </>
  );
};

export default AuthSection;
