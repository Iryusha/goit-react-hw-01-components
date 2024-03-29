import PropTypes from 'prop-types';
import style from '../FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  //   return (
  <li className={style.item}>
    <span
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      className={style.status}
    ></span>
    <img className={style.avatar} src={avatar} alt={name} width="48" />
    <p className={style.name}>{name}</p>
  </li>
  //   );
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
