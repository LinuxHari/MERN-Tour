type SpinnerProps = {
  size?: number
};

const Spinner = ({ size = 24 }: SpinnerProps) => {
  return (
    <div className="spinner-border mr-10" style={{height:size, width: size}} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
