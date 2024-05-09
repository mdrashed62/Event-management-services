import { useContext } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import logo from '../../assets/logo.jpg'
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
      logOut()
        .then(() => navigate("/"))
        .catch();
    };
  
    const navLinks = (
       <>
       <li>
        <NavLink to='/'>Home</NavLink>
       </li>

       <li className="ml-4 mr-4">
        <NavLink to='/services'>Services</NavLink>
       </li>
       
       </>
    );

    return (
        <div className="navbar bg-base-100 mb-6">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-sm mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <div className="flex items-center text-xl md:text-2xl lg:text-3xl rounded-lg font-semibold">
          <div className="w-12 h-12">
            <img className="rounded-lg" src={logo} alt="Logo" />
          </div>
          <p className="text-violet-600">Epic Eventistry</p>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end flex items-center">
        {user ? (
          <div className="dropdown dropdown-bottom dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="flex items-center cursor-pointer">
              <img
                src={user.photoURL}
                className="w-12 h-12 rounded-full"
                alt="User Profile"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>{user?.displayName}</li>
              <li className="mt-4">
                <button
                  onClick={handleSignOut}
                  className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
    );
};

export default Navbar;