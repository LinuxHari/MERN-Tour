import {useEffect, useState} from "react";
import useUserHandler from "../hooks/useUserHandler";
import NotFound from "../pages/NotFound";
import CommonSkeleton from "../components/Skeletons/CommonSkeleton";

const withAuth = <T extends object>(Component: React.ComponentType<T>) => {
  return function WithAuthWrapper(props: T) {
    const {isLoggedIn, isLoading} = useUserHandler();
    const [showNotFound, setShowNotFound] = useState(false);

    useEffect(() => {
      if (!isLoading && !isLoggedIn) {
        const timer = setTimeout(() => {
          setShowNotFound(true);
        }, 2000);

        return () => clearTimeout(timer);
      }
    }, [isLoading, isLoggedIn]);

    if (isLoading) return <CommonSkeleton />;

    if (isLoggedIn) return <Component {...props} />;

    if (showNotFound) return <NotFound />;

    return <div style={{minHeight: "100vh"}} />;
  };
};

export default withAuth;
