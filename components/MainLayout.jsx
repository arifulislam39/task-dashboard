import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import { BiPlus } from "react-icons/bi";
import {FaThLarge} from "react-icons/fa"

const MainLayout = ({ children }) => {
  return (
    <div className="bg-base-200">
      <NavBar />

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <Header />

          <div className="p-6">
            <main>{children}</main>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-slate-950">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full  text-white">
            {/* Sidebar content here */}
            <li>
            
              <div className="flex text-xl font-bold">
              <BiPlus />
              <p>New Item</p>
              </div>
            </li>
            <li>


              <div className="collapse collapse-arrow bg-slate-950 text-white">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-bold flex items-center">
                <FaThLarge />
                 <p className="pl-3"> Dashboard</p>
                </div>
                <div className="collapse-content text-xl font-bold">
                  <p>Commerce</p>
                  <p>Analytics</p>
                  <p>Crypto</p>
                  <p>Helpdesk</p>
                  <p>Monitoring</p>
                  <p>Fitness</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-slate-950 text-white">
                <input type="radio" name="my-accordion-2" />

                
                <div className="collapse-title text-xl font-bold flex items-center">
                <FaThLarge />
                <p className="pl-3"> Applications</p>
                </div>
               </div>
              <div className="collapse collapse-arrow bg-slate-950 text-white">
                <input type="radio" name="my-accordion-2" />

                
                <div className="collapse-title text-xl font-bold flex items-center">
                <FaThLarge />
                <p className="pl-3"> Elements</p>
                </div>
               </div>
              <div className="collapse collapse-arrow bg-slate-950 text-white">
                <input type="radio" name="my-accordion-2" />

                
                <div className="collapse-title text-xl font-bold flex items-center">
                <FaThLarge />
                <p className="pl-3"> Datagrid</p>
                </div>
               </div>
              <div className="collapse collapse-arrow bg-slate-950 text-white">
                <input type="radio" name="my-accordion-2" />

                
                <div className="collapse-title text-xl font-bold flex items-center">
                <FaThLarge />
                <p className="pl-3"> Settings</p>
                </div>
               </div>




            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
