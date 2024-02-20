import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto px-10 py-5'>
        <NavLink to='/'>
          <h1 className='font-bold'>Auth App</h1>
        </NavLink>
        <ul className='flex gap-4'>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/about'>
            <li>About</li>
          </NavLink>
          <NavLink to='/sign-in'>
            <li>Signin</li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Header