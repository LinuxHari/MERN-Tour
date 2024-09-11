import { Toaster } from "react-hot-toast";
import AppRoutes from "./AppRoutes";
import { toasterConfig } from "./config/toasterConfig";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster {...toasterConfig}/>
    </>
  );
}

export default App;
