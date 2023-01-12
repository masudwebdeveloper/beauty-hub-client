import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SocialIcon = () => {
  return (
    <div className="flex gap-x-5 justify-center">
      <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full cursor-pointer">
        <FaFacebookF className="text-blue-500" />
      </div>
      <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full cursor-pointer">
        <FaGoogle className="text-red-600" />
      </div>
    </div>
  );
};

export default SocialIcon;
