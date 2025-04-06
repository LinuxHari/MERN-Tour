import {ToasterProps} from "react-hot-toast";

export const toasterConfig: ToasterProps = {
  position: "top-right",
  reverseOrder: false,
  toastOptions: {
    duration: 2500,
    className: "toast-slide",
    style: {
      animation: "slideInRight 0.2s ease-out, slideOutRight 0.4s ease-in 2.5s forwards",
    },
    success: {
      style: {background: "#EB662B", color: "white"},
    },
    error: {
      style: {background: "white", color: "black"},
    },
  },
};
