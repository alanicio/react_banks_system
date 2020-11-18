import React, { createContext, useEffect, useState } from "react";
import { filterBanks, getBanks } from "../helpers";

export const BanksContext = createContext();

const BanksProvider = (props) => {
  const [banks, setBanks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (banks.length === 0) {
      getBanks(setBanks);
    }
  }, []);

  return (
    <BanksContext.Provider
      value={{ banks: filterBanks(search, banks), search, setSearch }}
    >
      {props.children}
    </BanksContext.Provider>
  );
};

export default BanksProvider;
