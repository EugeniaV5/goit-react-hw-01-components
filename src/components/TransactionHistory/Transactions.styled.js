import styled from 'styled-components';

export const Table = styled.table`
  font-size: 10px;
  width: 100%;
`;

export const TableHeader = styled.thead`
  background-color: rgba(27, 199, 244, 0.57);
`;

export const TableRow = styled.tr`
  &:nth-child(2n) {
    background-color: rgba(207, 221, 225, 0.57);
  }
`;

export const TableTd = styled.td`
  text-align: center;
`;
