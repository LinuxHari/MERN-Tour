import {Outlet, useLocation} from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar";
import useUserHandler from "../hooks/useUserHandler";
import {Role} from "../type";
import NotFound from "../pages/NotFound";

const AdminLayout = () => {
  const {user, isLoggedIn} = useUserHandler(); // Loading will be managed in withAuth
  const {pathname} = useLocation();

  const adminPages = [
    "/dashboard",
    "/dashboard/listings",
    "/dashboard/addTour",
  ];

  const isRestricted =
    adminPages.includes(pathname) && user && user.role !== Role.admin;

  if (isRestricted || !isLoggedIn) return <NotFound />;

  return (
    <div className="dashboard -is-sidebar-visible js-dashboard">
      <div className="dashboard__sidebar js-dashboard-sidebar">
        <Sidebar />
      </div>
      <div className="dashboard__content">
        {/* <Header /> */}
        <div className="dashboard__content_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
