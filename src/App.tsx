import React from "react";
import UserTable from "./components/UserTable";
import { Greet } from "./components/CodeEvolution/Greet";
import { Person } from "./components/CodeEvolution/Person";
import { PersonList } from "./components/CodeEvolution/PersonList";
import { Status } from "./components/CodeEvolution/Status";
import { Heading } from "./components/CodeEvolution/Heading";
import { Oscar } from "./components/CodeEvolution/Oscar";
import { Button } from "./components/CodeEvolution/Button";
import { Input } from "./components/CodeEvolution/Input";
import { Container } from "./components/CodeEvolution/Container";
import { User } from "./components/CodeEvolution/state/User";
// import { TextField } from "./components/TextField";
// const users = [
//   {
//     id: 1,
//     name: "Juan Dela Cruz",
//     email: "juan@example.com",
//     avatar:
//       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//   },
//   {
//     id: 2,
//     name: "Maria Santos",
//     email: "maria@example.com",
//     avatar:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 3,
//     name: "Pedro Garcia",
//     email: "pedro@example.com",
//     avatar:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   },
// ];

const App: React.FC = () => {
  // const personName = {
  //   firstName: "Mark Alexis",
  //   lastName: "Posadas",
  // };

  // const nameList = [
  //   {
  //     first: "alex",
  //     last: "posadas",
  //   },
  //   {
  //     first: "vegeta",
  //     last: "posadas",
  //   },
  //   {
  //     first: "goku",
  //     last: "posadas",
  //   },
  // ];
  return (
    <>
      {/* <TextField
        text="Mark Alexis Posdas"
        i={3}
        person={{ firstName: "Alexis", lastName: "Posadas" }}
        handleChange={(e) => {
          e.target.value;
        }}
      /> */}
      {/* <UserTable users={users} /> */}
      {/* <Greet name="Mark Alexis" messageFuckingCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>OSCAR GOES TO LEAONARDO DICARPIO </Heading>
      </Oscar> */}
      <Greet name="alexis" isLoggedIn={false} />
      <Button
        handClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />

      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ color: "red", fontSize: "120px" }} />
    </>
  );
};

export default App;
