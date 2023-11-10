import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

  const EditProfessor = () => {
  const { username } = useParams();
  const [element, setElement] = useState({});
  const [updatedData, setUpdatedData] = useState({
    first_name: '',
    last_name: '',
    // Otros campos...
  });

  useEffect(() => {
    // Realizar la operación GET para obtener los detalles del elemento específico desde la API
    fetch(`https://44prmzjk-8000.use2.devtunnels.ms/users/ProfList/usuarioP/${username}`)
      .then(response => response.json())
      .then(jsonData => setElement(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, [username]);

  useEffect(() => {
    // Actualizar los valores de first_name y last_name cuando cambia el elemento
    setUpdatedData({
      first_name: element.first_name || '',
      last_name: element.last_name || '',
      // Otros campos...
    });
  }, [element]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = () => {
    // Realizar la operación PUT para actualizar el elemento en la API
    fetch(`https://44prmzjk-8000.use2.devtunnels.ms/users/ProfList/usuarioP/${username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => response.json())
      .then(jsonData => console.log('Elemento actualizado:', jsonData))
      .catch(error => console.error('Error updating data:', error));
  };

  const handleCancel = () => {
    // Implementa lógica para cancelar (puedes redirigir a la página anterior o hacer lo que desees)
    console.log('Operación cancelada');
  };

  return (
    <div>
      <h2>Actualizar Elemento</h2>
      <label>Nombre:</label>
      <input type="text" name="first_name" value={updatedData.first_name} onChange={handleInputChange} />
      <label>Apellido:</label>
      <input type="text" name="last_name" value={updatedData.last_name} onChange={handleInputChange} />
      {/* Otros campos... */}
      <button onClick={handleUpdate}>Actualizar</button>
      <button onClick={handleCancel}>Cancelar</button>
    </div>
  );
};

export default EditProfessor;
