import styled from 'styled-components';

export const ProfileDescription = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing(4)} 0;
  border: 1px solid #ececec;
  font-size: 14px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
  background-color: #cfcdcc;
  margin-bottom: ${props => props.theme.spacing(4)};
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.primaryText};
`;

export const UserInfo = styled.p`
  color: ${props => props.theme.colors.secondaryText};
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;

export const UserStatsList = styled.ul`
  display: flex;
  /* text-align: center; */
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.bgLightColor};
  border: 1px solid #ececec;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  padding: ${props => props.theme.spacing(2)} 0;

  &:not(:last-child) {
    border-right: 1px solid rgba(47, 48, 58, 0.1);
  }
`;

export const UserStatsLabel = styled.span`
  font-size: 12px;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.primaryText};
`;

export const UserStatsValue = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryText};
`;
