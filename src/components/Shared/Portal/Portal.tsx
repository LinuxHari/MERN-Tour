import ReactDOM from "react-dom";
import appendPortalBody from "../../../utils/appendPortalBody";

type PortalProps = {
  id: string;
  children: React.ReactNode;
};

const Portal = ({id, children}: PortalProps) => {
  let modalBody = document.getElementById(id);

  if (!modalBody) modalBody = appendPortalBody(id);

  return ReactDOM.createPortal(children, modalBody);
};

export default Portal;
