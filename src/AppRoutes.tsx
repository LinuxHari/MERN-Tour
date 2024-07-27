import { lazy, useCallback, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";

const AdminLayout = lazy(() => import("./layouts/AdminLayout")) ;
const Dashboard = lazy(() => import('./components/Admin/Dashboard/Dashboard'));
const Bookings = lazy(() => import('./components/Admin/Bookings/Bookings'));
const Listings = lazy(() => import('./components/Admin/Listings/Listings'));
const AddTour = lazy(() => import('./components/Admin/AddTour/AddTour'));
const Favorites = lazy(() => import('./components/Admin/Favorites/Favorites'));
const Profile = lazy(() => import('./components/Admin/Profile/Profile'));
const CommonHeader = lazy(() => import('./components/Admin/CommonHeader'));

const AppRoutes = () => {
  const render = useCallback((title: string, desc: string) => <CommonHeader title={title} desc={desc}/>,[])

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/dashboard" element={<AdminLayout />}>
        <Route index element={<Dashboard render={render} />} />
        <Route path="booking" element={<Bookings render={render} />} />
        <Route path="listings" element={<Listings render={render} />} />
        <Route path="addtour" element={<AddTour render={render} />} />
        <Route path="favorites" element={<Favorites render={render} />} />
        <Route path="profile" element={<Profile render={render} />} />
      </Route>
    </Routes>
  </Suspense>
  );
};

export default AppRoutes;
