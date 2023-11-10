import React, { useState, useEffect } from 'react';
import './list admin.css';



const RUDadmin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://44prmzjk-8000.use2.devtunnels.ms/users/AdminList/usuarioA/') 
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h2>Tabla de admin:</h2>
      {data && data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          {data.map(item => (
            <tr key={item.username}>
              <td>{item.username}</td>
            </tr>
          ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
};

export default RUDadmin;
