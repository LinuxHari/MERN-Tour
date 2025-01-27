import React from "react";
import {useLocation} from "react-router-dom";
import useUserHandler from "../hooks/useUserHandler";
import Loader from "../components/Shared/Loader/Loader";
import NotFound from "../pages/NotFound";
import {Role} from "../type";

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

    if (isLoggedIn && !isLoading && !isRestricted)
      return <Component {...props} />;
    else if (isLoading) return <Loader />;
    else return <NotFound />;
  };
};

export default withAuth;
