import { Route, Routes } from "react-router-dom"

const routes = () => {
  return (
    <Routes>
        {/* <Route path="*" element={}/> */}
        <Route path="/dashboard">
            {/* <Route element={} index/> */}
            <Route/>
        </Route>
    </Routes>
  )
}

export default routes