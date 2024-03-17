/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/user/userSlice";
import GoogleSignIn from "../common/GoogleSignIn";

const LoginForm = ({ register, setRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        Swal.fire({
          title: "Login Error Encountered",
          text: data.message,
          icon: "error",
        });
        return;
      }
      dispatch(signInSuccess(data));
      Swal.fire({
        title: "Login Success",
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
      Swal.fire({
        title: "Login Error Encountered",
        text: error.message,
        icon: "error",
      });
    }
  };
  return (
    <form
      onSubmit={handleLogin}
      className={`p-8 w-full mr-0 ml-auto duration-500 ${
        register ? "lg:translate-x-full hidden lg:block" : ""
      }`}
    >
      <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Login</h1>
      <div className="space-y-5">
        <label htmlFor="_email" className="block">
          Email
        </label>
        <input
          id="email"
          type="u_email"
          onChange={handleChange}
          placeholder="example@example.com"
          className="p-3 block w-full outline-none border rounded-md invalid:border-black valid:border-blue-700"
          required
        />
        <label htmlFor="_password" className="block">
          Password
        </label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
          placeholder=".............."
          min={5}
          className="p-3 block w-full outline-none border rounded-md invalid:border-black valid:border-blue-700"
          required
        />
      </div>
      {/* button type will be submit for handling form submission*/}
      <button
        disabled={loading}
        type="submit"
        className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block hover:bg-custom-red-400 hover:text-white"
      >
        {loading ? (
          <div className="w-4 h-4 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-custom-main"></div>
        ) : (
          "Login"
        )}
      </button>
      <p className="mb-3 text-center">
        Don&apos;t have an account?
        <Link
          onClick={() => {
            setRegister(!register);
          }}
          className="underline font-semibold"
        >
          Register
        </Link>
      </p>
      <hr />
      <GoogleSignIn />
    </form>
  );
};

LoginForm.propTypes = {
  register: PropTypes.bool,
  setRegister: PropTypes.func,
};

export default LoginForm;
