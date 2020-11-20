import React, { useContext, useState } from 'react'
import Loader from 'react-loader-spinner';
import { DataRouteContext } from '../../context/DataRouteContext';
import { EmployeesContext } from '../../context/EmployeesContext'
import Paginator from '../Paginator/Paginator';
import { Button, LoaderContainer, Table } from './styled';

const EmployeesTable = () => {
  const {employees, setPage} = useContext(EmployeesContext);
  const { setCreateEmploye } = useContext(DataRouteContext);
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 1000);

  if(loader) {
    return (
      <LoaderContainer>
        <Loader 
          type="Grid"
          color="#5c5f61"
          height={100}
          width={100}
        />
      </LoaderContainer>
    );
  } else {
    return (
      <>
        <Button onClick={
          () => {
            setPage(1);
            setCreateEmploye(true);
          }
        } > <i className="fas fa-plus"></i>  Agregar empleado</Button>
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

}

export default EmployeesTable
