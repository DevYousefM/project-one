import React from "react";
import "../css/clients.css";
import {
  faChartArea,
  faCheckCircle,
  faEllipsis,
  faPlus,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/home.css";

export default function Recieveables() {
  return (
    <div className="w-full pt-6 invoices">
      <div className="flex justify-between items-center mb-10 mt-10">
        <div>
          <h2 className=" capitalize text-gray-600 text-2xl font-semibold mobile-l:text-xl">
            recieveables
          </h2>
          <p className="text-gray-500 mt-3 mobile-l:text-xs mobile-l:mt-1">
            Confirm receipt of parts into inventory.
          </p>
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
                <th className="client-th md:hidden min-w-[11rem]">Supplier</th>
                <th className="client-th min-w-[12rem]">Vehicle</th>
                <th className="client-th min-w-[8rem]">Item</th>
                <th className="client-th md:hidden min-w-[8rem]">Quantity</th>
                <th className="client-th min-w-[8rem] md:hidden">Unit Cost</th>
                <th className="client-th min-w-[9rem]">Confirm</th>
              </tr>
            </thead>
            <tbody className=" hover:shadow-lg transition-shadow border-b">
              <tr>
                <td className="clients-td text-center text-slate-400">1</td>
                <td className="clients-td md:hidden">
                  <div className="flex items-center py-2 ">
                    <div className=" ml-3 mr-2 flex flex-col">
                      <span
                        className=" text-gray-800 font-normal "
                        id="profile"
                      >
                        sumathi
                      </span>
                    </div>
                  </div>
                </td>
                <td className="clients-td md:pl-0 pl-5 text-slate-400">
                  GMC • ljhgcd872e
                </td>
                <td className="pl-3 md:pl-0 text-slate-400 clients-td">
                  change oil filter
                </td>
                <td className="pl-6 md:hidden text-slate-400 clients-td">1</td>
                <td className="clients-td md:hidden">KSh-400.000</td>
                <td>
                  <button className="flex h-fit items-center py-1 justify-center bg-bg-main text-white font-semibold px-1 w-full rounded-[4px] text-center">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className=" mobile-l:text-base"
                    />
                    <span className="ml-1 capitalize text-sm">
                      Confirm Receipt
                    </span>
                  </button>
                </td>
                <td className="clients-td text-center"></td>
              </tr>
            </tbody>
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
