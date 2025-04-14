import ChangePassword from "../../components/User/Profile/ChangePassword";
import UpdateProfile from "../../components/User/Profile/UpdateProfile";
import withAuth from "../../hocs/withAuth";
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

const AuthenticatedProfile = withAuth(Profile);

export default AuthenticatedProfile;
