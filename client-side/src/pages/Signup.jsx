import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Signup</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg" />
        <input type="email" placeholder="Email" id="email" className="bg-slate-100 p-3 rounded-lg" />
        <input type="password" placeholder="Password" id="passwword" className="bg-slate-100 p-3 rounded-lg" />
        <botton type="submit" className="bg-slate-600 text-white p-3 rounded-lg text-center uppercase hover:opacity-90 disabled:opacity-80">Sign Up</botton>
      </form>

      <div className='flex gap-2 mt-4'>
        <p>Have an account?</p>
        <NavLink to="/sign-in">
          <span className='text-blue-600'>Sign In</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Signup