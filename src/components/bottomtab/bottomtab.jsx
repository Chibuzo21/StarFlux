import React, { useState } from 'react';
import Airdrop from '../../Pages/Airdrop/airdrop';
import AirdropHome from '../../Pages/Airdrop/airdropHomePage';
import { AiFillHome } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import background from "../../assets/background1.jpg"
import Task from '../../Pages/Airdrop/airdropTasks';
import Invite from '../../Pages/Airdrop/airdropinvite';
// import Bck from "../../background1.jpg"



const BottomTab = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabStyle = {
    // padding: '10px 15px',
    cursor: 'pointer',
    textAlign: 'center',
      padding:"25px",
      // position :"absolute" ,
      // bottom :"0",
      
    // flex: 1,
    // backgroundColor:"red"

    
  };

  const activeTabStyle = {
    ...tabStyle,
    // backgroundColor: '#e0f7fa',
    // borderTop: '2px solid #03a9f4',
    // fontWeight: 'bold',
  
    color:"red"
  };

  const containerStyle = {
    display: 'flex',
    borderTop: '1px solid #ccc',
    // height:"20vh"
    backgroundColor: 'green',
    width:"100%"
  };

  const contentStyle = {
    // padding: '20px',
    // textAlign: 'center',
    // height:"100%",
    // backgroundColor:"red"
  };

  const getContent = () => {
    switch (activeTab) {
      case 'Home':
        return <div style={{width:"100%"}}>
        <AirdropHome/>
        
        
        </div>;
      case 'Earn':
        return <div style={{width:"100%"}}>
          
          <Task/></div>;
      case 'Invite':
        return <div style={{width:"100%"}}>
            <Invite/></div>;
      default:
        return null;
    }
  };

  return (
    <div 
    
    style={{
      // backgroundImage:url[("../../assets/background1.jpg")]
    }}
    
    // h-[100%] flex flex-col  justify-end px-5   bottom-0 left-0
    className="
     h-full flex flex flex-col   justify-end
    "
    >
      <div style={contentStyle} > {getContent()}</div>
      <div style={{
        paddingRight:"",
        paddingLeft:"20px"
      }}>

      </div>
      <div className=' width-[20%]  text-white text-lg flex justify-between px-9 items-center bg-blue-400  rounded-xl  "
             bottom-0 left-0
            
            '>
        <div
          style={activeTab === 'Home' ? activeTabStyle : tabStyle}
          onClick={() => handleTabClick('Home')}
        >
          <AiFillHome color='' size={"24px"} />

          
        </div>
        <div
          style={activeTab === 'Earn' ? activeTabStyle : tabStyle}
          onClick={() => handleTabClick('Earn')}
        >
          <GiTwoCoins color='' size={"24px"} />
        </div>
        <div
          style={activeTab === 'Invite' ? activeTabStyle : tabStyle}
          onClick={() => handleTabClick('Invite')}
        >
          <FaUsers  size={"24px"}/>
        </div>
      </div>
    </div>
  );
};

export default BottomTab;