import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import GoogleAuth from '../components/GoogleAuth';

const Signin = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(signInStart());
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data.error));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Signin</h1>
      <p className="text-red-500 pb-4">
        {error ? error || 'Something went wrong' : ''}
      </p>
      {/* <p className='text-green-600 pb-4'>{success && "Success"}</p> */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-600 text-white p-3 rounded-lg text-center uppercase hover:opacity-90 disabled:opacity-80"
        >
          {loading ? 'Loading' : 'Sign In'}
        </button>
        <GoogleAuth />
      </form>

      <div className="flex gap-2 mt-4">
        <p>Don{"'"}t have an account?</p>
        <NavLink to="/sign-up">
          <span className="text-blue-600">Sign Up</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Signin;
