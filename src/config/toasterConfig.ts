import {ToasterProps} from "react-hot-toast";

export const toasterConfig: ToasterProps = {
  position: "top-right",
  reverseOrder: false,
  toastOptions: {
    duration: 2000,
    success: {
      style: {background: "#EB662B", color: "white"},
    },
    error: {
      style: {background: "#05073C", color: "white"},
    },
  },
};
