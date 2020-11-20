import React, { useContext } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";
import { Container, Page } from "./styled";

const Paginator = () => {
  const { maxPage, page, setPage } = useContext(EmployeesContext);
  let pagesArray = [];
  for (let i = 1; i <= maxPage; i++) {
    pagesArray.push(i);
  }
  return (
    <Container>
      {pagesArray.map((number) => (
        <Page
          key={number}
          selected={page === number ? true : false}
          onClick={() => setPage(number)}
        >
          {number}
        </Page>
      ))}
    </Container>
  );
};

export default Paginator;
