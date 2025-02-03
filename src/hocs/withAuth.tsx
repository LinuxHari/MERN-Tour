import React, {useState, useLayoutEffect} from "react";
import {useLocation} from "react-router-dom";
import useUserHandler from "../hooks/useUserHandler";
import NotFound from "../pages/NotFound";
import {Role} from "../type";
import CommonSkeleton from "../components/Skeletons/CommonSkeleton";

const withAuth = <T extends object>(Component: React.ComponentType<T>) => {
  return function WithAuthWrapper(props: T) {
    const {isLoggedIn, isLoading, user} = useUserHandler();
    const {pathname} = useLocation();
    const [showContent, setShowContent] = useState(false);

    const adminPages = [
      "/dashboard",
      "/dashboard/listings",
      "/dashboard/addTour",
    ];

    const isRestricted =
      adminPages.includes(pathname) && user && user.role !== Role.admin;

    useLayoutEffect(() => {
      let timeoutId: NodeJS.Timeout;

      if (!isLoading) {
        timeoutId = setTimeout(() => {
          setShowContent(true);
        }, 500);
      }

      return () => {
        if (timeoutId) clearTimeout(timeoutId);
      };
    }, [isLoading]);

    if (isLoading || !showContent) return <CommonSkeleton />;

    if (isLoggedIn && !isRestricted) return <Component {...props} />;

    return <NotFound />;
  };
};

export default withAuth;
