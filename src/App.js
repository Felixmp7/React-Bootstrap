import React from 'react';
import Grid1 from './components/Grid1'
import Container from 'react-bootstrap/Container'
import Grid2 from './components/Grid2'
import Grid3 from './components/Grid3'

function App() {
  return (
    <Container>
        <Grid1 />
        <hr/>
        <Grid2 />
        <hr/>
        <Grid3 />
        <hr/>
    </Container>
  );
}

export default App;
