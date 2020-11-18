import axios from "axios"


export const getBanks = async (setBanks) => {
  const api = await axios.get("https://tryouts-cumplo.herokuapp.com/banks/");
  const banks = api.data;
  setBanks(banks);
}

export const filterBanks = (search, banks) => {
  const filteredBanks = banks.filter( ( { name } ) => {
    if( 
      name.toLowerCase().includes( search.toLowerCase().trim() ) 
    ) {
      return true;
    }
      return false;
  } );
  return filteredBanks;
}