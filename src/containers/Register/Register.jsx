import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
  const [axiosData, setAxiosData] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handleClick = () => {
    history.replace('/');
  };

  useEffect(() => {
    const fetchDataWithFetch = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setFetchData(json);
      } catch (error) {
        console.error('Error al realizar la solicitud con fetch:', error);
      }
    };

    const fetchDataWithAxios = () => {
      axios
        .get('https://fakestoreapi.com/products')
        .then((response) => {
          setAxiosData(response.data);
        })
        .catch((error) => {
          console.error(
            'Error al realizar la solicitud con axios:',
            error.message
          );
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchDataWithFetch();
    fetchDataWithAxios();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Productos
      </Typography>

      <div
        style={{
          display: 'flex',
          marginBottom: '20px',
          justifyContent: 'center',
        }}
      >
        {/* Botón utilizando Link */}
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
        >
          Ir a Home (Link)
        </Button>

        {/* Botón utilizando useHistory */}
        <Button onClick={handleClick} variant="contained" color="primary">
          Ir a Home (useHistory)
        </Button>
      </div>

      {loading ? (
        <CircularProgress style={{ margin: 'auto', display: 'block' }} />
      ) : (
        <Grid container spacing={3}>
          {fetchData.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Precio: ${item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Register;
