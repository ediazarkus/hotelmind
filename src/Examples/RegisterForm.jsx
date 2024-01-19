import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import Status from './Status';

const RegisterForm = () => {
  const location = useLocation();
  const data = location.state || {};

  const history = useHistory();

  return (
    <Container
      component="div"
      maxWidth="xs"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh', // Asegura que el contenedor ocupe el 100% de la altura de la ventana
        minWidth: '100%', // Asegura que el contenedor ocupe el 100% del ancho de la pantalla
        backgroundColor: '#e2d8d8', // Puedes cambiar el color de fondo según tus preferencias
        padding: '20px', // Añade un poco de espacio alrededor del contenido
      }}
    >
      <Typography component="h1" variant="h5">
        Registro
      </Typography>
      <Container
        style={{
          display: 'flex',
          minWidth: '60%',
          justifyContent: 'space-evenly',
        }}
      >
        <Status status={'Disponible'} colorStatus={'lightgreen'} />
        <Status status={'Ocupado'} colorStatus={'red'} />
        <Status status={'Reservado'} colorStatus={'yellow'} />
        <Status status={'No Disponible'} colorStatus={'grey'} />
      </Container>

      <Button onClick={() => history.replace('/')}>Volver</Button>
    </Container>
  );
};

export default RegisterForm;
