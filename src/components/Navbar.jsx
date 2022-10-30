import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Name Chat</span>
      <div className="user">
        <img
          src="https://jguinovart.com/wp-content/uploads/2020/01/happy-1836445-scaled.jpg"
          alt=""
        />
        <span>Yurii</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
