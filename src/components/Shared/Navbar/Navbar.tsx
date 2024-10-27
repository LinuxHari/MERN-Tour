import { Link } from "react-router-dom";
import Currency from "./Currency";
import Logo from "./Logo";
import Search from "./Search";
import Places from "./Places";
import { ACTIVITIES, DESTINATIONS } from "../../../data";

const Navbar = () => {
  return (
    <header className="header -type-1 js-header">
      <div data-anim="fade delay-3" className="header__container container is-in-view">
        <div className="header__logo">
          <Logo />
          <div className="xl:d-none ml-30">
            <Search />
          </div>
        </div>
        <div className="headerMobile__right">
          <button className="d-flex">
            <i className="icon-search text-18"></i>
          </button>

          <button className="d-flex ml-20">
            <i className="icon-person text-18"></i>
          </button>
        </div>
        <div className="header__right">
          <Places data={DESTINATIONS} title="Destinations" dataClick = "headerDestinations"/>
          <Places data={ACTIVITIES} title="Activities" dataClick = "header-activities"/>
          <Currency />
          <Link to="/signup" className="ml-10">
            Sign up
          </Link>

          <Link
            to="/login"
            className="button -sm -dark-1 bg-accent-1 rounded-200 text-white ml-30"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
