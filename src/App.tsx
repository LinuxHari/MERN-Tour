import { Toaster } from "react-hot-toast";
import AppRoutes from "./AppRoutes";
import { toasterConfig } from "./config/toasterConfig";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster {...toasterConfig}/>
      <ScrollToTop/>
    </>
  );
}

export default App;
