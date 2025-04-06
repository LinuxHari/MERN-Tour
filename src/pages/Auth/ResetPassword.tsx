import {useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import CommonSkeleton from "../../components/Skeletons/CommonSkeleton";
import usePasswordResetHandler from "../../hooks/Users/usePasswordResetHandler";
import ResetPasswordForm from "../../components/Auth/ResetPasswordForm";
import NoResult from "../../components/Shared/NoResult/NoResult";

type Params = {
  token: string;
};

const ResetPassword = () => {
  const {token} = useParams() as Params;
  const {verifyToken, isVerifyingToken, isTokenVerified} = usePasswordResetHandler();
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!hasRunRef.current) {
      verifyToken(token);
      hasRunRef.current = true;
    }
  }, [token]);

  if (isVerifyingToken) return <CommonSkeleton />;

  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
      {isTokenVerified ? (
        <ResetPasswordForm />
      ) : (
        <NoResult title="Invalid token" description="Token could have been expired" />
      )}
    </div>
  );
};

export default ResetPassword;
