import React from 'react';
//import { MuiButton } from './components/MuiButton'
import { Button } from '@material-ui/core';
import { Stack } from '@mui/material';
import './Play.css';
import logo from './logo.png';


const Play = ()=> {
  return (
    <div className='play-page' id='wrapper'>
      <h1>Pick a block!</h1>
      {/* <MuiTypography /> */}
      {/*<MuiButton /> */}
      <div id='first'>
      <Stack spacing={1}>
      <Stack spacing={2} direction='row'>
      <Button variant ='contained' color="primary">Shopping</Button>
      <Button variant ='contained' color="success">Family</Button>
      <Button variant ='contained' color="secondary">Payment</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
      <Button variant ='contained' color="success">Loan</Button>
      <Button variant ='contained' color="secondary">Maintainance</Button>
      <Button variant ='contained' color="primary">Rent</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
      <Button variant ='contained' color="primary">New Card</Button>
      <Button variant ='contained' color="success">Theater</Button>
      <Button variant ='contained' color="secondary">Payment</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
      <Button variant ='contained' color="success">House</Button>
      <Button variant ='contained' color="secondary">Maintainance</Button>
      <Button variant ='contained' color="primary">Rent</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
      <Button variant ='contained' color="primary">Payment</Button>
      <Button variant ='contained' color="success">Family</Button>
      <Button variant ='contained' color="secondary">Shopping</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
      <Button variant ='contained' color="primary">Shopping</Button>
      <Button variant ='contained' color="success">Family</Button>
      <Button variant ='contained' color="secondary">Payment</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
      <Button variant ='contained' color="success">Loan</Button>
      <Button variant ='contained' color="secondary">Maintainance</Button>
      <Button variant ='contained' color="primary">Rent</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
      <Button variant ='contained' color="primary">New Card</Button>
      <Button variant ='contained' color="success">Theater</Button>
      <Button variant ='contained' color="secondary">Payment</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
      <Button variant ='contained' color="success">House</Button>
      <Button variant ='contained' color="secondary">Maintainance</Button>
      <Button variant ='contained' color="primary">Rent</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
      <Button variant ='contained' color="primary">Payment</Button>
      <Button variant ='contained' color="success">Family</Button>
      <Button variant ='contained' color="secondary">Shopping</Button>
      </Stack>
      </Stack>
      </div>
      <div id='second'>
      <img src={logo} />
      <h3>Decisions, Decisions...</h3>
      <h2>Score: 620</h2>
      </div>
    </div>
    
  );
}

export default Play;