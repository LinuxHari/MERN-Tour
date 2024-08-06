import { DataCell, Tour } from "../../../type";

type TableDataCellProps = {
  type: DataCell,
  value: string | object,
  color?: "purple" | "yellow" | "red"
};

const TableDataCell = ({ type, value, color }: TableDataCellProps) => {
  if (typeof value === "object") {
    const tour = value as Tour;
    return (
      <td className="min-w-300">
        <div className="d-flex items-center">
          <img src={tour.imgUrl} alt={tour.title} />
          <div className="ml-20">{tour.title}</div>
        </div>
      </td>
    );
  }

  if (type === "status") {
    return (
      <td>
        <div className={`circle text-${color}-1`}>{value}</div>
      </td>
    );
  }

  return <td>{value}</td>;
};

export default TableDataCell;
