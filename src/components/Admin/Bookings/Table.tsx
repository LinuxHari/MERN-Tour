import {OrganizedBookings} from "../../../type";
import TableRow from "./TableRow";

type TableProps = {
  headers: string[];
  data: OrganizedBookings;
};

const Table = ({headers, data}: TableProps) => {
  return (
    <div className="overflowAuto">
      <table className="tableTest mb-30">
        <thead className="bg-light-1 rounded-12">
          <tr>
            {headers.map((header, index) => (
              <td key={index}>{header}</td>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((singleData, rowIndex) => (
            <TableRow {...singleData} key={rowIndex} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
