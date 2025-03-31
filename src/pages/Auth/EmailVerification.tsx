import {useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import useVerificationHandler from "../../hooks/Users/useVerificationHandler";
import CommonSkeleton from "../../components/Skeletons/CommonSkeleton";

type Params = {
  token: string;
};

const EmailVerification = () => {
  const {token} = useParams() as Params;
  const {verifyMail, isVerifyingMail} = useVerificationHandler();
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!hasRunRef.current) {
      verifyMail(token);
      hasRunRef.current = true;
    }
  }, [token]);

  return <div style={{height: "100vh"}}>{isVerifyingMail ? <CommonSkeleton /> : null}</div>;
};

export default EmailVerification;
