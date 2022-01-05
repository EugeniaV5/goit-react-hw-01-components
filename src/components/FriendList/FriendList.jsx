import PropTypes from 'prop-types';
import { FriendCard } from './FriendCard';
import { Section } from '../common/Section.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <ul>
        {friends.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </ul>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
