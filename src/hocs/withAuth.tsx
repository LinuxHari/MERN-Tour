import React from "react";
import {useLocation} from "react-router-dom";
import useUserHandler from "../hooks/useUserHandler";
import NotFound from "../pages/NotFound";
import {Role} from "../type";
import CommonSkeleton from "../components/Skeletons/CommonSkeleton";

const withAuth = <T extends object>(Component: React.ComponentType<T>) => {
  return function WithAuthWrapper(props: T) {
    const {isLoggedIn, isLoading, user} = useUserHandler();
    const {pathname} = useLocation();

    const adminPages = [
      "/dashboard",
      "/dashboard/listings",
      "/dashboard/addTour",
    ];

    const isRestricted =
      adminPages.includes(pathname) && user && user.role !== Role.admin;

    if (isLoading || !user) return <CommonSkeleton />;

    if (isLoggedIn && !isRestricted) return <Component {...props} />;

    return <NotFound />;
  };
};

export default withAuth;
