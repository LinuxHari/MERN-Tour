import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="header__logo">
      <img src="img/general/logo-1.svg" alt="logo icon" />
    </Link>
  );
};

export default Logo;
