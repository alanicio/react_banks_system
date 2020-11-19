import React from 'react'
import Content from './components/Content/Content';
import FilterTools from './components/FilterTools/FilterTools';
import Header from './components/Header/Header';
import BanksProvider from './context/BanksContext';
import BranchesProvider from './context/BranchesContext';
import DataRouteProvider from './context/DataRouteContext';

function App() {
  return (
    <DataRouteProvider>
      <BanksProvider>
        <BranchesProvider>
          <Header />
          <FilterTools />
          <Content />
        </BranchesProvider>
      </BanksProvider>
    </DataRouteProvider>
  );
}

export default App;
