import React from "react";
import Table from "react-bootstrap/Table";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = ({ users }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <img
                src={user.avatar}
                alt={user.name}
                style={{ width: "2rem" }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
