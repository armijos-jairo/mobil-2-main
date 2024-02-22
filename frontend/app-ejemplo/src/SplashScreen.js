import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function SplashScreen() {
  const history = useHistory();

  useEffect(() => {
    // Redirige a la pantalla principal después de 3 segundos (3000 milisegundos)
    const redirectTimer = setTimeout(() => {
      history.push('/Navigation');
    }, 3000);

    return () => clearTimeout(redirectTimer); // Limpia el temporizador al desmontar el componente
  }, [history]);

  return (
    <div>
      {/* Muestra tu logo aquí */}
      <img src="/logoUCE.png" alt="Logo" /> {/* Ajusta la ruta de tu logo */}
    </div>
  );
}

export default SplashScreen;
