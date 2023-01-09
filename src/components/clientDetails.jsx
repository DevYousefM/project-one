import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/clientDetails.css";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
export default function ClientDetails() {
  return (
    <div className="w-full details p-6 ">
      <div className="mb-6">
        <h2 className=" capitalize text-gray-600 text-xl md:text-base font-semibold">
          Client Information
        </h2>
        <p className="text-gray-500 mt-4 text-base md:text-sm">
          Basic client info, that gives client summary.
        </p>
      </div>

      <div className="w-full gap-20 md:gap-5 flex md:flex-col justify-between">
        <div className=" w-11/12 flex flex-col ">
          <div className="w-full flex justify-between items-center py-3">
            <span className="text-gray-500 text-sm">Client Name</span>
            <span className="text-gray-500 text-xs font-semibold">MYKARAG</span>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <span className="text-gray-500 text-sm">Email</span>
            <span className="text-gray-500 text-xs font-semibold">
              MYKARAG@gmail.com
            </span>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <span className="text-gray-500 text-sm">Address</span>
            <span className="text-gray-500 text-xs font-semibold">
              347 North Shahjahanpur, Motijheel
            </span>
          </div>
        </div>
        <div className=" w-11/12 flex flex-col ">
          <div className="w-full flex justify-between items-center py-3">
            <span className="text-gray-500 text-sm">Phone Number</span>
            <span className="text-gray-500 text-xs font-semibold">
              +8802589631475
            </span>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <span className="text-gray-500 text-sm">Active Projects</span>
            <span className="text-gray-500 text-xs font-semibold">3 / 3</span>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <span className="text-gray-500 text-sm">Balance</span>
            <span className="text-gray-500 text-xs font-semibold">
              KSh400.00
            </span>
          </div>
        </div>
      </div>

      <div className="w-full mt-7 flex flex-col  justify-between">
        <h6 className="text-sm pb-2 font-semibold text-gray-500 uppercase">
          additional information
        </h6>
        <div className="gap-20 md:gap-0 md:flex-col flex w-full">
          <div className=" w-11/12 flex flex-col">
            <div className="w-full flex justify-between items-center py-3">
              <span className="text-gray-500 text-sm">Invoices</span>
              <span className="text-gray-500 text-xs font-semibold">5</span>
            </div>

            <div className="w-full flex justify-between items-center py-3">
              <span className="text-gray-500 text-sm">Payments</span>
              <span className="text-gray-500 text-xs font-semibold">
                KSh6000.00
              </span>
            </div>
          </div>

          <div className=" w-11/12 flex flex-col">
            <div className="w-full flex justify-between items-center py-3">
              <span className="text-gray-500 text-sm">Quotes</span>
              <span className="text-gray-500 text-xs font-semibold">3 </span>
            </div>
            <div className="w-full flex justify-between items-center py-3">
              <span className="text-gray-500 text-sm">Status</span>
              <span
                className="text-green-500 text-xs font-semibold
               bg-green-200 py-2 px-4 pl-7 rounded-full
                relative
               after:content-[''] after:h-2 after:w-2 after:rounded-full after:top-[17px] after:-translate-y-1/2 after:left-[14px] after:absolute after:bg-green-700
               "
              >
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-7 flex flex-col justify-between border-t">
        <div className="my-6 flex justify-between">
          <h2 className=" capitalize text-gray-600 text-xl font-semibold">
            Client notes
          </h2>
          <a
            href="#/"
            className=" capitalize text-xs font-semibold text-color-main"
          >
            + add note
          </a>
        </div>
        <div className="flex w-full items-center">
          <div className="text-center text-gray-600 w-full flex flex-col items-center">
            <FontAwesomeIcon
              className=" text-xl rotate-180 border-4 mb-4 border-gray-600 w-fit rounded-full py-1 px-3"
              icon={faExclamation}
            />
            <p className="text-sm">No notes added yet!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
