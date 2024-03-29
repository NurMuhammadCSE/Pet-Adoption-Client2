import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        {/* Replace the link and logo with your actual logo and home page link */}
        <Link to="/" className="btn btn-ghost text-xl">
          <img
            src="https://img.freepik.com/free-vector/cute-dog-cat-friend_1308-133286.jpg?w=740&t=st=1704905037~exp=1704905637~hmac=526b4faecb3e8667754f314c4cda874035e2543e178005716ddd6fb8de954ea0"
            alt="Your Logo"
            className="h-8 w-8 mr-2"
          />
          Cat Adoption
        </Link>
      </div>
      <div className="flex-none">
        <div className="space-x-4">
          {/* Add relevant links to navigate to different sections */}
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
          <Link to="/pet-listing" className="btn btn-ghost">
            Pet Listing
          </Link>
          <Link to="/donationCampaigns" className="btn btn-ghost">
            Donation Campaigns
          </Link>
          {user?.email ? (
            <></>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Login
              </Link>
            </>
          )}
        </div>
        <div className="dropdown dropdown-end">
          {/* Use your user profile picture */}
          {user?.email && (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Profile"
                  src={
                    user?.email
                      ? user?.photoURL
                      : `https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg`
                  }
                />
              </div>
            </div>
          )}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link onClick={handleLogOut}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
