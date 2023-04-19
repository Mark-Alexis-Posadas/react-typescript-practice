// import React, { useState } from "react";

// type AuthUser = {
//   name: string;
//   email: string;
// };
// export const User = (props: AuthUser) => {
//   const [user, setUser] = useState<AuthUser | null>(null);

//   const handleLogin = () => {
//     setUser({
//       name: "Alexis",
//       email: "markalexisposadas@gmail.com",
//     });
//   };
//   const handleLogout = () => {
//     setUser(null);
//   };
//   return (
//     <>
//       <button onClick={handleLogin}></button>
//       <button onClick={handleLogout}></button>
//       <p>Name {user?.name}</p>
//       <p>Email {user?.email}</p>
//     </>
//   );
// };

//type assertion

import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const User = (props: AuthUser) => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Alexis",
      email: "markalexisposadas@gmail.com",
    });
  };

  return (
    <>
      <button onClick={handleLogin}></button>

      <p>Name {user.name}</p>
      <p>Email {user.email}</p>
    </>
  );
};
