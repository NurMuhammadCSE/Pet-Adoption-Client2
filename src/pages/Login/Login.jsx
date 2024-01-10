import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (
          error.code === "auth/invalid-credential" ||
          error.code === "auth/user-not-found"
        ) {
          setErrors("Email and Password is not Correct");
        } else {
          setErrors("Incorrect password. Please try again.");
        }
        console.log(error.message, error.code);
      });
  };

  return (
    <>
      <Helmet>
        <title>Robot || Login</title>
      </Helmet>
      <div className="hero min-h-screen my-6">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-96 shadow-2xl">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                  {/* <p className="text-red-500">{errors}</p> */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <p className="text-red-500">{errors}</p>

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                Brand New to Robot Toys{" "}
                <Link className="text-orange-600 font-bold" to="/signup">
                  Sign Up
                </Link>{" "}
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
