import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetProvider>
      <Table />
    </PlanetProvider>
  );
}

export default App;
