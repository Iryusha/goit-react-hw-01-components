import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import style from '../friendlist/friendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />;
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
