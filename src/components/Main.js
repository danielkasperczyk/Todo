import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import Login from './Login';
import MainApp from './MainApp';

function Main() {
  const user = useContext(UserContext);
  return (
        user ?
        <MainApp user={user} />
      :
        <Login />

      
  );
}

export default Main;