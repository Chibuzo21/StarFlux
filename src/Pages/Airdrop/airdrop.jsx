import React, { useState } from "react";
import Loadingpage from "./onboardingscreens/loadingpage";
import Fluxtoken from "./onboardingscreens/fluxtoken/fluxtoken";
import AirdropHome from "./airdropHomePage";
import Bottomtab from "../../components/bottomtab/bottomtab";

const Airdrop = () => {
  return (
    <div 
    // className=""
    className="bg-black items-start  h-fit flex justify-center py-0  "
  
      style={{
        // backgroundColor: "brown",
        // height: "90vh",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        // width:"100%"
        // backgroundImage: url("../")
      }}

    >
      {/* <Loadingpage/> */}
      {/* <Fluxtoken /> */}\
      {/* <AirdropHome/> */}
      <Bottomtab/>
          </div>
  );
};

export default Airdrop;
