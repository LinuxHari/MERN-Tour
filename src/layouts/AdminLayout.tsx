import {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar";
import useUserHandler from "../hooks/useUserHandler";
import {Role} from "../type";
import NotFound from "../pages/NotFound";
import CommonSkeleton from "../components/Skeletons/CommonSkeleton";

const AdminLayout = () => {
  const {isLoggedIn, isLoading, user} = useUserHandler();
  const {pathname} = useLocation();
  const [isReady, setIsReady] = useState(false);

  const adminPages = [
    "/dashboard",
    "/dashboard/listings",
    "/dashboard/addTour",
  ];

  useEffect(() => {
    if (!isLoading && user) {
      setIsReady(true);
    }
  }, [isLoading, user]);

  const isRestricted =
    adminPages.includes(pathname) && user && user.role !== Role.admin;

  if (isLoading || !isReady) return <CommonSkeleton />;

  if (!isLoggedIn || isRestricted) return <NotFound />;

  return (
    <div className="dashboard -is-sidebar-visible js-dashboard">
      <div className="dashboard__sidebar js-dashboard-sidebar">
        <Sidebar />
      </div>
      <div className="dashboard__content">
        <div className="dashboard__content_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
