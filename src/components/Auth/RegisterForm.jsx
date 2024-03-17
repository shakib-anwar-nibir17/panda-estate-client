/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const RegisterForm = ({ register, setRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
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
      const res = await fetch("/api/auth/signup", {
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
        title: "Registration Success",
        text: "Welcome to Panda Estate",
        icon: "success",
      });
      navigate("/");
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
          <div className="w-3 h-3 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-custom-main"></div>
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
      <button
        type="button"
        className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
      >
        <svg
          viewBox="-0.5 0 48 48"
          version="1.1"
          className="w-6 inline-block mr-3"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>Google-color</title> <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Color-" transform="translate(-401.000000, -860.000000)">
                <g id="Google" transform="translate(401.000000, 860.000000)">
                  <path
                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                    id="Fill-1"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                    id="Fill-2"
                    fill="#EB4335"
                  ></path>
                  <path
                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                    id="Fill-3"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                    id="Fill-4"
                    fill="#4285F4"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        Continue with Google
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  register: PropTypes.bool,
  setRegister: PropTypes.func,
};

export default RegisterForm;
