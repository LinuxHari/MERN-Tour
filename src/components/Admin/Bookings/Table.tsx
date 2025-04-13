import {OrganizedBookings, OrganizedTotalBookings} from "../../../type";
import TableRow from "./TableRow";

type TableProps = {
  headers: string[];
  data: OrganizedBookings | OrganizedTotalBookings;
};

const Table = ({headers, data}: TableProps) => {
  return (
    <div className="overflowAuto">
      <table className="tableTest mb-30">
        <thead className="bg-light-1 rounded-12">
          <tr>
            {headers.map((header, index) => (
              <td key={index} className="text-nowrap">
                {header}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((singleData, rowIndex) => (
            <TableRow booking={{...singleData}} key={rowIndex} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
