import {UsersResponse} from "../../../redux/api/type";
import Button from "../../Shared/Button/Button";
import OptionalCell from "./OptionalCell";

type TableRowProps = {
  user: UsersResponse["users"][number];
  handleDeletion: (email: string) => void;
};

const TableRow = ({user, handleDeletion}: TableRowProps) => {
  return (
    <tr>
      <td className="text-nowrap">{user.firstName + " " + user.lastName}</td>

      <td>{user.email}</td>
      <td>{user.countryCode || "Not available"}</td>

      <td className="text-nowrap">
        <OptionalCell value={user.phone} />
      </td>
      <td className="text-nowrap">
        <OptionalCell value={user.country} />
      </td>
      <td className="text-nowrap">
        <OptionalCell value={user.state} />
      </td>
      <td className="text-nowrap">
        <OptionalCell value={user.city} />
      </td>
      <td className="text-nowrap">
        <OptionalCell value={user.address} />
      </td>
      <td className="text-nowrap">
        <OptionalCell value={user.isVerified ? "Yes" : "No"} />
      </td>
      <td className="text-nowrap">
        <OptionalCell value={user.createdAt} />
      </td>

      <td>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleDeletion(user.email);
          }}
        >
          <Button type="submit" buttonType="primary" className="py-2 px-3 rounded">
            Delete
          </Button>
        </form>
      </td>
    </tr>
  );
};

export default TableRow;
