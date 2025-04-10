import {useState} from "react";
import {Link} from "react-router-dom";

type LogoProps = {
  isInverted?: boolean;
};

const Logo = ({isInverted}: LogoProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link to="/" className="header__logo d-flex flex-column">
      {!loaded && <div className="skeleton-element mx-4" style={{width: "120px", height: "32px"}} />}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Flogo.png?alt=media&token=626fdce0-f733-49d0-bdcb-ea7f63b0963a"
        alt="MERN-Tours"
        onLoad={() => setLoaded(true)}
        style={{
          display: loaded ? "block" : "none",
          width: "160px",
          height: "42px",
          filter: isInverted ? "brightness(0) invert(1)" : "none",
        }}
      />
      {/* {loaded && (
        <span style={{fontSize: "0.5rem", textAlign: "center"}}>
          Adventure Awaits! <span className="text-nowrap">Let&apos;s Begin</span>
        </span>
      )} */}
    </Link>
  );
};

export default Logo;
