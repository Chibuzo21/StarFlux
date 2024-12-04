import React from "react";
import Star from "/star2.svg";

const ChooseQty = () => {
  return (
    <main>
      <div className=" text-white my-5 text-lg">
        <p className="mb-3 font-semibold pl-3">
          Choose quantity of telegram star
        </p>
        <div className="flex justify-between rounded-md items-center   bg-[#79857C] py-4 px-3">
          <img src={Star} />
          <input
            type="text"
            placeholder="Enter amount from 50 to 1,000,000"
            className="mx-3 flex-grow bg-transparent placeholder:text-white text-base focus:outline-none"
          />
        </div>
      </div>
    </main>
  );
};

export default ChooseQty;
