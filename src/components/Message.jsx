import React from 'react';

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://jguinovart.com/wp-content/uploads/2020/01/happy-1836445-scaled.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://jguinovart.com/wp-content/uploads/2020/01/happy-1836445-scaled.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
