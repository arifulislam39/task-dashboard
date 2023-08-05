import React from "react";
import {BiSave} from "react-icons/bi"

const TableForm = () => {
  return (
    <div className=" bg-white rounded-lg my-6">
      <div className="p-6">
        <h2 className="font-bold text-xl">Form title</h2>
        <p className="pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id
          soluta exercitationem quaerat?
        </p>

        {/* alert */}
        <div className="alert alert-error bg-red-200 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>

        {/* table */}

        <div className="overflow-x-auto border rounded-xl ">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th className="font-bold">Table title</th>
                <th className="font-bold">Table title</th>
                <th className="font-bold">Table title</th>
                <th className="font-bold">Table title</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td className="">Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div>
                    <button className="btn btn-sm btn-primary mr-3"><BiSave /> Edit</button>
                    <button className="btn btn-sm btn-warning"><BiSave />Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="">Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div>
                    <button className="btn btn-sm btn-primary mr-3"><BiSave /> Edit</button>
                    <button className="btn btn-sm btn-warning"><BiSave />Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="">Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div>
                    <button className="btn btn-sm btn-primary mr-3"><BiSave /> Edit</button>
                    <button className="btn btn-sm btn-warning"><BiSave />Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="">Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div>
                    <button className="btn btn-sm btn-primary mr-3"><BiSave /> Edit</button>
                    <button className="btn btn-sm btn-warning"><BiSave />Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="">Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div>
                    <button className="btn btn-sm btn-primary mr-3"><BiSave /> Edit</button>
                    <button className="btn btn-sm btn-warning"><BiSave />Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="">Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div>
                    <button className="btn btn-sm btn-primary mr-3"><BiSave /> Edit</button>
                    <button className="btn btn-sm btn-warning"><BiSave />Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="">Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div>
                    <button className="btn btn-sm btn-primary mr-3"><BiSave /> Edit</button>
                    <button className="btn btn-sm btn-warning"><BiSave />Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="">Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div>
                    <button className="btn btn-sm btn-primary mr-3"><BiSave /> Edit</button>
                    <button className="btn btn-sm btn-warning"><BiSave />Delete</button>
                  </div>
                </td>
              </tr>
            

            </tbody>
          </table>
        </div>

        {/* pagination */}
        <div className="text-center mt-6">
          <div className="join">
            <button className="join-item btn ">«</button>
            <button className="join-item btn mx-3">1</button>
            <button className="join-item btn text-white bg-blue-500">2</button>
            <button className="join-item btn mx-3">3</button>
            <button className="join-item btn">4</button>
            <button className="join-item btn mx-3">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableForm;
