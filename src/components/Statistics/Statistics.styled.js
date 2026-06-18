import styled from "styled-components";

export const StatisticsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
  display: grid;
  gap: 0.75rem;
  max-width: 420px;
  width: 100%;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.85rem 1rem;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    color: #0f172a;
    font-weight: 500;
  }

  li:first-of-type {
    margin-top: 0;
  }
`;
