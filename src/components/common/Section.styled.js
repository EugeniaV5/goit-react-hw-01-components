import styled from 'styled-components';

export const Section = styled.section`
  width: 250px;
  height: auto;
  display: block;
  margin: 20px auto;
  border-radius: 4px;
  box-shadow: ${props => props.theme.colors.boxShadow};
  padding: 20px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
