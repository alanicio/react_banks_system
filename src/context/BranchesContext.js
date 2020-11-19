import React, { createContext, useEffect, useState } from "react";
import { filterArrayByNameAttribute, getBranches } from "../helpers";

export const BranchesContext = createContext();

const BranchesProvider = (props) => {
  const [branches, setBranches] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getBranches(setBranches);
    //eslint-disable-next-line
  }, []);

  return (
    <BranchesContext.Provider
      value={{
        branches: filterArrayByNameAttribute(search, branches),
        search,
        setSearch,
      }}
    >
      {props.children}
    </BranchesContext.Provider>
  );
};

export default BranchesProvider;
