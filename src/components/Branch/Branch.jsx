import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BranchCard } from "./styled";
import { DataRouteContext } from "../../context/DataRouteContext";
import { EmployeesContext } from "../../context/EmployeesContext";

const Branch = ({ branch }) => {
  const { name } = branch;
  const { setBranch } = useContext(DataRouteContext);
  const { setBranchId } = useContext(EmployeesContext);

  return (
    <BranchCard onClick={() =>{
      setBranch(branch);
      setBranchId(branch.id);
      }}>
      <h3>{name}</h3>
      <p>
        <span>Pais:</span> Pais
      </p>
      <p>
        <span>Ciudad:</span> Ciudad
      </p>
      <p>
        <span>Dirección:</span> Calle X, 1680, nnumero 8888888, entre calle A y
        calle C
      </p>
    </BranchCard>
  );
};

Branch.propTypes = {
  branch: PropTypes.object,
};

export default Branch;
