import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../../firebase/firebase.config";
import { signInSuccess } from "../../redux/user/userSlice";
import GoogleSvg from "./GoogleSvg";

const GoogleSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("http://localhost:3000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      Swal.fire({
        title: "Google Login Successful",
        text: "Welcome to panda estate",
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      console.log("could not sign in with google", error);
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
