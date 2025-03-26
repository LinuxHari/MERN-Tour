import {useState} from "react";
import {Link} from "react-router-dom";

const Logo = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link to="/" className="header__logo d-flex flex-column">
      {!loaded && <div className="skeleton-element mx-4" style={{width: "120px", height: "32px"}} />}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Flogo-1.svg?alt=media&token=abbcab85-1eed-4fdd-9ee5-cd4653407341"
        alt="Viatours"
        onLoad={() => setLoaded(true)}
        style={{display: loaded ? "block" : "none"}}
      />
      {loaded && <span style={{fontSize: "0.5rem"}}>Adventure Awaits! Let&apos;s Begin</span>}
    </Link>
  );
};

export default Logo;
