import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand">Nebula Tech</div>
        <button className="get-users-btn" onClick={getUsers} disabled={loading}>
          {loading ? 'Loading...' : 'Get Users'}
        </button>
      </nav>

      {loading && <div className="loader">Loading...</div>}

      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
