import Sidebar from "../components/Admin/Sidebar";
import Header from "../components/Admin/Header";
import { Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="dashboard -is-sidebar-visible js-dashboard">
      <div className="dashboard__sidebar js-dashboard-sidebar">
      <Sidebar />
      <div className="dashboard__content">
        <Header />
        <Outlet/>
      </div>
      </div>
    </div>
  );
};

export default AdminLayout;
