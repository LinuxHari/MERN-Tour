import { Outlet } from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar";
import Header from "../components/Admin/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="dashboard__content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
