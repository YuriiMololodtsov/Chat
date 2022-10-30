import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Найти пользователя..." />
      </div>
      <div className="userChat">
        <img
          src="https://jguinovart.com/wp-content/uploads/2020/01/happy-1836445-scaled.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Yurii</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
