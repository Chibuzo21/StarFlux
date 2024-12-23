import React from "react";
import Star from "/Star.svg";

const ConnectWallet = ({ HandleClick }) => {
  return (
    <main className="bg-black items-center min-h-fit h-screen flex justify-center ">
      <section className=" text-white  h-[80%] flex flex-col items-center  ">
        <section className="flex items-center justify-center mb-5  gap-3 text-2xl  sm:text-3xl font-semibold">
          <p>Buy Telegram Stars</p>
          <img src={Star} width={40} />
        </section>
        <p className="mb-3 text-center text-sm sm:text-md">
          Top up Stars Balance for yourself or your friends and colleagues
        </p>

        <button onClick={HandleClick} className="ConnectButton">
          Connect Wallet
        </button>
      </section>
    </main>
  );
};

export default ConnectWallet;
