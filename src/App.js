import React from 'react'
import Content from './components/Content/Content';
import FilterTools from './components/FilterTools/FilterTools';
import Header from './components/Header/Header';
import BanksProvider from './context/BanksContext';
import BranchesProvider from './context/BranchesContext';
import DataRouteProvider from './context/DataRouteContext';
import EmployeesProvider from './context/EmployeesContext';

function App() {
  return (
    <DataRouteProvider>
      <BanksProvider>
        <BranchesProvider>
          <EmployeesProvider>
            <Header />
            <FilterTools />
            <Content />            
          </EmployeesProvider>
        </BranchesProvider>
      </BanksProvider>
    </DataRouteProvider>
  );
}

export default App;
