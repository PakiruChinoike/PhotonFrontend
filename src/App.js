import React from 'react';
import './App.css';

import Rotas from './Rotas';
import { AppProvider } from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Rotas />
    </AppProvider>
  );
}

export default App;
