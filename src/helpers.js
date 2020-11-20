import axios from "axios";

export const getBanks = async (setBanks) => {
  const api = await axios.get("https://tryouts-cumplo.herokuapp.com/banks/");
  const banks = api.data;
  setBanks(banks);
};

export const filterArrayByNameAttribute = (search, array) => {
  const filteredArray = array.filter(({ name }) => {
    if (name.toLowerCase().includes(search.toLowerCase().trim())) {
      return true;
    }
    return false;
  });
  return filteredArray;
};

export const getBranches = async (setBranches) => {
  const api = await axios.get("https://tryouts-cumplo.herokuapp.com/branches/");
  const branches = api.data.results;
  setBranches(branches);
};

export const filterBranchesByBank = (bankId, branches) => {
  return branches.filter(({ bank }) => bank === bankId);
};

export const getEmployees = async (branchId,page, setEmployees, setTotalNumberOfEmployees,setMaxPage) => {
  const api = await axios.get(
    `https://tryouts-cumplo.herokuapp.com/employees/?branch=${branchId}&page=${page}`
  );
  const employees = api.data.results;
  const totalNumberOfEmployees = api.data.count;
  setEmployees(employees);
  setTotalNumberOfEmployees(totalNumberOfEmployees);
  setMaxPage(Math.ceil(totalNumberOfEmployees / 5));
};
