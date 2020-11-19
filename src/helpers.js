import axios from "axios"


export const getBanks = async (setBanks) => {
  const api = await axios.get("https://tryouts-cumplo.herokuapp.com/banks/");
  const banks = api.data;
  setBanks(banks);
}

export const filterArrayByNameAttribute = (search, array) => {
  const filteredArray = array.filter( ( { name } ) => {
    if( 
      name.toLowerCase().includes( search.toLowerCase().trim() ) 
    ) {
      return true;
    }
      return false;
  } );
  return filteredArray;
}

export const getBranches = async (setBranches) => {
  const api = await axios.get("https://tryouts-cumplo.herokuapp.com/branches/");
  const branches = api.data.results;
  setBranches(branches);
}

export const filterBranchesByBank = (BankId,branches) => {
  return branches.filter( ({bank}) => bank === BankId );
}
