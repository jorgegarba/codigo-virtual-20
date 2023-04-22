import React from "react";
import { useState } from "react";


const AppEjemplo = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();

      setUser(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    
    <div className="App">
   
      <div className="container">
        <h1>Buscador de Usuarios</h1>
        <div className="grid">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="ingresa el nombre de usuario"
          />
        </div>
        <div>
          <button onClick={fetchUser}>Buscar</button>
        </div>
        <article>
          <div className="container">
            <img src={user.avatar_url} alt="avatar" className="b-5" />
            <h4>{user.login}</h4>
            <p>{user.bio}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AppEjemplo;
