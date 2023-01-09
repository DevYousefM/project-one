import React, { useState } from "react";
import "../css/clients.css";
import {
  faEllipsis,
  faGear,
  faLifeRing,
  faPlus,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/home.css";

export default function Projects() {
  const [clientList, setClientList] = useState(false);
  const handleClientList = () =>
    clientList ? setClientList(false) : setClientList(true);

  return (
    <div className="w-full projects pt-6">
      <div className="flex justify-between items-center mb-10 mt-10">
        <div>
          <h2 className=" capitalize text-gray-600 text-2xl mobile-l:text-xl font-semibold">
            Projects List
          </h2>
          <p className="text-gray-500 mt-3 mobile-l:mt-1 mobile-l:text-xs">
            A total of 543 projects.
          </p>
        </div>
        <div className="flex">
          <button className="flex items-center leading-snug bg-bg-main text-white py-1 mobile-l:py-[2px] font-semibold px-4 mobile-l:px-2 rounded-[4px] text-center">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-lg mobile-l:text-base"
            />
            <span className="ml-2  mobile-l:text-sm mobile-l:ml-1 leading-loose capitalize	">
              Create Project
            </span>
          </button>
        </div>
      </div>

      <div className=" w-full bg-white p-6">
        <div className="flex justify-between">
          <input
            type="text"
            className=" placeholder:text-slate-300 text-[13px] font-normal w-40 border placeholder:font-medium rounded px-4 py-[6px] outline-none focus:border-bg-main  "
            placeholder="Type in to search"
          />
          <div className="flex items-center">
            <label className="text-gray-500 mobile-l:hidden mr-3">Show</label>
            <div className="dropdown ">
              <select className=" border rounded focus:border-bg-main font-normal text-gray-700 focus:outline-none pr-[50px] py-[5px] pl-[10px] text-[13px] appearance-none text-center">
                <option value="10" selected>
                  10
                </option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border rounded mt-4 overflow-x-scroll">
          <table className="w-full">
            <thead className=" border-b">
              <tr className="w-full">
                <th
                  className=" min-w-[4rem]"
                  id="hash"
                  style={{ textAlign: "center" }}
                >
                  #
                </th>
                <th className="client-th  min-w-[11rem]">Client</th>
                <th className="client-th min-w-[11rem]">Project</th>
                <th className="client-th min-w-[12rem]">
                  Profit / Start - Finish
                </th>
                <th className="client-th min-w-[10rem]">Invoiced / Cost</th>
                <th className="client-th min-w-[9rem] ">P.Tasks</th>
                <th className="client-th min-w-[10rem]">Status</th>
                <th className="min-w-[4rem]"></th>
              </tr>
            </thead>
            <tbody className=" hover:shadow-lg transition-shadow border-b">
              <tr>
                <td className="clients-td text-center text-slate-400">1</td>
                <td className="clients-td">
                  <div className="flex items-center py-2 ">
                    <div className="w-8 h-8 p-1 rounded-full bg-bg-main flex justify-center items-center">
                      <span className=" text-sm text-white">YM</span>
                    </div>
                    <div className=" ml-3 mr-2 flex flex-col">
                      <span
                        className=" text-gray-800 font-normal "
                        id="profile"
                      >
                        MY Karaj
                      </span>
                      <span className=" text-gray-500">+201004632317</span>
                    </div>
                  </div>
                </td>
                <td className="clients-td text-slate-400">
                  <div className=" ml-3 mr-2 flex flex-col">
                    <span className=" text-gray-800 font-normal " id="profile">
                      TATA XENON
                    </span>
                    <span className=" text-gray-500">34223</span>
                  </div>
                </td>
                <td className="clients-td">
                  <div className=" ml-3 mr-2 flex flex-col">
                    <span className=" text-gray-800 font-normal " id="profile">
                      KSh0.00
                    </span>
                    <span className=" text-gray-500">
                      Dec 11, 22 - Dec 18, 22
                    </span>
                  </div>
                </td>
                <td className="pl-5 text-slate-400 clients-td">
                  <div className=" ml-3 mr-2 flex flex-col">
                    <span className=" text-gray-800 font-normal " id="profile">
                      KSh0.00
                    </span>
                    <span className=" text-gray-500">KSh0.00</span>
                  </div>
                </td>
                <td className="pl-8 clients-td text-slate-400">0/0 </td>
                <td>
                  <div className="status text-yellow-500 before:bg-yellow-500 bg-yellow-200">
                    In Progress
                  </div>
                </td>
                <td className="clients-td text-center">
                  <div
                    onClick={handleClientList}
                    className=" relative flex items-center justify-center  text-gray-500 text-xl hover:bg-gray-300 w-12 h-12 px-[7px] py-[6px] transition-all cursor-pointer rounded-full"
                  >
                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>
                </td>
              </tr>
            </tbody>
            <div
              id="clientList"
              className="fixed w-[170px] border bg-white right-36 -translate-y-1/2 rounded-lg shadow-xl transition z-[999]"
              style={{
                top: clientList ? "50%" : "-300px",
                transition: ".25s",
                opacity: clientList ? "1" : "0",
              }}
            >
              <ul className=" text-gray-600 text-sm text-start capitalize font-normal">
                <li className="my-4 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faGear} />
                    <span>View Details</span>
                  </a>
                </li>
                <li className="my-4 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faLifeRing} />
                    <span>Edit Details</span>
                  </a>
                </li>

                <div className=" border-b h-[1px] w-100 mt-3"></div>
                <li className="my-4 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faRightToBracket} />
                    <span>Create Job Card</span>
                  </a>
                </li>
                <li className="my-4 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faRightToBracket} />
                    <span>Create Quote</span>
                  </a>
                </li>
                <li className="my-4 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faRightToBracket} />
                    <span>Create Invoice</span>
                  </a>
                </li>
                <div className=" border-b h-[1px] w-100 mt-3"></div>
                <li className="my-4 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faRightToBracket} />
                    <span>Cancel Project</span>
                  </a>
                </li>
                <li className="my-4 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faRightToBracket} />
                    <span>Delete Project</span>
                  </a>
                </li>
              </ul>
            </div>
          </table>
        </div>

        <div className="flex justify-between mt-4">
          <ul className=" text-base rounded outline-none flex ">
            <li className=" text-gray-400 cursor-pointer hover:bg-gray-200 py-[5px] px-4 border rounded-l">
              Prev
            </li>
            <li className="mobile-l:hidden text-gray-500 cursor-pointer hover:bg-gray-200 py-[1px] px-[14px] leading-loose border-y border-r">
              1
            </li>
            <li className="mobile-l:hidden text-gray-500 active cursor-pointer hover:bg-gray-200 py-[1px] px-[14px] leading-loose border-y border-r">
              2
            </li>
            <li className="mobile-l:hidden text-gray-500 cursor-pointer hover:bg-gray-200 py-[1px] px-[14px] leading-loose border-y border-r">
              ...
            </li>
            <li className="text-gray-500 cursor-pointer hover:bg-gray-200 py-[5px] px-4 border rounded-r border-l-0">
              Next
            </li>
          </ul>
          <div className="flex items-center">
            <label className="text-gray-500 text-xs mr-3">1 -10 of 184</label>
          </div>
        </div>
      </div>
    </div>
  );
}
