import React, { useContext } from 'react'
import { EmployeesContext } from '../../context/EmployeesContext'
import Paginator from '../Paginator/Paginator';
import { Button, Table } from './styled';

const EmployeesTable = () => {
  const {employees} = useContext(EmployeesContext);

  return (
    <>
      <Button> <i className="fas fa-plus"></i>  Agregar empleado</Button>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Primer apellido</th>
            <th>Segundo apellido</th>
          </tr>
        </thead>
        <tbody>        
          { employees.map( ({id,name,middle_name,last_name}) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{middle_name}</td>
              <td>{last_name}</td>
            </tr>
          ) ) }
        </tbody>
      </Table>
      <Paginator />      

    </>
  )
}

export default EmployeesTable
