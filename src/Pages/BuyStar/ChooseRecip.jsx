import React from "react";
import { IoIosSearch } from "react-icons/io";

const ChooseRecip = () => {
  return (
    <main>
      <div className=" text-white my-5 text-lg">
        <p className="mb-3 font-semibold pl-3">Choose recipient</p>
        <div className="flex justify-between rounded-md items-center   bg-[#79857C] py-4 px-3">
          <span className="text-2xl font-bold">
            <IoIosSearch />
          </span>
          <input
            type="text"
            placeholder="Enter recipient user name"
            className="mx-3 flex-grow bg-transparent placeholder:text-white text-base focus:outline-none"
          />
        </div>
      </div>
    </main>
  );
};

export default ChooseRecip;
