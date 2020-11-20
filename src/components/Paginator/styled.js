import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding: 2rem 5rem;
  justify-content: center;
  margin: auto;
`;

export const Page = styled.div`
  background-color: ${({ selected }) => (selected ? "#337a97" : null)};
  color: ${ ({selected}) => (selected? "white" : null) };
  font-size: 14px;
  padding: 0.75rem 0.75rem;
  margin-right: 1rem;
  cursor: pointer;
`;