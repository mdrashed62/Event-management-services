import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        console.log("Login successful:", result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error("Social login error:", error);
      });
  };

  return (
    <div className="flex justify-evenly mb-4">
      <div className="w-full px-8">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn bg-[#071952] text-white font-semibold px-4 lg:px-8 w-full py-3 rounded-lg "
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
