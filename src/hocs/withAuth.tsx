import React from 'react'
import useUserHandler from '../hooks/useUserHandler'
import Loader from '../components/Shared/Loader/Loader'
import NotFound from '../pages/NotFound'

const withAuth = <T extends object = {}>(
  Component: React.ComponentType<T>
) => {
  return function WithAuthWrapper(props: T) {
    const { isLoggedIn, isLoading } = useUserHandler();

    if (isLoggedIn && !isLoading) 
      return <Component {...props} />;
    else if (isLoading) 
      return <Loader />;
    else 
      return <NotFound />;
    
  };
};

export default withAuth