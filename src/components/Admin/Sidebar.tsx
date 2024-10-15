import { DASHBOARD_NAV } from "../../config/adminConfig";
import Header from "./SidebarHeader";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const highlightTab = (index: number) => {
    const splittedPath = pathname.split("/");
    return index === 0 ? pathname : splittedPath[2];
  };

  return (
    <div className="dashboard js-dashboard -is-sidebar-visible">
      <div className="dashboard__sidebar js-dashboard-sidebar">
        <Header />
        <div className="sidebar -dashboard">
          {DASHBOARD_NAV.map(({ text, href, iconClass }, index) => (
            <div
              className={`sidebar__item ${
                highlightTab(index) === href ? "-is-active" : ""
              }`}
              key={index}
            >
              <Link to={href} style={{ color: "white" }}>
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
