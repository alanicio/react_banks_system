import styled from "@emotion/styled";

export const ToolsContainer = styled.div`
  display: flex;
  padding: 2rem 4rem;
`;

export const TextInput = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #e8e8e8;
  width: 400px;
  padding: 1rem 2rem;
  margin-right: 10rem;
  display: inline-block;
  @media (max-width: 680px) {
    max-width: 80%;
  }
  @media (max-width: 400px) {
    max-width: 75%;
  }

  label {
    color: #5f5f5f;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance:    none;
    appearance:         none;
    background-color: #f9f9f9;
    border: none;
    margin-left: 1rem;
    width: 70%;
    font-family: Arial, Helvetica, sans-serif;
  } 
`;
