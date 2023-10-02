import React from 'react';
import './App.css';
import { Card } from '@mui/material';

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Card sx={{ height: '100px', width: '150px', alignItems: 'center', backgroundColor: '#456631', color: '#EC6613', padding: '25px 32px 40px' }}><h2>Hello World</h2></Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>
          I am Srikanth Bethi</h2>
        <h2>
          I am Srikanth Hi how are you is it ok for you</h2>
      </div>
    </>
  );
}

export default App;
