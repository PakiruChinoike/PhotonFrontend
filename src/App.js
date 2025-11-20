import React from 'react';
import './App.css';

import Rotas from './Rotas';
import { AppProvider } from './context/AppProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <Rotas />
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
