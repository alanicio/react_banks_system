import React, { useContext } from "react";
import { DataRouteContext } from "../../context/DataRouteContext";
import { EmployeesContext } from "../../context/EmployeesContext";
import { Container, Icon } from "./styled";

const Header = () => {
  const { bank, branch, employe, createEmploye, goBack } = useContext(DataRouteContext);
  const { setPage } = useContext(EmployeesContext);
  let title;
  if (bank === null) {
    title = "BANCOS";
  } else if (branch === null) {
    title = `Sucursales de ${bank.name}`;
  } else if (createEmploye) {
    title = `Agregar empleado a ${bank.name} sucursal ${branch.name}`;
  } else if (employe === null) {
    title = `Empleados de ${bank.name} sucursal ${branch.name}`;
  } else if (employe !== null) {
    title = `${employe.name} ${employe.middle_name} ${employe.last_name}, Empleado de ${bank.name} sucursal ${branch.name}`;
  }

  return (
    <Container>
      {bank === null ? null : (
        <Icon data-testid="arrow" className="fas fa-arrow-left" onClick={
          () =>{
            goBack();
            setPage(1);
          }
        }></Icon>
      )}

      <h1 data-testid="title">{title}</h1>
    </Container>
  );
};

export default Header;
