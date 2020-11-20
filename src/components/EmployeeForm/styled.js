import styled from "@emotion/styled";


export const Form = styled.form`
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 8px;

  input, label {
    display: block;
  }

  button {
    display: block;
    padding: 1rem 1rem;
    margin-left: 2rem;
    background-color: #569939;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export const FormBlock = styled.div`
  display: inline-block;
  margin: 2rem;
`;

export const Alert = styled.div`
  background-color: #dc3545;
  color: white;
  padding: 1rem 2rem;
  display: block;
  text-align: center;
`;