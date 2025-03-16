import {useNavigate} from "react-router-dom";
import Button from "../Button/Button";

type BaseProps = {
  title: string;
  description: string;
};

type GoBackProps = {
  showGoBack: true;
  url?: never;
};

type LinkProps = {
  showGoBack?: false;
  url?: string;
};

type NoResultProps = BaseProps & (GoBackProps | LinkProps);

const NoResult = ({title, description, url, showGoBack}: NoResultProps) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center y-gap-5" style={{minHeight: "100vh"}}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2FNoResult.png?alt=media&token=7ec6b54e-9eea-42a4-8a79-53e58a514f27"
        alt="No Result"
        style={{scale: "80%", minHeight: "50vh"}}
      />
      <h2 className="text-20 fw-500">{title}</h2>
      <p>{description}</p>

      {showGoBack && (
        <Button buttonType="primary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      )}

      {url && (
        <Button buttonType="primary" onClick={() => navigate(url)}>
          Try again
        </Button>
      )}
    </div>
  );
};

export default NoResult;
