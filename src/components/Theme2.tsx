import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const  Theme2 = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Theme2