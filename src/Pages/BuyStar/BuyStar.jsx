import React from "react";
import ChooseRecip from "./ChooseRecip";
import ChooseQty from "./ChooseQty";
import { Packages } from "./Package";
import Star from "/star2.svg";

const BuyStar = () => {
  return (
    <main className="bg-black items-center min-h-screen h-fit flex justify-center py-10 ">
      <section className=" flex items-center  flex-col text-white ">
        <div className="bg-white rounded-xl text-black mb-6 text-lg w-[70%]">
          <button className="bg-[#79857C] py-2  w-[50%] font-medium rounded-xl text-white">
            Buy Stars
          </button>
          <button className="font-medium mx-6">Airdrop</button>
        </div>
        <div className="grid gap-4 text-center my-4">
          <p className="sm:text-3xl text-2xl font-semibold">
            Buy Telegram Stars
          </p>
          <p className="my-3 text-center text-sm sm:text-md c">
            Top up Stars Balance for yourself or your friends and colleagues
          </p>
        </div>
        <div className="sm:w-[100%] w-[90%]">
          <ChooseRecip />
          <ChooseQty />
        </div>
        <div className=" sm:w-[100%] w-[90%]">
          <p className="font-medium pl-5 text-lg">Or select a package</p>
          {Packages.map((Package) => (
            <div
              key={Package.id}
              className="text-white text-lg flex justify-between px-8 items-center bg-[#79857C] py-3 rounded-xl border-[3px] border-white my-4"
            >
              <div className="flex justify-around items-center gap-4 ">
                <input type="radio" />
                <div className="flex gap-2">
                  <img src={Star} />
                  <p>{Package.num}</p>
                  <p>Stars</p>
                </div>
              </div>

              <p>0.1197</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BuyStar;
