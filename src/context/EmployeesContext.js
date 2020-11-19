import React, { createContext, useEffect, useState } from "react";
import { getEmployees } from "../helpers";

export const EmployeesContext = createContext();

const EmployeesProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [totalNumberOfEmployees, setTotalNumberOfEmployees] = useState(0);
  const [branchId, setBranchId] = useState(-1);

  useEffect(() => {
    if (branchId >= 0) {
      getEmployees(branchId, page, setEmployees, setTotalNumberOfEmployees);
      setMaxPage(Math.ceil(totalNumberOfEmployees / 5));
    }
    //eslint-disable-next-line
  }, [branchId, page]);

  return (
    <EmployeesContext.Provider
      value={{ employees, page, setPage, maxPage, setBranchId }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
