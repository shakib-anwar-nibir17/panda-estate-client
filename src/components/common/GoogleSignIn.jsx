import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../../firebase/firebase.config";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { signInSuccess } from "../../redux/user/userSlice";
import GoogleSvg from "./GoogleSvg";

const GoogleSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      console.log(result.user.photoURL);
      const response = await axiosSecure.post(
        "/api/auth/google",
        {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      dispatch(signInSuccess(data));
      Swal.fire({
        title: "Google Login Successful",
        text: "Welcome to Panda Estate",
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with Google", error);
      Swal.fire({
        title: "Google Login Error",
        text: "Could not sign in with Google. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
    >
      <GoogleSvg />
      Continue with Google
    </button>
  );
};

export default GoogleSignIn;
