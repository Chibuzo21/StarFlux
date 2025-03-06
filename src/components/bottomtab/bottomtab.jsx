import React, { useState } from 'react';
import Airdrop from '../../Pages/Airdrop/airdrop';
import AirdropHome from '../../Pages/Airdrop/airdropHomePage';
import { AiFillHome } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";



const BottomTab = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabStyle = {
    padding: '10px 15px',
    cursor: 'pointer',
    textAlign: 'center',
    // flex: 1,
    // backgroundColor:"red"

    
  };

  const activeTabStyle = {
    ...tabStyle,
    // backgroundColor: '#e0f7fa',
    borderTop: '2px solid #03a9f4',
    fontWeight: 'bold',
  };

  const containerStyle = {
    display: 'flex',
    borderTop: '1px solid #ccc',
    // height:"20vh"
    // backgroundColor: '#f8f8f8',
  };

  const contentStyle = {
    // padding: '20px',
    textAlign: 'center',
    height:"89.5vh",
    backgroundColor:"red"
  };

  const getContent = () => {
    switch (activeTab) {
      case 'Home':
        return <div style={contentStyle}>
            Welcome to the Home screen! ff gkgkglggkg gggg mmmgmg gg
        <AirdropHome/>
        
        
        </div>;
      case 'Earn':
        return <div style={contentStyle}>
          
          Welcome to the Home screen! ff gkgkglggkg gggg mmmgmg gg
          <AirdropHome/></div>;
      case 'Invite':
        return <div style={contentStyle}>
            Welcome to the Home screen! ff gkgkglggkg gggg mmmgmg gg
            <AirdropHome/></div>;
      default:
        return null;
    }
  };

  return (
    <div  className="bg-blue-500  h-fit  ">
      <div style={contentStyle} >{getContent()}</div>
      <div className='width  text-white text-lg flex justify-between px-9 items-center bg-[#79857C]  rounded-xl border-[3px] border-white my-4"
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