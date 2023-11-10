import React, { useState } from 'react';
import Fingerprint2 from 'fingerprintjs2';

const FingerprintScanner = () => {
  const [fingerprint, setFingerprint] = useState(null);

  const scanFingerprint = () => {
    Fingerprint2.get({}, (components) => {
      const values = components.map((component) => component.value);
      const fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
      setFingerprint(fingerprint);
      console.log('Huella detectada:', fingerprint);
      // Puedes realizar acciones adicionales aquí, como enviar la huella al servidor.
    });
  };

  return (
    <div>
      <h2>Escáner de Huella Dactilar</h2>
      <p>Preciona el botón para simular el escaneo de huella.</p>
      <button onClick={scanFingerprint}>Escanear Huella</button>
      {fingerprint && <p>Huella detectada: {fingerprint}</p>}
    </div>
  );
};

export default FingerprintScanner;