import ChangePassword from "../../components/Admin/Profile/ChangePassword";
import UpdateProfile from "../../components/Admin/Profile/UpdateProfile";
import {RenderProps} from "../../type";

const Profile = ({render}: RenderProps) => {
  return (
    <>
      {render("Profile", "Manage Profile")}
      <UpdateProfile />
      <ChangePassword />
    </>
  );
};

export default Profile;
