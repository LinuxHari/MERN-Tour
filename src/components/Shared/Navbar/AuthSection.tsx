import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

type AuthSectionProps = {
    isLoggedIn: boolean,
    name?: string
}

const AuthSection = ({ isLoggedIn, name }: AuthSectionProps) => {
  return (
    <>
      {isLoggedIn ? (
         <Dropdown className="js-form-dd">
         <Dropdown.Toggle dataClick="header-currency">
           {name}
           <i className="icon-chevron-down text-18"></i>
         </Dropdown.Toggle>
   
         <Dropdown.Content dataClick="header-currency">
           <div className="headerDropdown">
             <div className="headerDropdown__container">
                 <div className="headerDropdown__item">
                  <Link to="/dashboard"><i className="icon-person"/> &nbsp; Profile</Link>
                 </div>
                 <div className="headerDropdown__item">
                   <button className="text-danger d-flex align-items-center"><i className="icon-logout text-18"/> &nbsp; Logout</button>
                 </div>
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
