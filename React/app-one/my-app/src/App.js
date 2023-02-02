import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import AppSearchBar from './components/AppSearchBar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppSearchBar />
    </ChakraProvider>
  );
}

export default App;
