import {UsersResponse} from "../../../redux/api/type";
import TableRow from "./TableRow";

type TableProps = {
  headers: string[];
  data: UsersResponse["users"];
  handleDeletion: (email: string) => void;
};

const Table = ({headers, data, handleDeletion}: TableProps) => {
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
            <TableRow user={{...singleData}} key={rowIndex} handleDeletion={handleDeletion} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
