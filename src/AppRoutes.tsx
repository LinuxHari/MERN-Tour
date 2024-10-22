import { lazy, useCallback, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Auth from "./pages/Auth";

const Home = lazy(() => import('./pages/Home'))
const AdminLayout = lazy(() => import("./layouts/AdminLayout")) ;
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'));
const Bookings = lazy(() => import('./pages/Admin/Bookings'));
const Listings = lazy(() => import('./pages/Admin/Listings'));
const AddTour = lazy(() => import('./pages/Admin/AddTour'));
const Favorites = lazy(() => import('./pages/Admin/Favorites'));
const Profile = lazy(() => import('./pages/Admin/Profile'));
const CommonHeader = lazy(() => import('./components/Admin/CommonHeader'));
const ListingTours = lazy(() => import('./pages/ListingTours'))
const Tour = lazy(() => import('./pages/SingleTour'))
const BookingSuccess = lazy(() => import('./pages/BookingSuccess'));
const Checkout = lazy(() => import('./pages/TravellerInfo'));

const AppRoutes = () => {
  const render = useCallback((title: string, desc: string = "") => <CommonHeader title={title} desc={desc}/>,[])

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="tours" element={<ListingTours/>}/>
        <Route path="tours/:id" element={<Tour/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="success" element={<BookingSuccess/>}/>
        <Route path="login" element={<Auth/>}/>
        <Route path="signup" element={<Auth/>}/>
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
