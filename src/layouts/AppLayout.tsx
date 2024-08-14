import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'

const AppLayout = () => {
  return (
    <main className=''>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default AppLayout