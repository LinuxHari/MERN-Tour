type NoResultProps = {
  description: string;
};

const NoResult = ({description}: NoResultProps) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center y-gap-5">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2FNoResult.png?alt=media&token=7ec6b54e-9eea-42a4-8a79-53e58a514f27"
        alt="No Result"
        style={{scale: "80%"}}
      />
      <p className="fw-600 text-30">{description}</p>
    </div>
  );
};

export default NoResult;
