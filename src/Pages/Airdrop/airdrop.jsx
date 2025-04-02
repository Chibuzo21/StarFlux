import React, { useState } from "react";
import Loadingpage from "./onboardingscreens/loadingpage";
import Fluxtoken from "./onboardingscreens/fluxtoken/fluxtoken";
import AirdropHome from "./airdropHomePage";
import Bottomtab from "../../components/bottomtab/bottomtab";

const Airdrop = () => {
  return (
    <div 
    
    // className=""
    // className="bg items-start flex flex-1  justify-center py-0  "
  
      style={{
        backgroundColor: "black",
        height: "100%",
        display: "flex",
        flex:"1",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        // width:"100%"
        // backgroundImage: url("../")
      }}

    >
      {/* <Loadingpage/> */}
      {/* <Fluxtoken /> */}
      {/* <AirdropHome/> */}
      <Bottomtab/>
          </div>
  );
};

export default Airdrop;
