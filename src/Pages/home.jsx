import React, { useState } from 'react';
import BuyStar from './BuyStar/BuyStar';
import Airdrop from './Airdrop/airdrop';
import TopTabs from '../components/toptab.component';

const Home = () => {
    const tabComponents = [
        { label: 'Buy Stars', component: <BuyStar /> },
        { label: 'Airdrop', component: <Airdrop /> },
      ];
      return(
        // <div style={{backgroundColor:"transparent", height:"100vh"}}>
    <main className=" items-space-between h-screen  flex justify-center  ">

      <TopTabs 
      tabComponents={tabComponents} 
      />
    </main>
        

        // </div>
      )
 
    }

export default Home;