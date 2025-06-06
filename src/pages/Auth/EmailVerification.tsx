import {useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import useVerificationHandler from "../../hooks/Users/useVerificationHandler";
import CommonSkeleton from "../../components/Skeletons/CommonSkeleton";
import NoResult from "../../components/Shared/NoResult/NoResult";

type Params = {
  token: string;
};

const EmailVerification = () => {
  const {token} = useParams() as Params;
  const {verifyMail, isVerifyingMail, isVerificationError} = useVerificationHandler();
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!hasRunRef.current) {
      verifyMail(token);
      hasRunRef.current = true;
    }
  }, [token]);

  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
      {isVerifyingMail || !isVerificationError ? (
        <CommonSkeleton />
      ) : (
        <NoResult title="Invalid token" description="Token could have been expired" />
      )}
    </div>
  );
};

export default EmailVerification;
