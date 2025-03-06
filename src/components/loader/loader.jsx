import React from 'react';
import StarImage from "../../assets/loading.png"

const StarLoader = ({ size = 130, color = 'gold' }) => {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    animation: 'spin 2s linear infinite',
    display: 'block', // Ensures the image behaves as a block element
    margin: '0 auto', // Centers the loader horizontally
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Or any height you need
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;


  return (
    <div 
    // style={{ backgroundColor: "yellow", display: "flex",flexDirection:"column",justifyContent:"center", alignItems:"center" }}

    style={containerStyle}
    >
      <style>{keyframes}</style>
      <img
        src={StarImage} // Replace with the actual path to your star image
        alt="Loading..."
        style={starStyle}
      />
    </div>
  );
};

export default StarLoader;

