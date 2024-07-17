import { Route, Routes } from "react-router-dom"
import AdminLayout from "./layouts/AdminLayout"
import Dashboard from "./components/Admin/Dashboard/Dashboard"

const AppRoutes = () => {
  return (
    <Routes>
        {/* <Route path="*" element={}/> */}
        <Route path="/dashboard" element={<AdminLayout/>}>
            <Route element={<Dashboard/>} index/>
            <Route/>
        </Route>
    </Routes>
  )
}

export default AppRoutes