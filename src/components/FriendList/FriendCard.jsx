import PropTypes from 'prop-types';

import { FriendsItem, Avatar, Online, Offline } from './Friends.styled';

export const FriendCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendsItem>
      {isOnline ? <Online /> : <Offline />}
      <Avatar src={avatar} alt="User avatar" width="38" />
      <p>{name}</p>
    </FriendsItem>
  );
};

FriendCard.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
