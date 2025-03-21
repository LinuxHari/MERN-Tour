import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="header__logo d-flex flex-column">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Flogo-1.svg?alt=media&token=abbcab85-1eed-4fdd-9ee5-cd4653407341"
        alt="Viatours"
      />
      <span style={{fontSize: "0.5rem"}}>Adventure Awaits! Let&apos;s Begin</span>
    </Link>
  );
};

export default Logo;
