import styled from 'styled-components';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: ${props => props.theme.colors.boxShadow};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
`;

export const Status = styled.span`
  margin-right: 20px;

  height: 10px;
  width: 10px;
  border-radius: 50%;
`;

export const Online = styled(Status)`
  background-color: ${props => props.theme.colors.green};
`;

export const Offline = styled(Status)`
  background-color: ${props => props.theme.colors.red};
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;
