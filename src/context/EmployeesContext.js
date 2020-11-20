import React, { createContext, useEffect, useState } from "react";
import { getEmployees, invertPage } from "../helpers";

export const EmployeesContext = createContext();

const EmployeesProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [branchId, setBranchId] = useState(-1);
  const [orderDescendent, setOrderDescendent] = useState(true);

  const changeOrder = () => {
    setOrderDescendent(!orderDescendent);
  };

  useEffect(() => {
    if (branchId >= 0) {
      if (orderDescendent) {
        getEmployees(branchId, page, setEmployees, setMaxPage, orderDescendent);
      } else {
        const invertedPage = invertPage(page, maxPage);
        getEmployees(
          branchId,
          invertedPage,
          setEmployees,
          setMaxPage,
          orderDescendent
        );
      }
    }
    //eslint-disable-next-line
  }, [branchId, page, orderDescendent]);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        setEmployees,
        page,
        setPage,
        maxPage,
        setBranchId,
        orderDescendent,
        changeOrder,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
