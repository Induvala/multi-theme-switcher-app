import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
     <div className='border-r-2 border-black p-2 w-1/4 h-screen'>
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `py-2 px-4 rounded hover:bg-gray-700 ${
              isActive ? 'bg-gray-700' : ''
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `py-2 px-4 rounded hover:bg-gray-700 ${
              isActive ? 'bg-gray-700' : ''
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `py-2 px-4 rounded hover:bg-gray-700 ${
              isActive ? 'bg-gray-700' : ''
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  
  )
}

export default Sidebar