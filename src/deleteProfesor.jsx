import React, { useEffect } from 'react';

const DeleteComponent = ({ username }) => {
  const handleDelete = () => {
    // Realizar la operación DELETE para eliminar el elemento en la API
    fetch(`https://44prmzjk-8000.use2.devtunnels.ms/users/ProfList/usuarioP/${username}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log('Elemento eliminado con éxito');
        } else {
          console.error('Error al eliminar el elemento');
        }
      })
      .catch(error => console.error('Error deleting data:', error));
  };

  useEffect(() => {
    handleDelete();

  }, [username]);

  return (
    <div>
      <h2>Eliminar Elemento</h2>
      {/* Puedes mostrar un mensaje de confirmación o redirigir después de la eliminación */}
      <p>Eliminando elemento...</p>
    </div>
  );
};

export default DeleteComponent;