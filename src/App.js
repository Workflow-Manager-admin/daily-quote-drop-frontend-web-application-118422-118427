import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import QuoteDisplay from './QuoteDisplay';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <QuoteDisplay />
      </Container>
    </>
  );
}

export default App;
