import React, { useState } from "react";
import PropTypes from "prop-types";
import { createNewEmployee } from "../../helpers";
import { Alert, Form, FormBlock } from "./styled";

const EmployeeForm = ( {setCreateEmploye, branchId} ) => {
  const [alert, setAlert] = useState(false);
  const [employee, setEmployee] = useState({
    name: "",
    middle_name: "",
    last_name: "",
    branch: branchId,
  });

  const { name, middle_name, last_name } = employee;

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      middle_name.trim() === "" ||
      last_name.trim() === ""
    ) {
      setAlert(true);
      return;
    }

    setAlert(false);
    createNewEmployee(employee);
    setCreateEmploye(false);
  };

  const typeHandler = (e) => {
    if(/^[A-Za-zá-ź ]*$/.test(e.target.value)){
      setEmployee({
        ...employee,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      {alert ? (
        <Alert>
          <h4 data-testid="alert">Todos los campos son obligatorios</h4>
        </Alert>
      ) : null}
      <FormBlock>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          data-testid="name"
          onChange={typeHandler}
          value={name}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="middle_name">Primer Apellido:</label>
        <input
          type="text"
          name="middle_name"
          id="middle_name"
          data-testid="middle_name"
          onChange={typeHandler}
          value={middle_name}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="last_name">Segundo Apellido:</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          data-testid="last_name"
          onChange={typeHandler}
          value={last_name}
        />
      </FormBlock>

      <button type="submit" data-testid="submit">
        Guardar Empleado
      </button>
    </Form>
  );
};

EmployeeForm.propTypes = {
  setCreateEmploye: PropTypes.func.isRequired,
  branchId: PropTypes.number.isRequired,
};

export default EmployeeForm;
