import {Link} from "react-router-dom";
import Image from "../Shared/Image/Image";

const SidebarHeader = () => {
  return (
    <Link to="/" className="dashboard__sidebar_header">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Flogo-light.svg?alt=media&token=cebe1f88-8f1d-4e25-b6ad-b9f2dfdd1362"
        alt="Logo"
      />
    </Link>
  );
};

export default SidebarHeader;
