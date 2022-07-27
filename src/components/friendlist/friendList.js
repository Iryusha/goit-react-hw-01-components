import PropTypes from 'prop-types';
import style from '../friendlist/friendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={style.item} key={id}>
            <span
              style={{ backgroundColor: isOnline ? 'green' : 'red' }}
              className={style.status}
            ></span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
