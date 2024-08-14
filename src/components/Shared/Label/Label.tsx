type Props = {
  children: React.ReactNode;
  className?: string;
};

const Label = ({ children, className = ""}: Props) => {
  return (
    <div className="col-auto">
      <button
        className={`button -accent-1 text-14 px-15 bg-accent-1-05 rounded-200 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Label;
