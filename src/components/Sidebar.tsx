import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
     <div className='border-r-2 border-black h-screen'>
      <nav className="flex flex-col gap-2 p-4">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `py-2 px-4 rounded hover:bg-white ${
              isActive ? 'bg-white' : ''
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `py-2 px-4 rounded hover:bg-white ${
              isActive ? 'bg-white' : ''
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `py-2 px-4 rounded hover:bg-white ${
              isActive ? 'bg-white' : ''
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