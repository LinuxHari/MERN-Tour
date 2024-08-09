import { lazy, useCallback, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

const Home = lazy(() => import('./pages/Home'))
const AdminLayout = lazy(() => import("./layouts/AdminLayout")) ;
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'));
const Bookings = lazy(() => import('./pages/Admin/Bookings'));
const Listings = lazy(() => import('./pages/Admin/Listings'));
const AddTour = lazy(() => import('./pages/Admin/AddTour'));
const Favorites = lazy(() => import('./pages/Admin/Favorites'));
const Profile = lazy(() => import('./pages/Admin/Profile'));
const CommonHeader = lazy(() => import('./components/Admin/CommonHeader'));4

const AppRoutes = () => {
  const render = useCallback((title: string, desc: string) => <CommonHeader title={title} desc={desc}/>,[])

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
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