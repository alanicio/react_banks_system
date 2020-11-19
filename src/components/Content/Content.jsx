import React, { useContext } from 'react'
import { BanksContext } from '../../context/BanksContext'
import { BranchesContext } from '../../context/BranchesContext'
import { DataRouteContext } from '../../context/DataRouteContext'
import { filterBranchesByBank } from '../../helpers'
import BankCard from '../BankCard/BankCard'
import Branch from '../Branch/Branch'
import EmployeesTable from '../EmployeesTable/EmployeesTable'
import { Container } from './styled'

const Content = () => {
  const { banks } = useContext(BanksContext);
  const branchesContext = useContext(BranchesContext);
  const { 
    bank,
    branch,
    employe,
  } = useContext(DataRouteContext);

  let content;
  if (bank === null) {
    content = banks.map( (bankDetails) => <BankCard key={bankDetails.pk} bank={bankDetails} /> );
  } else if (branch === null) {
    const branches = filterBranchesByBank(bank.pk,branchesContext.branches); 
    content = branches.map( (branchDetails) => <Branch key={branchDetails.id} branch={branchDetails} /> );
  } else if (employe === null) {
    content = <EmployeesTable/>;
  }/* else if (createEmploye) {
    title = `Agregar empleado a ${bank.name} sucursal ${branch.name}`;
  } else if (employe === null) {
    title = `Empleados de ${bank.name} sucursal ${branch.name}`;
  } else if (employe !== null) {
    title = `${employe.name} ${employe.middle_name} ${employe.last_name}, Empleado de ${bank.name} sucursal ${branch.name}`;
  }
 */
  return (
    <Container>
      { content }
    </Container>
  )
}

export default Content
