import React, { useState } from "react";

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}></button>
      <p>User is {isLoggedIn ? "logged in" : "logged out"}</p>
    </>
  );
};
