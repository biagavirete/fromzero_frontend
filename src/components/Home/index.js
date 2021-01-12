import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('@token:fromZero');
    console.log(token);
    if (token) {
      api
        .get("/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setUsers(response.data));
    }
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nome</th>
            <th>Usuário</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}