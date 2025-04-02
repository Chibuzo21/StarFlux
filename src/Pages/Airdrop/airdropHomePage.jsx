import React from "react";
import CardBackground from "../../assets/card.jpg";
import "./airdrop.css";

const AirdropHome = () => {
  return (
    // items-center   flex justify-center  bg-green-400 "
    <div
      className="card"
      style={{
        // height:"780px",
        paddingTop: "0px",
        backgroundColor: "blue",
        height: "83vh",
        paddingRight: "10px",
        paddingLeft: "10px",
      }}
    >
      <div style={{ color: "transparent" }}>
        Welcome to the Home screen! ff gkgkglggkg gggg mmmgmg gg
      </div>
      {/* <section
        className=" 
    
        flex flex-col space-y-20
        justify-center items-center  flex
        
  
         "
         > */}
      <div style={{}}>
        <div
          // style={{
          //   // backgroundImage:url("../../assets/card.jpg"),

          // }}
          id="card"
        >
          <p>200</p>
        </div>
        <div style={{ height: "180px", paddingTop: "30px" }}>
          <p class="text-xl">something will happen here, stay tuned !</p>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
};
export default AirdropHome;
