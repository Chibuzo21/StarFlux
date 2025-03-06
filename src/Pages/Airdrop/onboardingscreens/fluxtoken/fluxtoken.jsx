import React from "react";
import "./fluxtoken.css";
import Button from "../../../../components/button/button";
// import "./"

import { Routes, Route, Navigate } from "react-router-dom";

const Fluxtoken = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return ( 
    <main className="bg-[555553] items-space-between min-h-screen  flex justify-center py-10  ">
      <section
        className="
      flex flex-col space-y-40

       "
      >
        <div>
          <p className="text-black ">cvccchhhhhhhhhhhhhhhhhhh dddd fjjf</p>
        </div>

        <div className="grid  text-center my-7 bg-green">
          <p className="my-3 text-start text-sm sm:text-md  space-y-6 ">
            {/* <div className="textSection"> */}
              <p>Rising Star</p>

              <p>Wow</p>
              <p>You have spent 5000</p>
              <p>stars You have earned</p>
              <p>200</p>
              <p>Flux token</p>
            {/* </div> */}
          </p>
        </div>
        <div className="bg-yellow sm:w-[100%] w-[100%] ">
          <Button onClick={handleClick}>Proceed</Button>
        </div>
      </section>
    </main>
  );
};
export default Fluxtoken;
