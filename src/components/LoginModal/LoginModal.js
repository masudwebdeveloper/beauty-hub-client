import React from "react";
import Login from "../Others/Login";
import Register from "../Others/Register";

const LoginModal = ({setOpenModal}) => {
  return (
    <div className="w-full overflow-auto h-[100vh] flex justify-center items-center fixed top-0 left-0 z-50">
      <div className="w-full">
        <div className="text-center">off</div>
        <Login></Login>
        {/* <Register></Register> */}
      </div>
    </div>
  );
};

export default LoginModal;
