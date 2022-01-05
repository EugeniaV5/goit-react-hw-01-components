import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: calc(100% / 5);

  padding: ${props => props.theme.spacing(2)} 0;

  font-size: 10px;
  color: ${props => props.theme.colors.black};
  border: 1px solid #ececec;
  background-color: ${getRandomHexColor};
`;

export const StatsLabel = styled.span`
  margin-bottom: 6px;
  font-weight: bold;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 8607).toString(16)}`;
}
