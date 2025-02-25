import React, { useState } from 'react';

const TopTabs = ({ tabComponents }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div 
    style={{ backgroundColor: "black", display: "flex",flexDirection:"column",justifyContent:"center", alignItems:"center" }
  }
  >
      <div style={{ display: 'flex' ,borderRadius:"10px",backgroundColor:"white", width:"27%",
        marginTop:"20px"
       }}>
        {tabComponents.map((tab, index) => (

          <div
            key={index}
            style={{
              padding: '10px 15px',
              cursor: 'pointer',
              display:"flex",
              width:"50%",
              borderRadius:"10px",
              alignContent: "center",
              justifyContent:"center",

              // borderBottom: activeTab === index ? '2px solid red' : '2px solid blue',
              fontWeight: activeTab === index ? 'bold' : 'normal',
              backgroundColor: activeTab === index ? '#79857C' : 'transparent', // Light red/blue background
              color: activeTab === index ? '#fff' : '#000',
            }}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div>
        {tabComponents[activeTab].component}
      </div>
    </div>
  );
};

export default TopTabs;