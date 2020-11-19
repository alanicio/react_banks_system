import React, { useContext } from 'react'
import { EmployeesContext } from '../../context/EmployeesContext'

const EmployeesTable = () => {
  const {employees} = useContext(EmployeesContext);

  return (
    <>
      <button>Agregar empleado</button>
      <table>
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
      </table>
    </>
  )
}

export default EmployeesTable
