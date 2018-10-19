import React from 'react';
import Plugin from './views/Plugin';

import './App.css';

export default function App() {
  const style = {
    width: '60vw',
    height: '60vh',
    margin: '20vh 20vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return (
    <div style={style}>
      <Plugin />
    </div>
  );
}
