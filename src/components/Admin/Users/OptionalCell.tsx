type OptionalCellProps = {
  value?: string | number;
};

const OptionalCell = ({value}: OptionalCellProps) => {
  return value ? value : <span className="text-danger">Not available</span>;
};

export default OptionalCell;
