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
        <div>

          <TopTabs 
          tabComponents={tabComponents} 
          />
        

        </div>
      )
 
    }

export default Home;