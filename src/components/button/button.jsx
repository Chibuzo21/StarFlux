import React from 'react';


const Button = ({ children, onClick, style }) => {
  const defaultStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '10px 20px',
    border: '1px solid #ccc', // Optional: Add a subtle border
    cursor: 'pointer',
    fontSize: '16px',
    width:"100%"
    // Add any other default styles here
  };

  const combinedStyle = { ...defaultStyle, ...style };

  return (
    <button style={combinedStyle} className='text-black my-8 bg-white px-3 font-bold text-[20px] w-[90vw] sm:w-[37vw] rounded-md py-2 sm:py-4;
' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// Example Usage:

/*
const MyComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
      <Button onClick={handleClick} style={{ backgroundColor: 'lightblue', color: 'darkblue' }}>Custom Button</Button>
    </div>
  );
};

export default MyComponent;
*/