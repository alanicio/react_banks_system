import React from 'react'
import Content from './components/Content/Content';
import FilterTools from './components/FilterTools/FilterTools';
import Header from './components/Header/Header';
import BanksProvider from './context/BanksContext';

function App() {
  return (
    <BanksProvider>
      <Header />
      <FilterTools />
      <Content />
    </BanksProvider>
  );
}

export default App;
