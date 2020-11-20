import React, { useContext } from "react";
import { BanksContext } from "../../context/BanksContext";
import { BranchesContext } from "../../context/BranchesContext";
import { DataRouteContext } from "../../context/DataRouteContext";
import { filterBranchesByBank } from "../../helpers";
import BankCard from "../BankCard/BankCard";
import Branch from "../Branch/Branch";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import { Container } from "./styled";

const Content = () => {
  const { banks } = useContext(BanksContext);
  const branchesContext = useContext(BranchesContext);
  const { bank, branch, createEmploye, setCreateEmploye } = useContext(
    DataRouteContext
  );

  let content;
  if (bank === null) {
    content = banks.map((bankDetails) => (
      <BankCard key={bankDetails.pk} bank={bankDetails} />
    ));
  } else if (branch === null) {
    const branches = filterBranchesByBank(bank.pk, branchesContext.branches);
    content = branches.map((branchDetails) => (
      <Branch key={branchDetails.id} branch={branchDetails} />
    ));
  } else if (createEmploye) {
    content = (
      <EmployeeForm setCreateEmploye={setCreateEmploye} branchId={branch.id} />
    );
  } else {
    content = <EmployeesTable />;
  }

  return <Container>{content}</Container>;
};

export default Content;
