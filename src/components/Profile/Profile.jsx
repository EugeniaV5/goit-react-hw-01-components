import PropTypes from 'prop-types';
import { Section } from '../common/Section.styled';

import {
  ProfileDescription,
  Avatar,
  Name,
  UserInfo,
  UserStatsList,
  UserStatsLabel,
  UserStatsItem,
  UserStatsValue,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Section>
      <ProfileDescription>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </ProfileDescription>

      <UserStatsList>
        <UserStatsItem>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsValue> {followers}</UserStatsValue>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsValue> {views}</UserStatsValue>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsValue> {likes}</UserStatsValue>
        </UserStatsItem>
      </UserStatsList>
    </Section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
