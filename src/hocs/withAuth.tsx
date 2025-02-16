import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useUserHandler from "../hooks/useUserHandler";
import NotFound from "../pages/NotFound";
import {Role} from "../type";
import CommonSkeleton from "../components/Skeletons/CommonSkeleton";

const withAuth = <T extends object>(Component: React.ComponentType<T>) => {
  return function WithAuthWrapper(props: T) {
    const {isLoggedIn, isLoading, user} = useUserHandler();
    const {pathname} = useLocation();
    const [isReady, setIsReady] = useState(false);

    const adminPages = [
      "/dashboard",
      "/dashboard/listings",
      "/dashboard/addTour",
    ];

    useEffect(() => {
      if (!isLoading && user) {
        setIsReady(true);
      }
    }, [isLoading, user]);

    const isRestricted =
      adminPages.includes(pathname) && user && user.role !== Role.admin;

    if (isLoading || !isReady) return <CommonSkeleton />;

    if (isLoggedIn && !isRestricted) return <Component {...props} />;

    return <NotFound />;
  };
};

export default withAuth;
