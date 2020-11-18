import React, { createContext, useState } from "react";

export const DataRouteContext = createContext();

const DataRouteProvider = props => {
  const [bank, setBank] = useState(null);
  const [branch, setBranch] = useState(null);
  const [employe, setEmploye] = useState(null);
  const [createEmploye, setCreateEmploye] = useState(false);

  const goBack = () => {
    if(createEmploye) {
      setCreateEmploye(false);
    } else if(employe !== null) {
      setEmploye(null);
    } else if(branch !== null) {
      setBranch(null);
    } else if(bank !== null) {
      setBank(null);
    }
  }
  

  return (
    <DataRouteContext.Provider
      value={{
        bank,
        setBank,
        branch,
        setBranch,
        employe,
        setEmploye,
        createEmploye,
        setCreateEmploye,
        goBack,
      }}
    >{props.children}</DataRouteContext.Provider>
  );
};

export default DataRouteProvider;
