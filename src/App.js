import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import FingerprintScanner from './huellita';
import EditProfessor from './EditProfessor';
import RUDProfesor from './RUDProfesor';
import RUDadmin from './RUDadmin';
import DeleteComponent from './deleteProfesor';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/profesores" element={<RUDProfesor />} />
          <Route path="/huellita" element={<FingerprintScanner />} />
          <Route path="/admin" element={<RUDadmin />} />
          <Route path="/editar/:username" element={<EditProfessor />} />
          <Route path="/eliminar/:username" element={<DeleteComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;