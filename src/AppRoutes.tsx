import {lazy, useCallback, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import CommonSkeleton from "./components/Skeletons/CommonSkeleton";

const Home = lazy(() => import("./pages/Home"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const Bookings = lazy(() => import("./pages/Admin/Bookings"));
const Listings = lazy(() => import("./pages/Admin/Listings"));
const AddTour = lazy(() => import("./pages/Admin/AddTour"));
const EditTour = lazy(() => import("./pages/Admin/EditTour"));
const Favorites = lazy(() => import("./pages/Admin/Favorites"));
const Profile = lazy(() => import("./pages/Admin/Profile"));
const CommonHeader = lazy(() => import("./components/Admin/CommonHeader"));
const ListingTours = lazy(() => import("./pages/ListingTours"));
const Tour = lazy(() => import("./pages/SingleTour"));
const Booking = lazy(() => import("./pages/Booking"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppRoutes = () => {
  const render = useCallback(
    (title: string, desc: string = "") => (
      <CommonHeader title={title} desc={desc} />
    ),
    [],
  );

  return (
    <Suspense fallback={<CommonSkeleton />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="tours/:destinationId" element={<ListingTours />} />
          <Route path="tours/:destinationId/:tourId" element={<Tour />} />
          <Route path="checkout/:reserveId" element={<Checkout />} />
          <Route path="booking/:bookingId" element={<Booking />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard render={render} />} />
          <Route path="booking" element={<Bookings render={render} />} />
          <Route path="listings" element={<Listings render={render} />} />
          <Route path="add-tour" element={<AddTour render={render} />} />
          <Route
            path="edit-tour/:tourId"
            element={<EditTour render={render} />}
          />
          <Route path="favorites" element={<Favorites render={render} />} />
          <Route path="profile" element={<Profile render={render} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
