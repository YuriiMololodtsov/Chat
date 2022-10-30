import React from 'react';
import Add from '../img/addAvatar.png';

export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Name Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Загрузить аватар</span>
          </label>
          <button>Регистрация</button>
        </form>
        <p>У вас уже есть аккаунт? Войти</p>
      </div>
    </div>
  );
};
