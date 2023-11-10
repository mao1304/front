import React, { useState, useEffect } from 'react';
import './list.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EditProfessor from './EditProfessor';

<Router>
<div>
  <Routes>
    <Route path="/editar" element={<EditProfessor />} />
  </Routes>
</div>
</Router>
const RUDProfesor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://44prmzjk-8000.use2.devtunnels.ms/users/ProfList/usuarioP/') 
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h2>Tabla de profesores:</h2>
      {data && data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {data.map(item => (
            <tr key={item.username}>
              <td>{item.username}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>
                <Link to={`/editar/${item.username}`}>
                  <img src="path/to/your/logo.png" alt="Logo"  onClick={() => console.log('Logo Clicked. ID:', item.username)} />
                </Link>
              </td>
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

export default RUDProfesor;
