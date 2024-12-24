import React, { useState } from "react";
import { setLocalStorage } from "../utils/localStorage";

const Header = (props) => {


const logOutUser = ()=>{
localStorage.setItem('loggedInUser','')
props.changeUser('')
}
  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-">
        <h1 className="text-2xl font-medium">Hello</h1>
        <h1 className="text-3xl font-semibold">User 👋</h1>
      </div>
      <button onClick={logOutUser} className="bg-orange-500 text-lg font-medium text-white border-none rounded-full px-4 py-2">Log out</button>
    </div>
  );
};

export default Header;   


