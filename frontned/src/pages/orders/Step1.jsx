import { useEffect, useState } from "react";
import { useNavigate } from 'react-router'
import api from "../../lib/axios";
import { UserCard } from "../../components/UserCard";

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
          navigate('/guestOrder/2')
        }
      })
  }

  return (
    <>
      <h1
        style={{
          color: 'var(--primary)'
        }}
      >•choose a publishing house to use their services : </h1>
      <div
        style={{
          cursor: "pointer",
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => { next(user.id) }}
            role="button"
          >
            <UserCard
              name={user.publisher_name}
              location={user.location}
              email={user.email}
            />
          </div>
        ))}
      </div>
    </>
  );
}