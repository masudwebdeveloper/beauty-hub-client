import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcon from "../share/SocialIcon";
import "./Register.modules.css";

const Register = () => {
  const [check, setCheck] = useState(true);
  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <div className="">
      <div className="max-w-[1350px] mx-auto py-5">
        <div className="md:w-1/4 rounded-sm mx-auto text-center bg-white shadow-2xl py-5">
          <h2 className="text-gray-700 font-bold text-xl">Create an Account</h2>
          <form action="">
            <input
              type="text"
              name="name"
              className="input text-xs border w-4/5 py-2 px-4 rounded mt-2"
              placeholder="Full Name"
              required
            />
            <input
              type="number"
              name="number"
              className="input text-xs border w-4/5 py-2 px-4 rounded mt-3 m-0 -webkit-appearance-none"
              placeholder="Phone"
              required
            />
            <input
              type="email"
              name="email"
              className="input text-xs border w-4/5 py-2 px-4 rounded mt-3"
              placeholder="email"
              required
            />
            <input
              type="password"
              name="password"
              className="input text-xs border w-4/5 py-2 px-4 rounded mt-3"
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="confirm-password"
              className="input text-xs border w-4/5 py-2 px-4 rounded mt-3"
              placeholder="confirm password"
              required
            />
            <div className="border-t-2 mt-5 w-4/5 mx-auto"></div>
            <div className="flex w-4/5 items-center mt-2 mx-auto">
              <input
                type="checkbox"
                name="check"
                id="purmition"
                className="mr-1 w-5"
                onClick={handleCheck}
              />
              <label
                htmlFor="purmition"
                className="text-start text-xs font-bold"
              >
                <small>
                  By signing up you agree to our terms and conditions.
                </small>
              </label>
            </div>
            <button
              type="submit"
              href="#_"
              className="px-5 py-2 mt-2 relative rounded group text-white font-medium inline-block w-4/5"
              disabled={check}
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative">
                {check ? "Disabled" : "Register"}
              </span>
            </button>
          </form>
          <div className="flex items-center justify-center mt-5">
            <div className="w-1/5 h-[2px] bg-gray-400"></div>
            <div className="mx-5">Or Join With</div>
            <div className="w-1/5 h-[2px] bg-gray-400"></div>
          </div>
          <div className="mt-3">
            <SocialIcon></SocialIcon>
          </div>
          <div className="mt-2">
            <p className="inline mr-2">Already have an Account</p>
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
