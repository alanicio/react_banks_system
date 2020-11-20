import styled from "@emotion/styled";

export const LoaderContainer = styled.div`
  margin: auto;
  padding-top: 10rem;
`;

export const Button = styled.button`
  padding: 1rem 1rem;
  background-color:  #569939;
  color: white;
  border: none;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 1rem 2rem;
    border: 1px solid #ddd;
  }

  th {
    background-color: #5c5f61;
    color: white;
  }

  td {
    background-color: white;
  }

  tbody tr {
    &:hover {
      td {
        background-color:  #556b83;
        color: white;
        cursor: pointer;
      }
    }
  }

`;