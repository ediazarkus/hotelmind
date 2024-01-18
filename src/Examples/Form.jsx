//plantilla de formulario usando Material UI

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';

const RegisterForm = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
    history.replace('/');
  };
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                name="firstName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Registrarse
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterForm;
