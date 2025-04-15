import {lazy, useCallback, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import CommonSkeleton from "./components/Skeletons/CommonSkeleton";
import TourListingSkeleton from "./components/Skeletons/TourListingSkeleton";
import TourDetailSkeleton from "./components/Skeletons/TourDetailSkeleton";
import BookingFormSkeleton from "./components/Skeletons/BookingFormSkeleton";

const Home = lazy(() => import("./pages/Home"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const Bookings = lazy(() => import("./pages/User/Bookings"));
const TotalBookings = lazy(() => import("./pages/Admin/TotalBookings"));
const Listings = lazy(() => import("./pages/Admin/Listings"));
const AddTour = lazy(() => import("./pages/Admin/AddTour"));
const EditTour = lazy(() => import("./pages/Admin/EditTour"));
const Users = lazy(() => import("./pages/Admin/Users"));
const Overview = lazy(() => import("./pages/User/Overview"));
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
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="tours/:destination/:destinationId"
          element={
            <Suspense fallback={<TourListingSkeleton />}>
              <ListingTours />
            </Suspense>
          }
        />
        <Route
          path="tours/:destination/:tourName/:tourId"
          element={
            <Suspense fallback={<TourDetailSkeleton />}>
              <Tour />
            </Suspense>
          }
        />
        <Route
          path="checkout/:reserveId"
          element={
            <Suspense fallback={<BookingFormSkeleton />}>
              <Checkout />
            </Suspense>
          }
        />
        <Route
          path="booking/:bookingId"
          element={
            <Suspense fallback={<BookingFormSkeleton />}>
              <Booking />
            </Suspense>
          }
        />
        <Route
          path="tours/categories/:category"
          element={
            <Suspense fallback={<TourListingSkeleton />}>
              <CategoryTours />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="verify-email/:token"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <EmailVerification />
            </Suspense>
          }
        />
        <Route
          path="reset-password/:token"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <ResetPassword />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<CommonSkeleton />}>
            <AdminLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <Dashboard render={render} />
            </Suspense>
          }
        />
        <Route path="overview" element={<Overview render={render} />} />
        <Route
          path="bookings"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <Bookings render={render} />
            </Suspense>
          }
        />
        <Route
          path="total-bookings"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <TotalBookings render={render} />
            </Suspense>
          }
        />
        <Route
          path="listings"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <Listings render={render} />
            </Suspense>
          }
        />
        <Route
          path="add-tour"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <AddTour render={render} />
            </Suspense>
          }
        />
        <Route
          path="edit-tour/:tourId"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <EditTour render={render} />
            </Suspense>
          }
        />
        <Route
          path="favorites"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <Favorites render={render} />
            </Suspense>
          }
        />
        <Route
          path="users"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <Users render={render} />
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
            <Suspense fallback={<CommonSkeleton />}>
              <Profile render={render} />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
