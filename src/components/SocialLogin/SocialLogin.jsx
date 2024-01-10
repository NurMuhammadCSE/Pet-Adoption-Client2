import { useContext } from "react";
import {  useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });

      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;