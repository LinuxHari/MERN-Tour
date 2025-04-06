import Currency from "../Shared/Navbar/Currency";
import Greetings from "./Greetings";

const Header = () => {
  return (
    <div className="dashboard__content_header d-flex justify-content-between">
      <Greetings />
      <div className="rounded-pill border mx-4">
        <Currency />
      </div>
    </div>
  );
};

export default Header;
