import {Link, useLocation} from "react-router-dom";
import useUserHandler from "../../hooks/Users/useUserHandler";
import {Role} from "../../type";
import {DASHBOARD_ADMIN, DASHBOARD_USER} from "../../config/adminConfig";
import Header from "./SidebarHeader";
import LogoutSection from "./LogoutSection";

const Sidebar = () => {
  const {pathname} = useLocation();
  const {user} = useUserHandler();
  const DashboardLinks = user && user.role === Role.admin ? DASHBOARD_ADMIN : DASHBOARD_USER;
  const highlightTab = () => {
    const splittedPath = pathname.split("/");

    return splittedPath[splittedPath.length - 1];
  };

  return (
    <div className="dashboard js-dashboard -is-sidebar-visible">
      <div className="dashboard__sidebar js-dashboard-sidebar">
        <Header />
        <div className="sidebar -dashboard">
          {DashboardLinks.map(({text, href, iconClass}, index) => (
            <div className={`sidebar__item ${highlightTab() === href ? "-is-active" : ""}`} key={index}>
              <Link to={href} style={{color: "white"}}>
                <i className={`${iconClass} text-26`} />
                <span className="ml-10">{text}</span>
              </Link>
            </div>
          ))}
          <LogoutSection />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
