import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineBars, AiFillSetting } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar text-white  bg-black pr-6">
      <div className="flex-1">

        <div className="flex items-center">
          <BiHomeAlt />
          <h3 className="p-2">Home</h3>
        </div>

        <div className="flex items-center px-3">
          <AiOutlineBars />
          <h3 className="p-2">Contents</h3>
        </div>

        <div className="flex items-center">
          <FaAlignRight />
          <h3 className="p-2">Categories</h3>
        </div>

        <div className="flex items-center pl-3">
          <AiFillSetting />
          <h3 className="p-2">Settings</h3>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="bg-white text-black rounded-full flex items-center">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkuLRwnB8594gN1D8dzJJ2Nl7hVZvzotWrGTmt7JFRLHMlK7IJZU-ZtLlo7DT7wtTnoo&usqp=CAU" />
            </div>
          </div>
          <p className="p-2">Ariful Islam</p>
        </div>

        
      </div>
    </div>
  );
};

export default NavBar;
