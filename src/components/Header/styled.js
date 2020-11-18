import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  background-color: #ec3a49;
  color: white;
  padding: 3rem 0;

  h1 {
    margin: auto;
  }
`;

export const Icon = styled.i`
  font-size: 40px;
  margin-left: 20px;
  display: ${ ({display}) => display };
`;