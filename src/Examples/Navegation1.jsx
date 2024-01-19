import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];

const Navegation1 = () => {
  const history = useHistory();

  const handleClick = () => {
    history.replace('/Register');
  };

  const handleClick2 = () => {
    history.push({
      pathname: '/RegisterForm',
      state: { name: 'Introduccion de React' },
    });
  };
  return (
    <Container
      component="div"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh', // Asegura que el contenedor ocupe el 100% de la altura de la ventana
        minWidth: '100%', // Asegura que el contenedor ocupe el 100% del ancho de la pantalla
        backgroundColor: '#f5f5f5', // Puedes cambiar el color de fondo según tus preferencias
        padding: '20px', // Añade un poco de espacio alrededor del contenido
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Image Gallery
      </Typography>

      <ImageList variant="masonry" cols={3} gap={5} rowHeight={'100'}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        component={Link}
        to="/Form"
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
      >
        Using Link
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ marginTop: '10px', fontWeight: 'bold' }}
      >
        Using useHistory
      </Button>
      <Button
        component={Link}
        to={{
          pathname: '/Form',
          state: { name: 'Introduccion de React', image: itemData },
        }}
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
      >
        sending data
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick2}
        style={{ marginTop: '10px', fontWeight: 'bold' }}
      >
        Using useHistory to send data
      </Button>
    </Container>
  );
};

export default Navegation1;
