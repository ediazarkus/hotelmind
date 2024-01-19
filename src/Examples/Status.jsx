import { Button, Container, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';

const Status = ({ status, colorStatus }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <Container component="div" maxWidth="xs">
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        style={{
          width: '200px',
          backgroundColor: `${colorStatus}`,
          color: 'black',
          fontWeight: 'bold',
        }}
      >
        {status}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        style={{ marginTop: '10px' }}
      >
        <Typography style={{ marginLeft: '10px', width: '200px' }}>
          Secilla: 12
        </Typography>
        <Typography style={{ marginLeft: '10px', width: '200px' }}>
          Doble: 12
        </Typography>
        <Typography style={{ marginLeft: '10px', width: '200px' }}>
          King: 12
        </Typography>
      </Popover>
    </Container>
  );
};

export default Status;
