import React, { useState } from "react";
import "../css/clients.css";
import {
  faChartArea,
  faCheckCircle,
  faEllipsis,
  faGear,
  faLifeRing,
  faPlus,
  faPlusCircle,
  faRightToBracket,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/home.css";

export default function InventoryList() {
  const [clientList, setClientList] = useState(false);
  const handleClientList = () =>
    clientList ? setClientList(false) : setClientList(true);

  return (
    <div className="w-full pt-6 invoices">
      <div className="flex justify-between items-center mb-10 mt-10">
        <div>
          <h2 className=" capitalize text-gray-600 text-2xl font-semibold mobile-l:text-xl">
            Inventory
          </h2>
          <p className="text-gray-500 mt-3 mobile-l:text-xs mobile-l:mt-1">
            Create and manage your inventory here.
          </p>
        </div>
        <div className="flex">
          <button className="flex items-center leading-snug bg-bg-main text-white py-1 mobile-l:p-2 md:py-[.1rem] font-semibold px-4 md:px-3 rounded-[4px] text-center">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-md mobile-l:text-base"
            />
            <span className="ml-2 leading-loose capitalize text-sm mobile-l:hidden">
              create Item
            </span>
          </button>
        </div>
      </div>

      <div className=" w-full bg-white p-6">
        <div className="flex justify-between">
          <input
            type="text"
            className=" placeholder:text-slate-300 text-[13px] font-normal mobile-l:w-32 mobile-l:text-[10px] w-40 border placeholder:font-medium rounded px-4 mobile-l:px-2 py-[6px] mobile-l:py-[4px] outline-none focus:border-bg-main  "
            placeholder="Type in to search"
          />
          <div className="flex items-center">
            <label className="text-gray-500 mr-3 mobile-l:hidden">Show</label>
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
                <th className="client-th  min-w-[11rem]">Item / Shelf No.</th>
                <th className="client-th mobile-l:hidden min-w-[12rem]">
                  Quantity / Item Code
                </th>
                <th className="client-th mobile-l:hidden min-w-[8rem]">
                  Unit Code
                </th>
                <th className="client-th mobile-l:hidden min-w-[8rem]">
                  Supplier
                </th>
                <th className="client-th min-w-[8rem] mobile-l:hidden md:min-w-[14rem]">
                  Status
                </th>
                <th className="min-w-[4rem] mobile-l:min-w-[9rem]"></th>
              </tr>
            </thead>
            <tbody className=" hover:shadow-lg transition-shadow border-b">
              <tr>
                <td className="clients-td text-center text-slate-400">1</td>
                <td className="clients-td">
                  <div className="flex items-center py-2 ">
                    <div className=" ml-3 mr-2 flex flex-col">
                      <span
                        className=" text-gray-800 font-normal "
                        id="profile"
                      >
                        Philips Lamp
                      </span>
                    </div>
                  </div>
                </td>
                <td className="clients-td mobile-l:hidden pl-10 text-slate-400">
                  2.00
                </td>
                <td className="clients-td mobile-l:hidden">KSh-400.000</td>
                <td className="pl-6 text-slate-400 mobile-l:hidden clients-td">
                  Test
                </td>
                <td>
                  <div className="status before:bg-green-500 bg-green-200 text-green-500">
                    Active
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
            <tbody className=" hover:shadow-lg transition-shadow border-b">
              <tr>
                <td className="clients-td text-center text-slate-400">1</td>
                <td className="clients-td">
                  <div className="flex items-center py-2 ">
                    <div className=" ml-3 mr-2 flex flex-col">
                      <span
                        className=" text-gray-800 font-normal "
                        id="profile"
                      >
                        Philips Lamp
                      </span>
                    </div>
                  </div>
                </td>
                <td className="clients-td mobile-l:hidden pl-10 text-slate-400">
                  2.00
                </td>
                <td className="clients-td mobile-l:hidden">KSh-400.000</td>
                <td className="pl-6 text-slate-400 mobile-l:hidden clients-td">
                  Test
                </td>
                <td>
                  <div className="status before:bg-red-500 bg-red-200 text-red-500">
                    Out of Stock
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
                  <a
                    href="/clients/profile"
                    className="hover:text-bg-main transition-all"
                  >
                    <FontAwesomeIcon className="mr-2" icon={faCheckCircle} />
                    <span>View Details</span>
                  </a>
                </li>
                <li className="my-4 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faPlusCircle} />
                    <span>Edit Details</span>
                  </a>
                </li>

                <li className="my-4 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faChartArea} />
                    <span>Create Job Card</span>
                  </a>
                </li>
                <li className="my-4 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faTrash} />
                    <span>Create Quote</span>
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
            <li className=" mobile-l:hidden text-gray-500 cursor-pointer hover:bg-gray-200 py-[1px] px-[14px] leading-loose border-y border-r">
              1
            </li>
            <li className="mobile-l:hidden text-gray-500 active cursor-pointer hover:bg-gray-200 py-[1px] px-[14px] leading-loose border-y border-r">
              2
            </li>
            <li className=" mobile-l:hidden text-gray-500 cursor-pointer hover:bg-gray-200 py-[1px] px-[14px] leading-loose border-y border-r">
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
