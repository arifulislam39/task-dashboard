import React from "react";
import { FiSettings } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";

const Header = () => {
  return (
    <div className="bg-white mt-0 px-6">
      <div className="navbar bg-base-100">
        <div className="flex-1">

          <h3 className=" normal-case font-bold text-xl ">Add New Post</h3>

          <div className="flex items-center px-4">
            <BiPlus />
            <h3 className="p-2">Add Content</h3>
          </div>

          <div className="flex items-center">
            <FiSettings />
            <h3 className="p-2">Settings</h3>
          </div>

        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search Content"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
