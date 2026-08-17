import { useEffect, useState } from "react";
import { useNavigate } from 'react-router'
import api from "../../lib/axios";

export function Step1() {
  const [users, setUsers] = useState([]);
  
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Failed to load users:", error);
      }
    };
    fetchUsers();
  }, []);

  function next(id) {
    api.post('/orders?step=1', { user_id: id })
      .then((response) => {
        if (response.data.success) {
          navigate('/orders/add/2')
        }
      })
  }

  return (
    <>
    <h1>choose a publishing house to use their services : </h1>
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => { next(user.id) }}
          role="button"
          style={{ cursor: "pointer" }}
        >
          <p>{user.publisher_name}</p>
          <p>{user.location}</p>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </>
  );
}