import React from 'react'
import Content from './components/Content/Content';
import FilterTools from './components/FilterTools/FilterTools';
import Header from './components/Header/Header';
import BanksProvider from './context/BanksContext';
import DataRouteProvider from './context/DataRouteContext';

function App() {
  return (
    <DataRouteProvider>
      <BanksProvider>
        <Header />
        <FilterTools />
        <Content />
      </BanksProvider>
    </DataRouteProvider>
  );
}

export default App;
