import {Bookings} from "../../../type";
import {formatTableData} from "../../../utils/formatTableData";
import Button from "../../Shared/Button/Button";
import TableDataCell from "./TableDataCell";

type TableProps = {
  headers: string[];
  showEdit: boolean;
  data: Bookings[];
};

const Table = ({headers, showEdit, data}: TableProps) => {
  const formattedData = formatTableData(data);

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
          {formattedData.map((singleData, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(singleData).map((value, index) => (
                <TableDataCell key={index} {...value} />
              ))}
              <td>
                <div className="d-flex items-center">
                  {showEdit && (
                    <Button buttonType="icon">
                      <i className="icon-pencil text-14" />
                    </Button>
                  )}
                  <Button buttonType="icon" className="ml-10">
                    <i className="icon-delete text-14" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
