import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        {/* Replace the link and logo with your actual logo and home page link */}
        <Link to="/" className="btn btn-ghost text-xl">
          <img
            src="logo.jpg"
            alt="Your Logo"
            className="h-8 w-8 mr-2"
          />
          Cat Adoption
        </Link>
      </div>
      <div className="flex-none">
        <div className="space-x-4">
          {/* Add relevant links to navigate to different sections */}
          <Link to="/home" className="btn btn-ghost">
            Home
          </Link>
          <Link to="/pet-listing" className="btn btn-ghost">
            Pet Listing
          </Link>
          <Link to="/donation-campaigns" className="btn btn-ghost">
            Donation Campaigns
          </Link>
          <Link to="/login-register" className="btn btn-ghost">
            Login/Register
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          {/* Use your user profile picture */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Profile"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
