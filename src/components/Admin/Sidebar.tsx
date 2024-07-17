import { DASHBOARD_NAV } from "../../data";
import Header from "./SidebarHeader";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (<div className="dashboard js-dashboard -is-sidebar-visible">
    <div className="dashboard__sidebar js-dashboard-sidebar">
      <Header />
      <div className="sidebar -dashboard">
        {DASHBOARD_NAV.map(({text, href, iconClass}, index) => (
          <div
            className={`sidebar__item ${
              text === "Dashboard" ? "-is-active" : ""
            }`}
            key={index}
          >
            <Link to={href} style={{color:"white"}}>
              <i className={`${iconClass} text-26`}></i>
              <span className="ml-10">{text}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
