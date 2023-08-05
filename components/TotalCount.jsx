import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsShop, BsPeopleFill } from "react-icons/bs";

const TotalCount = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {/* container one */}
        <div className="bg-white rounded-lg w-64 h-32 text-center ">
          <div className="flex p-6 items-center">
            <div>
              <BiShoppingBag className="text-red-500 w-24 h-14">
                {" "}
              </BiShoppingBag>
            </div>
            <div>
              <p>Total Sales</p>
              <p className="text-2xl font-bold">$2,456</p>
            </div>
          </div>
        </div>

        {/* container two */}


        <div className="bg-white rounded-lg w-64 h-32 text-center ">
          <div className="flex p-6 items-center">
            <div>
              <BsShop className="text-indigo-800 w-24 h-14">
                {" "}
              </BsShop>
            </div>
            <div>
              <p className="">Total Expenses</p>
              <p className="text-2xl font-bold">$2,456</p>
            </div>
          </div>
        </div>


        {/* container three */}


        <div className="bg-white rounded-lg w-64 h-32 text-center ">
          <div className="flex p-6 items-center">
            <div>
              <BsPeopleFill className="text-green-500 w-24 h-14">
                {" "}
              </BsPeopleFill>
            </div>
            <div>
              <p>Total Visitors</p>
              <p className="text-2xl font-bold">$2,456</p>
            </div>
          </div>
        </div>

        {/* container four */}


        <div className="bg-white rounded-lg w-64 h-32 text-center ">
          <div className="flex p-6 items-center">
            <div>
              <BiShoppingBag className="text-indigo-800 w-24 h-14">
                {" "}
              </BiShoppingBag>
            </div>
            <div>
              <p>Total Orders</p>
              <p className="text-2xl font-bold">$2,456</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default TotalCount;
