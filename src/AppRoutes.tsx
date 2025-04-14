import {lazy, useCallback, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import CommonSkeleton from "./components/Skeletons/CommonSkeleton";
import Overview from "./pages/User/Overview";

const Home = lazy(() => import("./pages/Home"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const Bookings = lazy(() => import("./pages/User/Bookings"));
const TotalBookings = lazy(() => import("./pages/Admin/TotalBookings"));
const Listings = lazy(() => import("./pages/Admin/Listings"));
const AddTour = lazy(() => import("./pages/Admin/AddTour"));
const EditTour = lazy(() => import("./pages/Admin/EditTour"));
const Favorites = lazy(() => import("./pages/User/Favorites"));
const Profile = lazy(() => import("./pages/User/Profile"));
const CommonHeader = lazy(() => import("./components/Admin/CommonHeader"));
const ListingTours = lazy(() => import("./pages/ListingTours"));
const Tour = lazy(() => import("./pages/SingleTour"));
const Booking = lazy(() => import("./pages/Booking"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup"));
const EmailVerification = lazy(() => import("./pages/Auth/EmailVerification"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CategoryTours = lazy(() => import("./pages/CategoryTours"));

const AppRoutes = () => {
  const render = useCallback((title: string, desc: string = "") => <CommonHeader title={title} desc={desc} />, []);

  return (
    <Suspense fallback={<CommonSkeleton />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="tours/:destination/:destinationId" element={<ListingTours />} />
          <Route path="tours/:destination/:tourName/:tourId" element={<Tour />} />
          <Route path="checkout/:reserveId" element={<Checkout />} />
          <Route path="booking/:bookingId" element={<Booking />} />
          <Route path="tours/categories/:category" element={<CategoryTours />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="verify-email/:token" element={<EmailVerification />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard render={render} />} />
          <Route path="overview" element={<Overview render={render} />} />
          <Route path="bookings" element={<Bookings render={render} />} />
          <Route path="total-bookings" element={<TotalBookings render={render} />} />
          <Route path="listings" element={<Listings render={render} />} />
          <Route path="add-tour" element={<AddTour render={render} />} />
          <Route path="edit-tour/:tourId" element={<EditTour render={render} />} />
          <Route path="favorites" element={<Favorites render={render} />} />
          <Route path="profile" element={<Profile render={render} />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
