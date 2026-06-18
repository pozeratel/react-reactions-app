import styled from "styled-components";

export const OptionsList = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  li {
    margin: 0;
  }
`;

export const OptionButton = styled.button`
  padding: 0.75rem 1.1rem;
  border: none;
  border-radius: 10px;
  background: #2563eb;
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: #1d4ed8;
  }
`;
