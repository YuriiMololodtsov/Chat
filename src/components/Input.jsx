import React from 'react';
import Img from '../img/img.png';
import Attach from '../img/attach.png';

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Написать сообщение..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Отправить</button>
      </div>
    </div>
  );
};

export default Input;