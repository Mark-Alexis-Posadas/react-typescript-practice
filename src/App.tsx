import React from "react";
import UserTable from "./components/UserTable";
// import { TextField } from "./components/TextField";
const users = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@example.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    name: "Pedro Garcia",
    email: "pedro@example.com",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const App: React.FC = () => {
  return (
    <div>
      {/* <TextField
        text="Mark Alexis Posdas"
        i={3}
        person={{ firstName: "Alexis", lastName: "Posadas" }}
        handleChange={(e) => {
          e.target.value;
        }}
      /> */}
      <UserTable users={users} />
    </div>
  );
};

export default App;
