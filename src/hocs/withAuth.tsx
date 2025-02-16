import useUserHandler from "../hooks/useUserHandler";
import NotFound from "../pages/NotFound";
import CommonSkeleton from "../components/Skeletons/CommonSkeleton";

const withAuth = <T extends object>(Component: React.ComponentType<T>) => {
  return function WithAuthWrapper(props: T) {
    const {isLoggedIn, isLoading} = useUserHandler();

    if (isLoading) return <CommonSkeleton />;

    if (isLoggedIn) return <Component {...props} />;

    return <NotFound />;
  };
};

export default withAuth;
