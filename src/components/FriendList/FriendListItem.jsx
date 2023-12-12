import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.isOnline : css.isOffline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export { FriendListItem };
