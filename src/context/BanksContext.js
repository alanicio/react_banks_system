import React, { createContext, useEffect, useState } from "react";
import { filterArrayByNameAttribute, getBanks } from "../helpers";

export const BanksContext = createContext();

const BanksProvider = (props) => {
  const [banks, setBanks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (banks.length === 0) {
      getBanks(setBanks);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <BanksContext.Provider
      value={{
        banks: filterArrayByNameAttribute(search, banks),
        search,
        setSearch,
      }}
    >
      {props.children}
    </BanksContext.Provider>
  );
};

export default BanksProvider;
