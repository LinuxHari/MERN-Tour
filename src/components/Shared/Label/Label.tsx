type Props = {
  children: React.ReactNode;
  type?: 1 | 2;
};

const Label = ({children, type = 2}: Props) => {
  const labelStyle = type === 1 ? "text-accent-1 bg-accent-1-05" : "bg-light-1";

  return (
    <div className="col-auto">
      <button className={`button -accent-1 text-14 px-15 rounded-200 ${labelStyle}`}>
        {children}
      </button>
    </div>
  );
};

export default Label;
