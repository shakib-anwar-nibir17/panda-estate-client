import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { api } from "../../utils/baseUrl";
import GoogleSignIn from "../common/GoogleSignIn";

const RegisterForm = ({ register, setRegister }) => {
  const [formData, setFormData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`${api}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        Swal.fire({
          title: "Registration Error Encountered",
          text: data.message,
          icon: "error",
        });
        return;
      }
      setLoading(false);
      setError(null);
      Swal.fire({
        title: "Registration Success!! Login Again to Access. Thank You!!",
        text: "Welcome to Panda Estate",
        icon: "success",
      });
      setRegister(!register);
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Registration Error Encountered",
        text: error.message,
        icon: "error",
      });
      setError(error.message);
    }
  };

  console.log(formData);

  return (
    <form
      onSubmit={handleRegister}
      className={`p-8 w-full ${
        register ? "lg:translate-x-0" : "lg:-translate-x-full hidden lg:block"
      } duration-500`}
    >
      <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Register</h1>
      <div className="space-y-5">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          id="username"
          type="name"
          onChange={handleChange}
          placeholder="John Doe"
          className="p-3 block w-full outline-none border rounded-md invalid:border-blue-700 valid:border-green-500"
          required
        />
        <label htmlFor="u_email" className="block">
          Email
        </label>
        <input
          id="email"
          type="u_email"
          onChange={handleChange}
          placeholder="example@example.com"
          className="p-3 block w-full outline-none border rounded-md invalid:border-blue-700 valid:border-green-500"
          required
        />
        <label htmlFor="u_password" className="block">
          Password
        </label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
          placeholder=".............."
          min={5}
          className="p-3 block w-full outline-none border rounded-md invalid:border-blue-700 valid:border-green-500"
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
          "Create Account"
        )}
      </button>
      <p className="mb-3 text-center">
        Already have an account?
        <Link
          onClick={() => {
            setRegister(!register);
          }}
          className="underline font-semibold"
        >
          Login
        </Link>
      </p>

      <hr />
      <GoogleSignIn />
    </form>
  );
};

RegisterForm.propTypes = {
  register: PropTypes.bool,
  setRegister: PropTypes.func,
};

export default RegisterForm;
