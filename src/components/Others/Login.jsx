import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcon from "../share/SocialIcon";

const Login = () => {
  const [check, setCheck] = useState(true);
  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <div className="">
      <div className="max-w-[1350px] mx-auto py-10">
        <div className="md:w-1/4 rounded-sm mx-auto text-center bg-white shadow-2xl py-5">
          <h2 className="text-gray-700 font-bold text-xl">Please Login</h2>
          <form action="">
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
            <div className="border-t-2 mt-5 w-4/5 mx-auto"></div>
            <div className="flex w-4/5 justify-between mt-4 mx-auto">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="check"
                  id="purmition"
                  className="mr-1 w-5"
                  onClick={handleCheck}
                />
                <label
                  htmlFor="purmition"
                  className="text-start text-xs font-light"
                >
                  Remember Me
                </label>
              </div>
              <button className="text-xs">
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              href="#_"
              class="px-5 py-2 mt-4 relative rounded group text-white font-medium inline-block w-4/5"
              disabled={check}
            >
              <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span class="relative">Login</span>
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
            <p className="inline mr-2">Don't have an Account</p>
            <Link to='/register' className="text-blue-600 underline">Register Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
