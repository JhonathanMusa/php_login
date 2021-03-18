import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function List() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await Axios.get("http://localhost:8000/api/users");
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="mt-5">
      {users.map((detail, id) => (
        <div key={id}>
          <div className="card shadow-lg">
            <h2 className="card-header bg-dark">{detail.name}</h2>
            <div className="card-body">
              <p className="text">{detail.text}</p>
              <p>{detail.createAt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}