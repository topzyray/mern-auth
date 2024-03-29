import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-5 py-5">
        <NavLink to="/">
          <h1 className="font-bold">Auth App</h1>
        </NavLink>
        <ul className="flex gap-4">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/profile">
            {currentUser ? (
              <img
                src={currentUser.data.validUser.profilePicture}
                alt={currentUser.data.validUser.username + 'profile picutre'}
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Signin</li>
            )}
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
