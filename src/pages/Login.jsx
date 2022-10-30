import React from 'react';
import Add from '../img/addAvatar.png';

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Name Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <input style={{ display: 'none' }} type="file" id="file" />
          
          <button>Войти</button>
        </form>
        <p>У вас нет аккаунта? Регистрация</p>
      </div>
    </div>
  );
};
